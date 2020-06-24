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
          const view = escapeHTML`
          <h4>${userInfo.avater_url} (@${userInfo.login})</h4>
          <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
          <dl>
            <dt>location</dt>
            <dd>${userInfo.location}</dd>
            <dt>Repositories</dt>
            <dd>${userInfo.public_repos}</dd>
          </dl>
          `;

          const result = document.getElementById("result");
          result.innerHTML = view;
          // パースされたオブジェクトが渡される
          console.log(userInfo);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * テンプレートリテラルにタグ付けするための関数
 *
 * @param {string} strings 文字列リテラルの配列
 * @param  {...any} values 埋め込まれる値の配列
 */
function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}

function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
