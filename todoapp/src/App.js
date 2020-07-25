console.log("app.js: loaded");
console.log(this);
export class App {
  constructor() {
    console.log("App initialized");
    console.log(this);
  }
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    formElement.addEventListener("submit", (event) => {
      // submitイベントの本来の動作を止める
      event.preventDefault();
      console.log(`入力値の値：${inputElement.value}`);
    });
  }
}
