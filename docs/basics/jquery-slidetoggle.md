---
title: jQueryでアコーディオン（slideToggle）
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

メニューの「見出し」をクリックしたら中身がニュッと開くUI（アコーディオン）で使います。よくあるサイドメニューや「よくある質問（FAQ）」で活躍します。

実際に使われているサイトの例（代表例）:

- [Google アカウント ヘルプ](https://support.google.com/accounts/?hl=ja) — 項目ごとに内容を展開/折りたたみ
- [佐川急便「よくあるご質問」](https://www.sagawa-exp.co.jp/bbbact/faq/) — 質問をクリックして回答を開閉
- [任天堂 サポート・Q&A](https://support-jp.nintendo.com/app/home/) — Q&Aの項目が開閉

---

## 実装例（実践）: サイドメニューのカテゴリ開閉


「メニュー内のカテゴリが開閉する」実装例です。クリックしたカテゴリだけ開き、他は閉じます。

<CodePreview
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- これを body 内に入れて -->
  <nav class="menu">
  <div class="item">
    <div class="title">製品</div>
    <ul class="submenu">
      <li><a href="#">新製品</a></li>
      <li><a href="#">人気</a></li>
      <li><a href="#">セール</a></li>
    </ul>
  </div>
  <div class="item">
    <div class="title">サポート</div>
    <ul class="submenu">
      <li><a href="#">FAQ</a></li>
      <li><a href="#">お問い合わせ</a></li>
      <li><a href="#">返品・交換</a></li>
    </ul>
  </div>
  <div class="item">
    <div class="title">会社情報</div>
    <ul class="submenu">
      <li><a href="#">採用情報</a></li>
      <li><a href="#">ニュース</a></li>
      <li><a href="#">アクセス</a></li>
    </ul>
  </div>
  `}
  initialCSS={`.menu {
    width: 280px;
    border: 1px solid #ddd;
    border-radius: 6px;
    overflow: hidden;
  }
  .menu .title {
    cursor: pointer;
    padding: 10px 12px;
    background-color: #f7f7f7;
    border-top: 1px solid #eee;
  }
  .menu .item:first-child .title {
    border-top: none;
  }
  .menu .title.open {
    background-color: #fff3cd;
  }
  .menu .submenu {
    list-style: none;
    margin: 0;
    padding: 8px 12px;
    border-top: 1px solid #eee;
    display: none;
  }
  .menu .submenu li {
    margin: 6px 0;
  }
  .menu a {
    color: #3366cc;
    text-decoration: none;
  }`}
  initialJS={`$(".menu .title").on("click", function() {
  const item = $(this).closest(".item");
  // 他を閉じる
  item.siblings().find(".submenu").slideUp(200);
  item.siblings().find(".title").removeClass("open");

  // 自分を切り替え
  $(this).toggleClass("open");
  item.find(".submenu").slideToggle(200);
});`}
/>

---

## はじめに

アコーディオンメニューは、前回のスライダーとは異なり、自身で比較的簡単に作ることが出来るため、ライブラリを使って作る必要はありません。しかし、今回は、有名でよく使うライブラリである「[jQuery](https://jquery.com/)」を学ぶため、この「[jQuery](https://jquery.com/)」を使って作ってみましょう。

---

## jQuery とは

[jQuery](https://jquery.com/) は、JavaScript でよく行う操作（要素の取得・内容の書き換え・イベント処理・アニメーション など）を、短いコードで簡単に書けるようにする、古くからあるライブラリです。

このページでは、アコーディオンの開閉に便利な jQuery の `.slideToggle()` のみ新たに学びます。

---

## jQuery を読み込む（CDN）

HTMLに次の1行を追加して jQuery を読み込みます。自分の JavaScript より「先」に読み込んでおきます。

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

---

## slideToggle の基本

要素の表示/非表示をアニメーション付きで切り替えます。

JavaScript から HTML や CSS を操作するときには、いつも `document.querySelector("セレクタ")` で要素を取得してから何かしていましたよね。

jQuery の場合も、使い方が似ています。

jQuery では、`$("セレクタ")` で対象の要素を選んでから、それに対して処理を行います。(`$ = document.querySelector` みたいなイメージ)

要素の表示/非表示を滑らかに切り替える場合は、要素に対して、`slideToggle` を、
```js
$("セレクタ").slideToggle();
```
のように使用して下さい。

要素の非表示は、CSSの `display: none;` で行います。

<CodePreview
  htmlVisible={true}
  cssVisible={true}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- これを body 内に入れて -->
  <h3 class="AAA">メニュー</h3>
  <div class="BBB">中身</div>
  <p>後続のテキスト</p>
  `}
  initialCSS={`.AAA {
    cursor: pointer;
    background-color: #eee;
    padding: 8px;
  }
  .BBB {
    padding: 8px;
    background-color: #fafafa;
    border: 1px solid #ddd;

    /* 初めは要素を非表示にしておく */
    display: none;
  }`}
  initialJS={`// .AAA の要素をクリックしたときに～
  document.querySelector(".AAA").addEventListener("click", function() {
    // .BBB の要素の表示/非表示を滑らかに切り替える
    $(".BBB").slideToggle();
  });`}
/>

---

<Exercise title="演習1">
次のHTMLで、`h3.PPP` をクリックしたら `div.QQQ` が開閉するようにせよ。

HTML:
```html
<h3 class="PPP">メニュー</h3>
<div class="QQQ">中身</div>
```

CSS:
```css
.PPP {
  cursor: pointer;
  background-color: #eee;
  padding: 8px;
}

.QQQ {
  padding: 8px;
  border: 1px solid #ddd;
}
```

<CodePreview
  sourceId="演習1"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- これを body 内に入れて -->
  <h3 class="PPP">メニュー</h3>
  <div class="QQQ">中身</div>
  <p>後続のテキスト</p>`}
  initialCSS={`.PPP {
    cursor: pointer;
    background-color: #eee;
    padding: 8px;
  }

  .QQQ {
    padding: 8px;
    border: 1px solid #ddd;

    /* 初めは要素を非表示にしておく */
    display: none;
  }`}
  initialJS={`// .PPP の要素をクリックしたときに～
  document.querySelector(".PPP").addEventListener("click", function() {
    // .QQQ の要素の表示/非表示を滑らかに切り替える
    $(".QQQ").slideToggle();
  });`}
/>

:::tip[ヒント]
- jQuery の読み込みを忘れずに行いましょう。
- JavaScript がいつ実行されるのかのタイミングに注意しましょう。
:::

<Solution>
<CodePreview sourceId="演習1"/>
</Solution>
</Exercise>

---

## 開いた項目を変数で管理する（true/false）

開閉状態を true/false の「変数」で記憶し、その値に応じて、見た目やテキストを直接書き換えることも出来ます。  
状態に応じて色や記号の変更などを if を使った分岐で行います。

<CodePreview
  sourceId="isOpen"
  htmlVisible={true}
  cssVisible={true}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- これを body 内に入れて -->
  <h3 class="aaa">メニュー<span class="icon">＋</span></h3>
  <div class="bbb">中身</div>
  `}
  initialCSS={`.aaa {
    cursor: pointer;
    background-color: #eee;
    padding: 8px;
  }

  .bbb {
    padding: 8px;
    border: 1px solid #ddd;

    /* 初めは要素を非表示にしておく */
    display: none;
  }`}
  initialJS={`// 開いていますかー？　を表す変数を作って用意しておく
  // 最初は閉じているので、開いていない = false を入れておく
  let isOpen = false;

  // .aaa の要素をクリックしたときに～
  document.querySelector(".aaa").addEventListener("click", function() {
    // .bbb の要素の表示/非表示を滑らかに切り替える
    $(".bbb").slideToggle();

    // 開閉状態が反転するので、isOpen の true/false を反転
    isOpen = !isOpen;

    // isOpen の値を出してみる
    console.log(isOpen);
  });`}/>

<CodePreview
  sourceId="isOpen"
  htmlVisible={true}
  cssVisible={true}
  previewVisible={true}
  initialJS={`// 開いていますかー？　を表す変数を作って用意しておく
  // 最初は閉じているので、開いていない = false を入れておく
  let isOpen = false;

  // .aaa の要素をクリックしたときに～
  document.querySelector(".aaa").addEventListener("click", function() {
    // .bbb の要素の表示/非表示を滑らかに切り替える
    $(".bbb").slideToggle();

    // 開閉状態が反転するので、isOpen の true/false を反転
    isOpen = !isOpen;

    // 開閉状態に応じて、何かをする。（とりあえず例として console.log）
    if (isOpen) { // 開いているとき
      console.log("ひらいています");
    }
    else { // 閉じているとき
      console.log("とじています");
    }
  });`}/>

<CodePreview
  sourceId="isOpen"
  htmlVisible={true}
  cssVisible={true}
  previewVisible={true}
  initialJS={`// 開いていますかー？　を表す変数を作って用意しておく
  // 最初は閉じているので、開いていない = false を入れておく
  let isOpen = false;

  // .aaa の要素をクリックしたときに～
  document.querySelector(".aaa").addEventListener("click", function() {
    // .bbb の要素の表示/非表示を滑らかに切り替える
    $(".bbb").slideToggle();

    // 開閉状態が反転するので、isOpen の true/false を反転
    isOpen = !isOpen;

    let iconYoso = document.querySelector(".icon");
    if (isOpen) { // 開いているとき
      iconYoso.innerText = "−"; // アイコンを「-」にする
    }
    else { // 閉じているとき
      iconYoso.innerText = "＋"; // アイコンを「+」にする
    }
  });`}/>

---

### ポイント

- `let isOpen = false;` で開閉状態を記憶。
- `iconYoso.innerText` で＋/−を切り替え。
- 表示／非表示は jQuery の `.slideToggle()`。

---

<Exercise title="演習2（＋/− アイコンの切り替え）">
`h3.aaa` の右側に「＋/−」を表示し、クリックで「＋↔−」と、背景色が状態により切り替わるようにしてください。

HTML:
```html
<h3 class="aaa">メニュー<span class="icon">＋</span></h3>
<div class="bbb">中身</div>
```

CSS:
```css
.aaa {
  cursor: pointer;
  background-color: #eee;
  padding: 8px;
}

.bbb {
  padding: 8px;
  border: 1px solid #ddd;
}
```

<CodePreview
  sourceId="演習2"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- これを body 内に入れて -->
  <h3 class="aaa">メニュー<span class="icon">＋</span></h3>
  <div class="bbb">中身</div>
  `}
  initialCSS={`.aaa {
    cursor: pointer;
    background-color: #eee;
    padding: 8px;
  }

  .bbb {
    padding: 8px;
    border: 1px solid #ddd;

    /* 初めは要素を非表示にしておく */
    display: none;
  }`}
  initialJS={`let aaaYoso = document.querySelector(".aaa");
  
  // 開いていますかー？　を表す変数を作って用意しておく
  // 最初は閉じているので、開いていない = false を入れておく
  let isOpen = false;

  // .aaa の要素をクリックしたときに～
  aaaYoso.addEventListener("click", function() {
    // .bbb の要素の表示/非表示を滑らかに切り替える
    $(".bbb").slideToggle();

    // 開閉状態が反転するので、isOpen の true/false を反転
    isOpen = !isOpen;

    let iconYoso = document.querySelector(".icon");
    if (isOpen) { // 開いたとき
      iconYoso.innerText = "−"; // アイコンを「-」にする
      aaaYoso.style.backgroundColor = "pink"; // 背景色を変更
    }
    else { // 閉じたとき
      iconYoso.innerText = "＋"; // アイコンを「+」にする
      aaaYoso.style.backgroundColor = "#eee"; // 背景色を元の #eee に戻す
    }
  });`}
/>

<Solution>
<CodePreview sourceId="演習2"/>
</Solution>
</Exercise>

---

<Exercise title="演習3（開いた回数を表示）">
`h3.ccc` をクリックして「開いた」時だけ、`div.count` の「開いた回数」の表示が1ずつ増えるようにしてください（閉じる時は増えません）。

HTML:
```html
<h3 class="ccc">メニュー</h3>
<div class="ddd">中身</div>
<div class="count">開いた回数: 0回</div>
```

CSS:
```css
.ccc {
  cursor: pointer;
  background-color: #eee;
  padding: 8px;
}

.ddd {
  padding: 8px;
  border: 1px solid #ddd;
}

.count {
  margin-top: 8px;
  color: #3366cc;
}
```

<CodePreview
  sourceId="演習3"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- これを body 内に入れて -->
  <h3 class="ccc">メニュー</h3>
  <div class="ddd">中身</div>
  <div class="count">開いた回数: 0回</div>`}
  initialCSS={`.ccc {
    cursor: pointer;
    background-color: #eee;
    padding: 8px;
  }

  .ddd {
    padding: 8px;
    border: 1px solid #ddd;

    /* 初めは要素を非表示にしておく */
    display: none;
  }

  .count {
    margin-top: 8px;
    color: #3366cc;
  }`}
  initialJS={`// 開いてる時に回数を増やすカウンタ用
  let count = 0;
  let isOpen = false;

  // .ccc の要素をクリックしたときに～
  document.querySelector(".ccc").addEventListener("click", function() {
    // .ddd の要素の表示/非表示を滑らかに切り替える
    $(".ddd").slideToggle();

    // 開閉状態の true/false を反転
    isOpen = !isOpen;

    if (isOpen) { // 開いたとき
      count++; // 回数を増やす
      document.querySelector(".count").innerText = "開いた回数: " + count + "回"; // 表示を更新
    }
  });`}
/>

:::tip[ヒント]
- 回数を記憶する変数（let count = 0;）を使いましょう。
- if を使い「開いたときだけ」カウントアップするように分岐します。
- 回数の表示書き換えには innerText を使います。
:::

<Solution>
<CodePreview sourceId="演習3"/>
</Solution>
</Exercise>

---

<Exercise title="演習3-発展（＋/−を滑らかに切り替え）">
`h3.ccc` の右側にある「＋」または「−」が、メニューの開閉に合わせて**回転アニメーション付きで滑らかに切り替わる**ようにしてください。  
※「＋/−」のテキストがただ切り替わるのではなく、`transform`と`transition`で回転しながら変化するようにします。

HTML:
```html
<h3 class="ccc">メニュー<span class="icon">＋</span></h3>
<div class="ddd">中身</div>
```

CSS:
```css
.ccc {
  cursor: pointer;
  background-color: #eee;
  padding: 8px;
}
.ddd {
  padding: 8px;
  border: 1px solid #ddd;
  display: none;
}
.icon {
  margin-left: 8px;
  display: inline-block;
  transition: transform 0.3s;
}
```

<CodePreview
  sourceId="演習3-発展"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- これを body 内に入れて -->
  <h3 class="ccc">メニュー<span class="icon">＋</span></h3>
  <div class="ddd">中身</div>
  `}
  initialCSS={`.ccc {
    cursor: pointer;
    background-color: #eee;
    padding: 8px;
  }
  .ddd {
    padding: 8px;
    border: 1px solid #ddd;
    display: none;
  }
  .icon {
    margin-left: 8px;
    display: inline-block;
    transition: transform 0.3s;
  }`}
  initialJS={`let iconYoso = document.querySelector(".icon");
  let cccYoso = document.querySelector(".ccc");
  let isOpen = false;

  // .ccc の要素をクリックしたとき
  cccYoso.addEventListener("click", function() {
    $(".ddd").slideToggle();

    // 開閉状態を反転
    isOpen = !isOpen;

    // アイコンの切り替え（アニメーション付きで+→−）
    if (isOpen) {
      iconYoso.style.transform = "rotate(180deg)";
      iconYoso.innerText = "−"; // rotate180後に−に
    } else {
      iconYoso.style.transform = "rotate(0deg)";
      iconYoso.innerText = "＋"; // 元に戻す
    }
  });`}
/>

:::tip[ヒント]
- `transition`と`transform`でアニメーションを作れます。
- CSSの `transform: rotate(角度deg)` の指定で特定の角度に回転させることが出来ます。(`transform: rotate(45deg);` など) 
- クリック時に「＋から−」「−から＋」へ回転付きで変わるように工夫してください。
:::

<Solution>
<CodePreview sourceId="演習3-発展"/>
</Solution>
</Exercise>
