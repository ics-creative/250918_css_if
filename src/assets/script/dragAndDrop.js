const draggableItems = document.querySelectorAll(".draggableItem");
const dropAreas = document.querySelectorAll(".dropArea");
const dragAndDropArea = document.querySelector(".dragAndDrop");

// ドラッグ中の要素
let draggedElement = null;

/**
 * ドラッグ開始時の処理
 * @param  event {DragEvent}
 */
const handleDragStart = (event) => {
  draggedElement = event.target;
  dragAndDropArea.style.setProperty(
    "--dragging-type",
    event.target.dataset.type,
  );
  event.dataTransfer.setData("text/plain", event.target.textContent);
  event.dataTransfer.setData("text/type", event.target.dataset.type);
};

/**
 * ドラッグ終了時の処理
 */
const handleDragEnd = () => {
  draggedElement = null;
  dragAndDropArea.style.removeProperty("--dragging-type");
};

/**
 * ドラッグオーバー時の処理
 * @param  event {DragEvent}
 * @param  dropArea {HTMLElement}
 */
const handleDragOver = (event, dropArea) => {
  event.preventDefault(); // デフォルトの動作を防ぐ
  // ドラッグした要素のタイプを取得
  const draggedType = draggedElement.dataset.type;

  // 対象のドロップエリアが空かどうか？出発地点のドロップエリアを対象外とするため。
  const isEmpty = dropArea.querySelector(".draggableItem") === null;

  // ドラッグした要素のタイプとドロップエリアのタイプが一致するか？
  const isSameType = draggedType === dropArea.dataset.droppableType;
  if (isEmpty && isSameType) {
    dragAndDropArea.style.setProperty("--is-dragging-over", "true");
  }
};

/**
 * ドラッグリーブ時の処理
 */
const handleDragLeave = () => {
  dragAndDropArea.style.removeProperty("--is-dragging-over");
};

// ドラッグする要素にイベントリスナーを追加
draggableItems.forEach((item) => {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragend", handleDragEnd);
});

// ドロップエリアのイベントリスナーを追加
dropAreas.forEach((dropArea) => {
  // ドラッグオーバー時
  dropArea.addEventListener("dragover", (event) =>
    handleDragOver(event, dropArea),
  );

  // ドラッグリーブ時
  dropArea.addEventListener("dragleave", handleDragLeave);

  // ドロップ時
  dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dragAndDropArea.style.removeProperty("--is-dragging-over");

    // ドラッグ中のアイテムのタイプを取得
    const draggedType = event.dataTransfer.getData("text/type");

    // ドロップエリアのタイプを取得
    const dropAreaType = dropArea.dataset.droppableType;

    // タイプが一致する場合のみドロップを実行
    if (draggedType === dropAreaType && draggedElement) {
      // ドラッグした要素をドロップエリアに移動
      dropArea.appendChild(draggedElement);
    }
  });
});
