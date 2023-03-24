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

  //buttonタグ　(完了)生成 <button>完了</button>
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //buttonタグ　(完了)生成 <button>削除</button>
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // divタグの子要素に各要素を設定
  // <div class="list-low">
  // 　　<li>ああああ</li>
  // </div>
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
