import "./styles.css";

const onClickAdd = () => {
  //　テキストボックスから値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックスを空にする
  document.getElementById("add-text").value = "";

  // javascriptでDOMを作成するにはcleateElement関数を使用
  // div生成 <div></div>
  const div = document.createElement("div");
  // divタグにlist-lowクラスを付与 <div class="list-low"></div>
  div.className = "list-low";

  // liタグ生成 <li></li>
  const li = document.createElement("li");
  // liに入力された文字を表示　 <li>ああああ</li>
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  // <div class="list-low">
  // 　　<li>ああああ</li>
  // </div>
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
