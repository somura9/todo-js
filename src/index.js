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
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 未完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に書く要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buttonタグ　(削除)生成 <button>削除</button>
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
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

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
