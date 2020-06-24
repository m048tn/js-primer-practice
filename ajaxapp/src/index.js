console.log("index.js: loaded");
function fetchUserInfo() {
  const userId = "m048tn";
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((response) => {
      console.log(response.status);
      if (!response.ok) {
        console.error("エラーレスポンス", response);
      } else {
        return response.json().then((userInfo) => {
          // パースされたオブジェクトが渡される
          console.log(userInfo);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
