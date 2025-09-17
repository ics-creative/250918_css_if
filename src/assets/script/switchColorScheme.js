function initColorSchemeSwitch() {
  const colorSchemeRadios = document.querySelectorAll(
    'input[name="colorScheme"]',
  );
  colorSchemeRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        const colorSchemeType = e.target.value;
        setColorScheme(colorSchemeType);
      }
    });
  });

  // 初回読み込み時にカラースキームを設定
  const checkedRadio = Array.from(colorSchemeRadios).find(
    (radio) => radio.checked,
  );
  setColorScheme(checkedRadio.value);
}

function setColorScheme(colorSchemeType) {
  document.documentElement.style.setProperty("--color-scheme", colorSchemeType);
}

initColorSchemeSwitch();
