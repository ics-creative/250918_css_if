// temperatureスライダーの値をCSS変数として動的に挿入
document.addEventListener("DOMContentLoaded", function () {
  const temperatureSlider = document.querySelector(".temparetureSlider");
  const temperatureContainer = document.querySelector(
    ".temparetureSliderContainer",
  );

  if (temperatureSlider && temperatureContainer) {
    // 初期値を設定
    updateTemperatureCSS(temperatureSlider.value);

    // スライダーの値が変更された時にCSS変数を更新
    temperatureSlider.addEventListener("input", function () {
      updateTemperatureCSS(this.value);
    });

    function updateTemperatureCSS(value) {
      // --temparetureCSS変数をインラインスタイルとして設定
      temperatureContainer.style.setProperty("--tempareture", value);
    }
  }
});
