// ボタンバリアント切り替え機能
const initButtonVariantSwitch = () => {
  const buttonVariantRadios = document.querySelectorAll(
    'input[name="buttonVariant"]',
  );
  const buttonElement = document.querySelector(".buttonVariant");

  // ラジオボタンの変更イベントリスナーを設定
  buttonVariantRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        const variantType = e.target.value;
        setButtonVariant(buttonElement, variantType);
      }
    });
  });

  // 初回読み込み時にバリアントを設定
  const checkedRadio = Array.from(buttonVariantRadios).find(
    (radio) => radio.checked,
  );
  setButtonVariant(buttonElement, checkedRadio.value);
};

// ボタン要素にバリアントのCSS変数を設定
const setButtonVariant = (buttonElement, variantType) => {
  // CSS変数として現在のバリアントを設定
  buttonElement.style.setProperty("--variant", variantType);
};

initButtonVariantSwitch();

const typographyElement = document.querySelector(".typography");

let selectedTypographyVariant = {
  fontSize: "",
  fontWeight: "",
  fontColor: "",
};

const initTypographyVariantSwitch = () => {
  const typographyVariantSelectors = document.querySelectorAll(
    ".typographySelector",
  );
  typographyVariantSelectors.forEach((selector) => {
    selector.addEventListener("change", (e) => {
      const value = e.target.value;
      const type = e.target.name;
      setTypographyVariant(type, value);
    });
  });

  const checkedSelectors = Array.from(typographyVariantSelectors).map(
    (selector) => {
      return {
        name: selector.name,
        value: selector.value,
      };
    },
  );
  checkedSelectors.forEach((selector) => {
    setTypographyVariant(selector.name, selector.value);
  });
};

const setTypographyVariant = (type, value) => {
  const selectedTypographyValues = selectedTypographyVariant[type];
  typographyElement.classList.remove(`${type}-${selectedTypographyValues}`);
  typographyElement.classList.add(`${type}-${value}`);
  selectedTypographyVariant[type] = value;
};
// タイポグラフィーバリアント切り替え機能の初期化
initTypographyVariantSwitch();
