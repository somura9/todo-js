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
  div.className = "list-row";

  // liタグ生成 <li></li>
  const li = document.createElement("li");
  // liに入力された文字を表示　 <li>ああああ</li>
  li.innerText = inputText;

  //buttonタグ　(完了)生成 <button>完了</button>
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);

    document.getElementById("complete-list").appendChild(li);
    document.getElementById("complete-list").appendChild(undoButton);
  });

  //buttonタグ　(削除)生成 <button>削除</button>
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // 親要素を取得
    const deleteTarget = deleteButton.parentNode;
    // 子要素を消す
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // buttonタグ（戻す)生成 <button>戻す</button>
  const undoButton = document.createElement("button");
  undoButton.innerText = "戻す";
  undoButton.addEventListener("click", () => {
    const undoTarget = undoButton.parentNode;
    document.getElementById("complete-list").removeChild(undoTarget);
    document.getElementById("incomplete-list").appendChild(li);
    document.getElementById("incomplete-list").appendChild(div);
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
