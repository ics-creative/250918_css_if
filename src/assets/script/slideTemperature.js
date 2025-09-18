// temperatureスライダーの値をCSS変数として動的に挿入
const temperatureSlider = document.querySelector(".temparetureSlider");
const temperatureContainer = document.querySelector(
  ".temparetureSliderContainer",
);

// --temparetureCSS変数をインラインスタイルとして設定
const updateTemperatureCSS = (value) => {
  temperatureContainer.style.setProperty("--tempareture", value);
};

// スライダーの値が変更された時にCSS変数を更新
temperatureSlider.addEventListener("input", (event) => {
  updateTemperatureCSS(event.target.value);
});

// 初期値を設定
updateTemperatureCSS(temperatureSlider.value);
