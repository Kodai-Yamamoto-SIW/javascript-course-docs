---
title: innerText
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

この章で学ぶ innerText は、ウェブページの文字を JavaScript で書き換える機能です。
実際のウェブサイトで「読み込み中...」が「読み込み完了」に変わるような場面で使われます。

実際に使われていそうなサイトの例（代表例）:

- Twitter/X（投稿後に「ツイートする」ボタンが「投稿しました」に変わる）: https://twitter.com/
  - 使われる箇所: ボタンのテキスト変更 → innerText を使用
- Amazon.co.jp（カートに追加後、ボタンの文字が変わる）: https://www.amazon.co.jp/
  - 使われる箇所: 「カートに入れる」→「カートを見る」へ変更 → innerText を使用

---

## innerText による要素の中身の書き換え

HTML要素の中に表示されているテキストを、JavaScriptで書き換えることができます。

```js
要素.innerText = "新しいテキスト";
```

<CodePreview
  initialHTML={`<body>
    <p>元のメッセージ</p>
  </body>`}
  initialJS={`// p要素の中身を書き換え
document.querySelector("p").innerText = "新しいメッセージ";`}/>

---

<Exercise title="演習1">
**body内が** 次のようになっているHTMLファイルに対し、 _下の薄灰色にハイライトされている2つの要素を_ _1つずつ、_ _JavaScript_ _で_ コメントで書かれた指示の通りに変更せよ。

```html
// highlight-next-line
<p>読み込み中...</p> <!-- "読み込み完了" に変更 -->
// highlight-next-line
<p class="info">古い情報</p> <!-- "最新情報" に変更 -->
```

<CodePreview
  title="出力例"
  sourceId="演習1"
  htmlVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<p>読み込み中...</p> <!-- "読み込み完了" に変更 -->
  <p class="info">古い情報</p> <!-- "最新情報" に変更 -->`}
  initialJS={`// 最初のp要素の中身を変更
  document.querySelector("p").innerText = "読み込み完了";

  // class="info"の要素の中身を変更
  document.querySelector(".info").innerText = "最新情報";`}/>

<Solution>
<CodePreview sourceId="演習1"/>
</Solution>
</Exercise>

---

<Exercise title="演習1 - 発展">

**body内が** 次のようになっているHTMLファイルに対し、 _下の薄灰色にハイライトされている2つの要素を_ _1つずつ、_ _JavaScript_ _で_ コメントで書かれた指示の通りに変更せよ。

```html
<ul class="option1">
  <li class="item">1 - 項目A</li>
  <li class="item selected">1 - 項目B</li>
</ul>
<ul class="option2">
  <li class="item">2- 項目A</li>
  // highlight-next-line
  <li class="item selected">2 - 項目B</li> <!-- 中身を「2 - 選択中B」に変更 -->
  <li class="item">2 - 項目C</li>
</ul>
<div id="container">
  <p>段落1</p>
  <p>段落2</p>
  // highlight-next-line
  <p>段落3</p> <!-- 中身を「ラスト段落」に変更 -->
</div>
```

<CodePreview
  title="出力例"
  sourceId="演習1-発展"
  htmlVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<ul class="option1">
    <li class="item">1 - 項目A</li>
    <li class="item selected">1 - 項目B</li>
  </ul>
  <ul class="option2">
    <li class="item">2- 項目A</li>
    <li class="item selected">2 - 項目B</li> <!-- 中身を「2 - 選択中B」に変更 -->
    <li class="item">2 - 項目C</li>
  </ul>
  <div id="container">
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p> <!-- 中身を「ラスト段落」に変更 -->
  </div>`}
  initialJS={`// .option2の中の選択中(.selected)のli要素の中身を変更
  document.querySelector(".option2 .selected").innerText = "2 - 選択中B";

  // id="container"の中の最後のp要素の中身を変更
  document.querySelector("#container p:last-child").innerText = "ラスト段落";`}/>

<Solution>
<CodePreview sourceId="演習1-発展"/>
</Solution>
</Exercise>
