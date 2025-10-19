---
title: イベント
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

この章で学ぶイベントは、ユーザーのクリックやマウス操作に応じてページの見た目や動作を変える機能で使います。
実際のウェブサイトの「いいねボタン」や「画像ギャラリーのホバー表示」で使われる場面をイメージしてください。

実際に使われていそうなサイトの例（代表例）:

- YouTube（公開ページで「いいねボタン」「チャンネル登録ボタン」が確認できます）: https://www.youtube.com/
  - 使われる箇所: 動画下の「いいね」ボタンクリック → click イベントで数値を更新
- Amazon.co.jp（商品画像にマウスを乗せると拡大表示される）: https://www.amazon.co.jp/
  - 使われる箇所: 商品画像にマウスを乗せる → mouseenter イベントで画像を拡大

### 例1: いいねボタン（ボタンをクリックして数を増やす）

<CodePreview
  htmlVisible={false}
  jsVisible={false}
  cssVisible={false}
  previewVisible={true}
  initialHTML={`<button>❤️ 0 いいね</button>`}
  initialCSS={`button {
    padding: 10px 20px;
    background-color: #ff4081;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }`}
  initialJS={`// いいねボタンがクリックされたら数を増やす
  let buttonYoso = document.querySelector("button");
  let count = 0;

  buttonYoso.addEventListener("click", function() {
    count = count + 1;
    buttonYoso.innerText = "❤️ " + count + " いいね";
  });`}/>

### 例2: ヘルプアイコン（マウスを乗せるとヒントが表示される）

<CodePreview
  htmlVisible={false}
  jsVisible={false}
  cssVisible={false}
  previewVisible={true}
  initialHTML={`<div class="help-container">
    <div class="help-icon">?</div>
    <div class="tooltip">ヒント: 詳細なヒント</div>
  </div>`}
  initialCSS={`.help-container {
    display: inline-block;
    position: relative;
    padding: 50px;
  }
  .help-icon {
    width: 40px;
    height: 40px;
    background-color: #4CAF50;
    color: white;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
  }
  .tooltip {
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    background-color: #333;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 14px;
    opacity: 0;
    pointer-events: none;
  }`}
  initialJS={`// ヘルプアイコンにマウスを乗せたらヒントを表示
  let icon = document.querySelector(".help-icon");
  let tooltip = document.querySelector(".tooltip");

  icon.addEventListener("mouseenter", function() {
    tooltip.style.opacity = "1";
  });

  icon.addEventListener("mouseleave", function() {
    tooltip.style.opacity = "0";
  });`}/>

---

## イベントとは

**イベント** とは、「ページの読込完了」、「ユーザーがウェブページ上で操作（クリック、マウス移動など）を行った」などの、何らかの「出来事」のことです。
JavaScriptを使うと、このような出来事が起きたときに反応して何か処理を実行することができます。

イベントに反応させるには、次のような書き方をします。

```js
要素.addEventListener("イベント名", function() {
  // イベントが起きたときに実行する処理
});
```

---

## click イベント

**click** イベントは、要素がクリックされたときに発生します。

```js
要素.addEventListener("click", function() {
  // クリックされたときの処理
});
```

<CodePreview
  initialHTML={`<button>クリックしてね</button>
  <p>まだクリックされていません</p>`}
  initialJS={`// ボタンがクリックされたら、メッセージを変更する
  let buttonYoso = document.querySelector("button");
  let pYoso = document.querySelector("p");

  buttonYoso.addEventListener("click", function() {
    pYoso.innerText = "ボタンがクリックされました！";
  });`}/>

<CodePreview
  initialHTML={`<div></div>`}
  initialCSS={`div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }`}
  initialJS={`// ボックスをクリックしたら、背景色を赤に変更
  let divYoso = document.querySelector("div");

  divYoso.addEventListener("click", function() {
    divYoso.style.backgroundColor = "red";
  });`}/>

---

<Exercise title="演習1">
**body内が** 次のようになっているHTMLファイルに対し、JavaScriptで次の動作を実装せよ。

> button要素がクリックされたら、p要素の中身を "テキストが変更されました" に変更

<CodePreview
  sourceId="演習1"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<button>変更ボタン</button>
  <p>初期テキスト</p>`}
  initialJS={`// ボタンがクリックされたときの処理
  let buttonYoso = document.querySelector("button");
  let pYoso = document.querySelector("p");

  buttonYoso.addEventListener("click", function() {
    pYoso.innerText = "テキストが変更されました";
  });`}/>

<Solution>
<CodePreview sourceId="演習1"/>
</Solution>
</Exercise>

---

<Exercise title="演習2">
**body内が** 次のようになっているHTMLファイルに対し、JavaScriptで次の動作を実装せよ。

> div要素がクリックされたら、背景色を "blue" に、幅を "300px" に変更

<CodePreview
  sourceId="演習2"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<div></div>`}
  initialCSS={`div {
    width: 200px;
    height: 200px;
    background-color: yellow;
  }`}
  initialJS={`// div要素がクリックされたときの処理
  let divYoso = document.querySelector("div");

  divYoso.addEventListener("click", function() {
    divYoso.style.backgroundColor = "blue";
    divYoso.style.width = "300px";
  });`}/>

<Solution>
<CodePreview sourceId="演習2"/>
</Solution>
</Exercise>

---

<Exercise title="演習2-発展">
**body内が** 次のようになっているHTMLファイルに対し、JavaScriptで次の動作を実装せよ。

> div要素がクリックされたら、背景色を "lightblue" に、h3要素の中身を "選択されました" に、p要素の中身を "このカードが選択中です" に変更

<CodePreview
  sourceId="演習2-発展"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<div>
    <h3>タイトル</h3>
    <p>説明文</p>
  </div>`}
  initialCSS={`div {
    width: 150px;
    height: 150px;
    background-color: lightgray;
    padding: 10px;
  }`}
  initialJS={`// div要素がクリックされたときの処理
  let divYoso = document.querySelector("div");
  let h3Yoso = document.querySelector("h3");
  let pYoso = document.querySelector("p");

  divYoso.addEventListener("click", function() {
    divYoso.style.backgroundColor = "lightblue";
    h3Yoso.innerText = "選択されました";
    pYoso.innerText = "このカードが選択中です";
  });`}/>

<Solution>
<CodePreview sourceId="演習2-発展"/>
</Solution>
</Exercise>

---

## mouseenter イベント

**mouseenter** イベントは、マウスカーソルが要素の上に乗ったときに発生します。

```js
要素.addEventListener("mouseenter", function() {
  // マウスが乗ったときの処理
});
```

<CodePreview
  initialHTML={`<div></div>
  <p>マウスを乗せてください</p>`}
  initialCSS={`div {
    width: 150px;
    height: 150px;
    background-color: lightgreen;
  }`}
  initialJS={`// マウスが乗ったら、ステータスメッセージを変更
  let divYoso = document.querySelector("div");
  let pYoso = document.querySelector("p");

  divYoso.addEventListener("mouseenter", function() {
    pYoso.innerText = "マウスが乗りました";
  });`}/>

<CodePreview
  initialHTML={`<div></div>`}
  initialCSS={`div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }`}
  initialJS={`// マウスが乗ったら、背景色を黄色に変更
  let divYoso = document.querySelector("div");

  divYoso.addEventListener("mouseenter", function() {
    divYoso.style.backgroundColor = "yellow";
  });`}/>

---

<Exercise title="演習3">

**body内が** 次のようになっているHTMLファイルに対し、JavaScriptで次の動作を実装せよ。

> div要素にマウスが乗ったら、形を円に変更

<CodePreview
  sourceId="演習3"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<div></div>`}
  initialCSS={`div {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
  }`}
  initialJS={`// マウスが乗ったときの処理
  let divYoso = document.querySelector("div");

  divYoso.addEventListener("mouseenter", function() {
    divYoso.style.borderRadius = "50%";
  });`}/>

<Solution>
<CodePreview sourceId="演習3"/>
</Solution>
</Exercise>

---

## mouseleave イベント

**mouseleave** イベントは、マウスカーソルが要素の上から離れたときに発生します。

```js
要素.addEventListener("mouseleave", function() {
  // マウスが離れたときの処理
});
```

<CodePreview
  initialHTML={`<div></div>
  <p>マウスを乗せてから離してください</p>`}
  initialCSS={`div {
    width: 150px;
    height: 150px;
    background-color: blue;
  }`}
  initialJS={`// マウスが離れたら、メッセージを変更
  let divYoso = document.querySelector("div");
  let pYoso = document.querySelector("p");

  divYoso.addEventListener("mouseleave", function() {
    pYoso.innerText = "マウスが離れました";
  });`}/>

---

## 複数のイベントを組み合わせる

mouseenter と mouseleave を組み合わせると、マウスが乗ったときと離れたときで違う動作をさせることができます。

<CodePreview
  initialHTML={`<div></div>
  <p>マウスを乗せてみてください</p>`}
  initialCSS={`div {
    width: 150px;
    height: 150px;
    background-color: lightblue;
  }`}
  initialJS={`// マウスが乗ったときと離れたときで動作を変える
  let divYoso = document.querySelector("div");
  let pYoso = document.querySelector("p");

  divYoso.addEventListener("mouseenter", function() {
    divYoso.style.backgroundColor = "orange";
    pYoso.innerText = "マウスが乗っています";
  });

  divYoso.addEventListener("mouseleave", function() {
    divYoso.style.backgroundColor = "lightblue";
    pYoso.innerText = "マウスが離れました";
  });`}/>

---

<Exercise title="演習4">
**body内が** 次のようになっているHTMLファイルに対し、JavaScriptで次の動作を実装せよ。

> div要素にマウスが乗っているとき  
> &nbsp;&nbsp;背景色 → "lightcoral"  
> &nbsp;&nbsp;p要素の中身 → "ステータス: ホバー中"  
> マウスが離れたとき  
> &nbsp;&nbsp;背景色 → "lightgray"  
> &nbsp;&nbsp;p要素の中身 → "ステータス: 待機中"

<CodePreview
  sourceId="演習4"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<div></div>
  <p>ステータス: 待機中</p>`}
  initialCSS={`div {
    width: 160px;
    height: 160px;
    background-color: lightgray;
  }`}
  initialJS={`// マウスが乗ったときと離れたときの処理
  let divYoso = document.querySelector("div");
  let pYoso = document.querySelector("p");

  divYoso.addEventListener("mouseenter", function() {
    divYoso.style.backgroundColor = "lightcoral";
    pYoso.innerText = "ステータス: ホバー中";
  });

  divYoso.addEventListener("mouseleave", function() {
    divYoso.style.backgroundColor = "lightgray";
    pYoso.innerText = "ステータス: 待機中";
  });`}/>

<Solution>
<CodePreview sourceId="演習4"/>
</Solution>
</Exercise>

---

<Exercise title="演習4-発展">
**body内が** 次のようになっているHTMLファイルに対し、JavaScriptで次の動作を実装せよ。

> - マウスが div 要素に乗ったとき: 背景色を "lightcoral" に、p 要素の中身を "ステータス: ホバー中" に変更する。  
> - マウスが div 要素から離れたとき: 背景色を "lightgray" に戻し、p 要素の中身を "ステータス: 待機中" に戻す。  
> - div 要素をクリックしたとき: 背景色を "gold" に、p 要素の中身を "ステータス: 選択済み" に変更する。  
> - クリック後は、マウスの乗り降りによる色やテキストの変化を無効にする（選択状態を維持）。

<CodePreview
  sourceId="演習4-発展"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<div></div>
  <p>ステータス: 待機中</p>`}
  initialCSS={`div {
    width: 160px;
    height: 160px;
    background-color: lightgray;
  }`}
  initialJS={`// 状態管理を含むイベント処理
  let divYoso = document.querySelector("div");
  let pYoso = document.querySelector("p");
  let isSelected = false;

  divYoso.addEventListener("mouseenter", function() {
    if (!isSelected) {
      divYoso.style.backgroundColor = "lightcoral";
      pYoso.innerText = "ステータス: ホバー中";
    }
  });

  divYoso.addEventListener("mouseleave", function() {
    if (!isSelected) {
      divYoso.style.backgroundColor = "lightgray";
      pYoso.innerText = "ステータス: 待機中";
    }
  });

  divYoso.addEventListener("click", function() {
    divYoso.style.backgroundColor = "gold";
    pYoso.innerText = "ステータス: 選択済み";
    isSelected = true;
  });`}/>

<Solution>
<CodePreview sourceId="演習4-発展"/>
</Solution>
</Exercise>
