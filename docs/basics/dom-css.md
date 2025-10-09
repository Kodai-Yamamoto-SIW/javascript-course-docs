---
title: DOM操作とCSS操作
---

import Exercise, { Solution } from '@kodai-yamamoto-siw/exercise/client';
import { CodePreview } from '@kodai-yamamoto-siw/code-preview';

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
let bodyElem = document.querySelector('body');
// 要素を出力
console.log(bodyElem);`}/>

## defer属性について

`script` 要素に `defer` をつけると、 _HTMLの解析が終わった後_ に読み込み先の JavaScript を実行できる。

```html
<script src="index.js" defer></script>
```

## セレクタ

_セレクタ_ _（参考：_ [https://saruwakakun.com/html-css/reference/selector](https://saruwakakun.com/html-css/reference/selector) _）_

| 対象 | 書き方 | 例 |
| :-: | :-: | :-: |
| **タグ名が〇〇** | **〇〇** | div要素なら **div** |
| **idが〇〇** | **#〇〇** | idが sample の要素なら **#sample** |
| **クラス名が〇〇** | **.〇〇** | クラス名が sample の要素なら **.sample** |
| **クラス名が〇〇と△△** | **.〇〇.△△**    ← _スペースは入れてはいけない_ | クラス名が a と b の両方がついている要素なら **.a.b** |
| **〇の中にある×** | **〇 × **　　←間に半角スペースを入れる | クラス名が aaa の要素の中にある div 要素なら **.aaa div** |
| **すべて** | **\*    ** ← \* だけ書けばいい |  |
| **〇の直下の×** | **〇 > ×**    ←スペースはあってもなくても良い | クラス名が aaa の要素の直下にある h1 なら **.aaa > h1** |
| **〇の直後の△** | **〇 + △**    ←スペースはあってもなくても良い | クラス名が a の要素の直後にある p 要素なら **.a + p** |

---

<Exercise title="演習1">
**body内が** 次のようになっているHTMLファイルを作成し(下のやつをコピーしてOK)、 _黄色四角で囲まれた要素を_ _JavaScript_ _の_ _document.querySelector_ _ _ _で取得_ して console.log で出力せよ。

```html
<h1>見出し</h1>
<p>これは段落1です。</p>
<p>これは段落2です。</p>
<p id="main">段落3 ここがメイン</p>
<p class="label">段落4 ラベルA</p>
<p class="label">段落5 ラベルB</p>
<div class="box">
    <p>ボックス内の段落1</p>
    <p>ボックス内の段落2</p>
</div>
```

:::info
問題では以下の要素を取得します：
- h1要素
- 最初のp要素
- id="main"のp要素
- class="label"の最初のp要素
- class="box"のdiv要素の中の最初のp要素
:::

<Solution>
<CodePreview initialHTML={`<body>
    <h1>見出し</h1>
    <p>これは段落1です。</p>
    <p>これは段落2です。</p>
    <p id="main">段落3 ここがメイン</p>
    <p class="label">段落4 ラベルA</p>
    <p class="label">段落5 ラベルB</p>
    <div class="box">
        <p>ボックス内の段落1</p>
        <p>ボックス内の段落2</p>
    </div>
</body>`} initialJS={`// h1要素を取得
console.log(document.querySelector('h1'));
// 最初のp要素を取得
console.log(document.querySelector('p'));
// id="main"のp要素を取得
console.log(document.querySelector('#main'));
// class="label"の最初のp要素を取得
console.log(document.querySelector('.label'));
// class="box"のdiv要素の中の最初のp要素を取得
console.log(document.querySelector('.box p'));`}/>
</Solution>
</Exercise>

---

<Exercise title="演習1 - 発展（早く終わった人向け）">
**body内が** 次のようになっているHTMLファイルを作成し(下のやつをコピーしてOK)、 _下の四角で囲まれた要素を_ _JavaScript_ _の_ _document.querySelector_ _ _ _で取得_ して console.log で出力せよ。

```html
<div class="modal open">
    <p>モーダルウィンドウ</p>
</div>
<div class="drawer">
    <button class="btn">ボタン1</button>
    <p>中身1</p>
</div>
<div class="drawer open">
    <button class="btn">ボタン2</button>
    <p>中身2</p>
</div>
```

:::info
問題では以下の要素を取得します：
- class="modal"とclass="open"の両方があるdiv要素
- class="drawer"とclass="open"の両方があるdiv要素の中のp要素
:::

<Solution>
<CodePreview initialHTML={`<body>
    <div class="modal open">
        <p>モーダルウィンドウ</p>
    </div>
    <div class="drawer">
        <button class="btn">ボタン1</button>
        <p>中身1</p>
    </div>
    <div class="drawer open">
        <button class="btn">ボタン2</button>
        <p>中身2</p>
    </div>
</body>`} initialJS={`// class="modal"とclass="open"の両方があるdiv要素を取得
console.log(document.querySelector('.modal.open'));
// class="drawer"とclass="open"の両方があるdiv要素の中のp要素を取得
console.log(document.querySelector('.drawer.open p'));`}/>
</Solution>
</Exercise>

---

## CSSの操作

次の書き方で、JavaScript から CSS のプロパティ値を変更できる

```js
要素.style.CSSプロパティ名 = "値"
```

<CodePreview initialHTML={`<style>
    p {
        color: green;
        font-size: 100px; /* 見やすいように大きくしただけ */
    }
</style>
<body>
    <p>テスト文章</p>
</body>`} initialJS={`document.querySelector("p").style.color = "red";`}/>

:::caution
background-color のようなハイフンのあるCSSプロパティの場合は、backgroundColor のように、ハイフンを消して、その次の文字を大文字にする。
:::

<CodePreview initialHTML={`<style>
    p {
        font-size: 100px;
    }
</style>
<body>
    <p>テスト文章</p>
</body>`} initialJS={`document.querySelector("p").style.backgroundColor = "blue";`}/>

---

<Exercise title="演習2">
**body内が** 次のようになっているHTMLファイルを作成し(下のやつをコピーしてOK)、 _黄色四角で囲まれた要素を_ _JavaScript_ _で_ 右の指示の通りに変更せよ。

```html
<h1 class="title">今日の天気</h1>
<p>晴れのちくもり</p>
<div class="box">
    <p>最高気温 18度</p>
</div>
```

:::info
- class="title"のh1要素：文字色を赤(#ff0000)に変更
- 最初のp要素：文字サイズを24pxに変更
- class="box"のdiv要素の中のp要素：背景色を黄色(#ffff00)に変更
:::

## CSSプロパティ参考

### 文字関連

| やりたいこと | 書き方 | 例 |
| :-: | :-: | :-: |
| **文字色** | **color: 色** | 赤の場合、 **color: #ff0000;** |
| **文字サイズ** | **font-size: サイズ** | 16px なら、 **font-size: 16px;** |
| **フォント** | **font-family: フォント** | Arial フォントなら、 **font-family: Arial;** |
| **文字の太さ** | **font-weight: 太さ** | 太字なら、 **font-weight: bold;** |
| **文字を斜めにする** | **font-style: スタイル** | イタリックなら、 **font-style: italic;** |

### 背景関連

| やりたいこと | 書き方 | 例 |
| :-: | :-: | :-: |
| **背景色** | **background-color: 色** | 緑なら **background-color: #0F0;** |

<Solution>
<CodePreview initialHTML={`<body>
    <h1 class="title">今日の天気</h1>
    <p>晴れのちくもり</p>
    <div class="box">
        <p>最高気温 18度</p>
    </div>
</body>`} initialJS={`// class="title"のh1要素の文字色を赤に変更
document.querySelector('.title').style.color = '#ff0000';
// 最初のp要素の文字サイズを24pxに変更
document.querySelector('p').style.fontSize = '24px';
// class="box"のdiv要素の中のp要素の背景色を黄色に変更
document.querySelector('.box p').style.backgroundColor = '#ffff00';`}/>
</Solution>
</Exercise>

---

<Exercise title="演習3">
**body内が** 次のようになっているHTMLファイルを作成し(下のやつをコピーしてOK)、 _黄色四角で囲まれた要素を_ _JavaScript_ _で_ 右の指示の通りに変更せよ。

```html
<h1 class="title">お知らせ</h1>
<div class="card">
    <p class="message">このメッセージは非表示にせよ</p>
    <p class="message">このメッセージは消さないでよい</p>
    <p class="notice">この部分には3つの装飾を加えよ</p>
    <p>この段落には何もしない</p>
</div>
```

:::info
- class="card"のdiv要素の中の最初のclass="message"のp要素：非表示にする（display: none;）
- class="notice"のp要素：以下の3つの装飾を加える
  - 文字色を青(#0000ff)に変更
  - 文字の太さを太字(bold)に変更
  - 文字を斜体(italic)に変更
:::

<Solution>
<CodePreview initialHTML={`<body>
    <h1 class="title">お知らせ</h1>
    <div class="card">
        <p class="message">このメッセージは非表示にせよ</p>
        <p class="message">このメッセージは消さないでよい</p>
        <p class="notice">この部分には3つの装飾を加えよ</p>
        <p>この段落には何もしない</p>
    </div>
</body>`} initialJS={`// class="card"のdiv要素の中の最初のclass="message"のp要素を非表示に
document.querySelector('.card .message').style.display = 'none';
// class="notice"のp要素に3つの装飾を加える
document.querySelector('.notice').style.color = '#0000ff';
document.querySelector('.notice').style.fontWeight = 'bold';
document.querySelector('.notice').style.fontStyle = 'italic';`}/>
</Solution>
</Exercise>
