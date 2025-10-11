---
title: DOM操作とCSS操作
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 復習（HTMLについて）

* _要素_ ：同じタグ名をもつ開始タグ～終了タグのひとかたまり（※終了タグのない要素もある）

![同じタグ名をもつ開始タグ～終了タグのひとかたまり](/img/dom-css/html-element.png)
![要素](/img/dom-css/html-elements.gif)

---

## JavaScript で要素を取得するには

_HTMLの解析が終わった後_ で、以下の関数を使用する。

| 関数 | 動作 |
| :-: | :-: |
| `document.querySelector(セレクタ)` | 指定したCSSのセレクタ(文字列)に一致する、 _最初の要素_ を返す |

<CodePreview initialHTML={`<body>
  <p>テスト</p>
</body>`} initialJS={`// body要素を取得
let bodyYouso = document.querySelector("body");

// 取得した要素を出力
console.log(bodyYouso); // 出力: <body>...</body>

// もちろん変数にいれずに直接出しても良い
console.log(document.querySelector("p")); // 出力: <p>テスト</p>
`}/>

## defer属性について

`script` 要素に `defer` をつけると、 _HTMLの解析が終わった後_ に読み込み先の JavaScript を実行できる。

```html
<script src="index.js" defer></script>
```

## セレクタ

_セレクタ_ _（参考：_ [https://saruwakakun.com/html-css/reference/selector](https://saruwakakun.com/html-css/reference/selector) _）_

| 対象 | 書き方 | ヒント | 例 |
| :-: | :-: | :-: | :-: |
| タグ名 | `〇〇` | タグ名をそのまま書く | `div` |
| id | `#〇〇` | 先頭に `#` を付ける | `#sample` |
| クラス名 | `.〇〇` | 先頭に `.` を付ける | `.sample` |
| 複数クラス（両方つく要素） | `.〇〇.△△` | スペースなしで続ける | `.a.b` |
| 中にある要素（子孫） | `〇 ×` | 間に半角スペースを入れる | `.aaa div` |
| すべての要素 | `*` | すべてを選ぶ | `*` |
| 直下の子要素 | `〇 > ×` | 直下だけを選ぶ | `.aaa > h1` |
| 直後の兄弟要素 | `〇 + △` | 直後の1つだけ選ぶ | `.a + p` |

---

<Exercise title="演習1">
**body内が** 次のようになっているHTMLファイルに対して、 _下の薄灰色にハイライトされている5つの要素を_ _1つずつ、_ _JavaScript_ _の_ _document.querySelector_ _で取得_ して console.log で出力せよ。

```html
// highlight-next-line
<h1>見出し</h1>

// highlight-next-line
<p>これは段落1です。</p>
<p>これは段落2です。</p>

// highlight-next-line
<p id="main">段落3 ここがメイン</p>

// highlight-next-line
<p class="raberu">段落4 ラベルA</p>
<p class="raberu">段落5 ラベルB</p>
<div class="hako">
  // highlight-next-line
  <p>ボックス内の段落1</p>
  <p>ボックス内の段落2</p>
</div>
```

:::info
ハイライトされている5つの要素は、
- 見出し
- 段落1
- 段落3
- 段落4
- ボックス内の段落1
:::

<Solution>
<CodePreview initialHTML={`<h1>見出し</h1>

  <p>これは段落1です。</p>
  <p>これは段落2です。</p>

  <p id="main">段落3 ここがメイン</p>

  <p class="raberu">段落4 ラベルA</p>
  <p class="raberu">段落5 ラベルB</p>
  <div class="hako">
    <p>ボックス内の段落1</p>
    <p>ボックス内の段落2</p>
  </div>`} initialJS={`// h1要素を取得
console.log(document.querySelector("h1")); // 出力: <h1>見出し</h1>

// 最初のp要素を取得
console.log(document.querySelector("p")); // 出力: <p>これは段落1です。</p>

// id="main"のp要素を取得
console.log(document.querySelector("#main")); // 出力: <p id="main">段落3 ここがメイン</p>

// class="raberu"の最初のp要素を取得
console.log(document.querySelector(".raberu")); // 出力: <p class="raberu">段落4 ラベルA</p>

// class="hako"のdiv要素の中の最初のp要素を取得
console.log(document.querySelector(".hako p")); // 出力: <p>ボックス内の段落1</p>`}/>
</Solution>
</Exercise>

---

<Exercise title="演習1 - 発展">
**body内が** 次のようになっているHTMLファイルに対し、 _下の薄灰色にハイライトされている2つの要素を_ _1つずつ、_ _JavaScript_ _の_ _document.querySelector_ _で取得_ して console.log で出力せよ。

```html
<div class="moodaru open">
  <p>モーダルウィンドウ</p>
</div>

<div class="dorowa open">
  // highlight-next-line
  <button class="botan">ボタン1</button>
  <p>開いているドロワー内の段落</p>
</div>

<div class="dorowa">
  <button class="botan">ボタン2</button>
  // highlight-next-line
  <p>開いていないドロワー内の段落</p>
</div>
```

:::info
ハイライトされている2つの要素は、
- 開いている（.open のある）ドロワー内のボタン
- 開いていない（.open のない）ドロワー内の段落
:::


<Solution>
<CodePreview
  initialHTML={`<div class="moodaru open">
    <p>モーダルウィンドウ</p>
  </div>

  <div class="dorowa open">
    <button class="botan">ボタン1</button>
    <p>開いているドロワー内の段落</p>
  </div>

  <div class="dorowa">
    <button class="botan">ボタン2</button>
    <p>開いていないドロワー内の段落</p>
  </div>`}
  initialJS={`// 開いているドロワー内の button 要素を取得して出力
  console.log(document.querySelector(".dorowa.open button")); // 出力: <button class="botan">ボタン1</button>

  // .open を持たないドロワー内の p 要素を取得して出力
  console.log(document.querySelector(".dorowa:not(.open) p")); // 出力: <p>開いていないドロワー内の段落</p>`}/>

</Solution>
</Exercise>

---

## CSSの操作

次の書き方で、JavaScript から CSS のプロパティ値を変更できる

```js
要素.style.CSSプロパティ名 = "値"
```

<CodePreview
  initialHTML={`<style>
  p {
    color: green;
    font-size: 100px; /* 見やすいように大きくしただけ */
  }
  </style>
  <body>
    <p>テスト文章</p>
  </body>`}
  initialJS={`// p要素の文字色を赤に変更
  // 要素 = document.querySelector("p")
  document.querySelector("p").style.color = "red";`}/>

:::caution
background-color のようなハイフンのあるCSSプロパティの場合は、backgroundColor のように、ハイフンを消して、その次の文字を大文字にする。
:::

<CodePreview
  initialHTML={`<style>
  p {
    font-size: 100px;
  }
  </style>
  <body>
    <p>テスト文章</p>
  </body>`}
  initialJS={`// p要素の背景色を水色に変更
  // 要素 = document.querySelector("p")
  document.querySelector("p").style.backgroundColor = "lightblue";`}/>

---

<Exercise title="演習2">
**body内が** 次のようになっているHTMLファイルに対し、 _下の薄灰色にハイライトされている3つの要素を_ _1つずつ、_ _JavaScript_ _で_ 右のコメントで書かれた指示の通りに変更せよ。

```html
// highlight-next-line
<h1 class="taitoru">今日の天気</h1> <!-- 文字色を「青色」にせよ -->
// highlight-next-line
<p>晴れのちくもり</p> <!-- 背景色を「黄色」にせよ -->

<div class="hako">
  // highlight-next-line
  <p>最高気温 18度</p> <!-- 文字サイズを「80px」にせよ -->
</div>
```

<Solution>
<CodePreview initialHTML={`<h1 class="taitoru">今日の天気</h1> <!-- 文字色を「青色」にせよ -->
  <p>晴れのちくもり</p> <!-- 背景色を「黄色」にせよ -->

  <div class="hako">
    <p>最高気温 18度</p> <!-- 文字サイズを「80px」にせよ -->
  </div>`}
  initialJS={`// class="taitoru"のh1要素の文字色を青に変更
document.querySelector(".taitoru").style.color = "blue";

  // 最初のp要素の背景色を黄色に変更
  document.querySelector("p").style.backgroundColor = "yellow";

  // class="hako"のdiv要素の中のp要素の文字サイズを80pxに変更
  document.querySelector(".hako p").style.fontSize = "80px";`}/>
</Solution>
</Exercise>

---

<Exercise title="演習3">
**body内が** 次のようになっているHTMLファイルに対し、 _下の薄灰色にハイライトされている6つの要素を_ _1つずつ、_ _JavaScript_ _で_ コメントで書かれた指示の通りに変更せよ。

```html
<!-- highlight-next-line -->
<!-- 文字色を赤にせよ -->
<!-- highlight-next-line -->
<h1 class="taitoru">お知らせ</h1>
<div class="hako">
  <!-- highlight-next-line -->
  <!-- 要素を非表示にせよ -->
  <!-- highlight-next-line -->
  <p class="messeji">このメッセージは非表示にせよ</p>
  <p class="messeji">このメッセージは消さないでよい</p>

  <!-- highlight-next-line -->
  <!-- 背景: オレンジ / 文字: 白 / サイズ: 20px -->
  <!-- highlight-next-line -->
  <p class="notice">この部分には3つの装飾を加えよ</p>
  <p>この段落には何もしない</p>

  <!-- highlight-next-line -->
  <!-- 文字を太字にせよ -->
  <!-- highlight-next-line -->
  <p class="tyuui">重要：内容を強調せよ</p>

  <!-- highlight-next-line -->
  <!-- 幅/高さ 60px / 背景: skyblue / 円にせよ -->
  <!-- highlight-next-line -->
  <div class="maru"></div>

  <!-- highlight-next-line -->
  <!-- 不透明度を 20% にせよ -->
  <!-- highlight-next-line -->
  <p class="usui">詳細はこちらをご確認ください</p>
</div>
```

:::info CSSのヒント（演習3用）
| やりたいこと | 書き方 | 例 |
| :-: | :-: | :-: |
| 非表示 | `display: none;` | `display: none;` |
| 横幅を変える | `width: 数値;` | `width: 100px;` |
| 縦幅を変える | `height: 数値;` | `height: 100vh;` |
| 円にする | 横幅と縦幅を同じにして `border-radius: 50%;` | `width: 60px; height: 60px; border-radius: 50%;` |
| 透明度を変える（見え方の目安） | `opacity: 0〜1;` | 見えない → `opacity: 0;`<br/>完全に見える → `opacity: 1;`<br/>30%くらい → `opacity: 0.3;`<br/>50%くらい → `opacity: 0.5;` |
:::

<Solution>
<CodePreview
  initialHTML={`<!-- 文字色を赤にせよ -->
  <h1 class="taitoru">お知らせ</h1>
  <div class="hako">
    <!-- 要素を非表示にせよ -->
    <p class="messeji">このメッセージは非表示にせよ</p>
    <p class="messeji">このメッセージは消さないでよい</p>

    <!-- 背景: オレンジ / 文字: 白 / サイズ: 20px -->
    <p class="notice">この部分には3つの装飾を加えよ</p>
    <p>この段落には何もしない</p>

    <!-- 文字を太字にせよ -->
    <p class="tyuui">重要：内容を強調せよ</p>

    <!-- 幅/高さ 60px / 背景: skyblue / 円にせよ -->
    <div class="maru"></div>

    <!-- 不透明度を 20% にせよ -->
    <p class="usui">詳細はこちらをご確認ください</p>
  </div>`}
  initialJS={`// h1.taitoru を赤に
  document.querySelector(".taitoru").style.color = "red";

  // 最初の class="messeji" を非表示にする
  document.querySelector(".messeji").style.display = "none";

  // class="notice" に背景色オレンジ、文字色白、文字サイズ20px を設定
  let noticeYouso = document.querySelector(".notice");
  noticeYouso.style.backgroundColor = "orange";
  noticeYouso.style.color = "white";
  noticeYouso.style.fontSize = "20px";

  // class="tyuui" の文字を太字にする
  document.querySelector(".tyuui").style.fontWeight = "bold";

  // .maru を幅/高さ60px、背景色 skyblue、丸くする
  let maruYouso = document.querySelector(".maru");
  maruYouso.style.width = "60px";
  maruYouso.style.height = "60px";
  maruYouso.style.backgroundColor = "skyblue";
  maruYouso.style.borderRadius = "50%";

  // class="usui" の不透明度を20%にする
  document.querySelector(".usui").style.opacity = "0.2";`}/>
</Solution>
</Exercise>
