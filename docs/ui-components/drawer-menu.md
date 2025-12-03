---
title: ドロワーメニュー
sidebar_position: 999
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## ドロワーメニューとは

ドロワーメニューは、画面の端から引き出すように表示されるメニューです。スマートフォンサイトでよく使われる UI パターンで、ハンバーガーアイコンと組み合わせて実装されることが多いです。

このページでは、ドロワーメニューの作り方を順を追って学んでいきます。

<Exercise title="演習1（ヘッダーとハンバーガーアイコンの作成）">

まずは、ヘッダーとハンバーガーアイコンの見た目を作りましょう。以下のプレビューと同じ見た目になるように、HTML と CSS を書いてください。

但し、ハンバーガーアイコンの部分は、次の図のように、3つの要素を使って作成してください。  
![ハンバーガーアイコンを、各線が高さ4px、横幅32pxで、任意の適度な間隔の線で、div,spanなど、任意の要素で作成](../../static/img/drawer-menu/hamburger-icon-detail.png)

<CodePreview
  sourceId="演習1"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <button class="ham-btn">
      <span class="ham-icon">
        <span class="line top"></span>
        <span class="line middle"></span>
        <span class="line bottom"></span>
      </span>
    </button>
  </header>`}
  initialCSS={`body {
      margin: 0; /* ページの端の余白をなくす */
  }

  header {
    border-bottom: solid black 1px; /* ヘッダーの下の線 */
  }

  /* ハンバーガーのボタンとアイコンの調整 */
  .ham-btn {
    display: block; /* block にしないと変な意図しない余白が勝手に入るので */
    padding: 20px;

    border: none; /* 枠線を消す */
    background: transparent; /* 背景を消す */
    cursor: pointer; /* カーソルは手のマーク */
  }

  .ham-icon {
    display: flex; /* gap を使いたいだけ */
    flex-direction: column; /* 縦並び */
    gap: 8px; /* 間隔 8px */
  }

  .ham-icon .line {
    width: 32px;
    height: 4px;

    display: block; /* span はデフォルトで display: inline なので、width, height を効かせるために block にする */
    background-color: black;
  }`}
/>

<Solution>
<CodePreview sourceId="演習1"/>
</Solution>
</Exercise>

<Exercise title="演習2（メニューコンテンツの作成）">

続いて、メニューコンテンツを作りましょう。以下のプレビューと同じ見た目になるように、HTML と CSS を書いてください。

<CodePreview
  sourceId="演習2"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <button class="ham-btn">
      <span class="ham-icon">
        <span class="line top"></span>
        <span class="line middle"></span>
        <span class="line bottom"></span>
      </span>
    </button>
  </header>
  <nav class="ham-nav">
    <ul>
      <li><a href="#">ホーム</a></li>
      <li><a href="#">サービス</a></li>
      <li><a href="#">会社情報</a></li>
      <li><a href="#">お問い合わせ</a></li>
      <li><a href="#">お問い合わせ2</a></li>
      <li><a href="#">お問い合わせ3</a></li>
      <li><a href="#">お問い合わせ4</a></li>
    </ul>
  </nav>`}
  initialCSS={`body {
      margin: 0;
  }

  header {
    border-bottom: solid black 1px;
  }

  /* ハンバーガーのボタンとアイコンの調整 */
  .ham-btn {
    display: block;
    padding: 20px;

    border: none;
    background: transparent;
    cursor: pointer;

    position: relative; /* z-index を効かせるためだけに position を relative に */
    z-index: 1; /* ハンバーガーボタンをメニューコンテンツより面に表示するため */
  }

  .ham-icon {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ham-icon .line {
    width: 32px;
    height: 4px;

    display: block;
    background-color: black;
  }
  
  /* ハンバーガーのメニューコンテンツ部分の調整 */
  .ham-nav {
    position: fixed; /* 画面内で、位置固定 */
    top: 0; /* 要素の上端は画面の上端に合わせる */
    bottom: 0; /* 要素の下端は画面の下端に合わせる(top:0, bottom:0 によって高さが画面いっぱいになる) */
    left: 0; /* 画面の左端に配置 */
    background-color: white; /* 背景をつけないと透明になるから */
    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2); /* 右側に影をつける */

    padding: 60px 20px 0; /* 上に60px、左右に20px、下に0の余白 */
  }
  `}
/>

<Solution>
前の演習から増えたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習2"/>
</Solution>
</Exercise>

<Exercise title="演習3（開閉機能の作成）">

ついに、JavaScript で開閉機能を作りましょう。以下のプレビューのように、ハンバーガーアイコンをクリックしたら、メニューが出し入れするように、CSS と JavaScript を書いてください。

（次の演習でアニメーションさせたいので）transform プロパティを使用して、画面左外にメニューを隠すようにしてください。  
また、CSSの変更はクラスのつけ外しで行ってください。

<CodePreview
  sourceId="演習3"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <button class="ham-btn">
      <span class="ham-icon">
        <span class="line top"></span>
        <span class="line middle"></span>
        <span class="line bottom"></span>
      </span>
    </button>
  </header>
  <nav class="ham-nav">
    <ul>
      <li><a href="#">ホーム</a></li>
      <li><a href="#">サービス</a></li>
      <li><a href="#">会社情報</a></li>
      <li><a href="#">お問い合わせ</a></li>
      <li><a href="#">お問い合わせ2</a></li>
      <li><a href="#">お問い合わせ3</a></li>
      <li><a href="#">お問い合わせ4</a></li>
    </ul>
  </nav>`}
  initialCSS={`body {
      margin: 0;
  }

  header {
    border-bottom: solid black 1px;
  }

  /* ハンバーガーのボタンとアイコンの調整 */
  .ham-btn {
    display: block;
    padding: 20px;

    border: none;
    background: transparent;
    cursor: pointer;

    position: relative;
    z-index: 1;
  }

  .ham-icon {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ham-icon .line {
    width: 32px;
    height: 4px;

    display: block;
    background-color: black;
  }
  
  /* ハンバーガーのメニューコンテンツ部分の調整 */
  .ham-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2);

    padding: 60px 20px 0;

    transform: translateX(-100%); /* 初期の閉じている状態では、画面左に隠す */
  }
  
  .ham-nav.open {
    transform: translateX(0); /* open クラスがついているときは、元の位置に表示する */
  }`}
  initialJS={`// ハンバーガーボタンの要素を取得
  const hamBtnYoso = document.querySelector('.ham-btn');
  // ハンバーガーメニューの要素を取得
  const hamNavYoso = document.querySelector('.ham-nav');

  // ハンバーガーボタンがクリックされたときの処理
  hamBtnYoso.addEventListener('click', () => {
    // ham-nav クラスに対して、open クラスの付け外しを行う
    hamNavYoso.classList.toggle('open');
  });`}
/>

<Solution>
前の演習から増えたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習3"/>
</Solution>
</Exercise>

<Exercise title="演習4（アニメーション化）">

あとは適切にアニメーションするように調整しましょう。以下のプレビューのように、ハンバーガーアイコンをクリックしたら、
- 滑らかにメニューが出し入れする
- 閉じているときにメニューの影がちらっと見えないようにする
ように CSS を書き換えてください。

<CodePreview
  sourceId="演習4"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <button class="ham-btn">
      <span class="ham-icon">
        <span class="line top"></span>
        <span class="line middle"></span>
        <span class="line bottom"></span>
      </span>
    </button>
  </header>
  <nav class="ham-nav">
    <ul>
      <li><a href="#">ホーム</a></li>
      <li><a href="#">サービス</a></li>
      <li><a href="#">会社情報</a></li>
      <li><a href="#">お問い合わせ</a></li>
      <li><a href="#">お問い合わせ2</a></li>
      <li><a href="#">お問い合わせ3</a></li>
      <li><a href="#">お問い合わせ4</a></li>
    </ul>
  </nav>`}
  initialCSS={`body {
      margin: 0;
  }

  header {
    border-bottom: solid black 1px;
  }

  /* ハンバーガーのボタンとアイコンの調整 */
  .ham-btn {
    display: block;
    padding: 20px;

    border: none;
    background: transparent;
    cursor: pointer;

    position: relative;
    z-index: 1;
  }

  .ham-icon {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ham-icon .line {
    width: 32px;
    height: 4px;

    display: block;
    background-color: black;
  }
  
  /* ハンバーガーのメニューコンテンツ部分の調整 */
  .ham-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    /* box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2); これは、open の時の方に移動 */

    padding: 60px 20px 0;

    transform: translateX(-100%);
    transition: all 1s; /* 滑らかに変化するようにする */
  }
  
  .ham-nav.open {
    transform: translateX(0);
    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2); /* 開いている時だけ影をつけるようにする */
  }`}
  initialJS={`const hamBtnYoso = document.querySelector('.ham-btn');
  const hamNavYoso = document.querySelector('.ham-nav');

  hamBtnYoso.addEventListener('click', () => {
    hamNavYoso.classList.toggle('open');
  });`}
/>

<Solution>
前の演習から増えたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習4"/>
</Solution>
</Exercise>

<Exercise title="演習-発展1（オーバーレイ）">

以下のプレビューのように、メニューが開いているときは、ページの内容の上にグレーの半透明のもの（オーバーレイと言います）が表示されるようにしてください。
また、オーバーレイ部分をクリックしたらメニューが閉じるようにしてください。

:::tip
ヒント
- オーバーレイは画面全体を覆う、要素として作ります。そのため、それ用の要素を HTML に追加する必要があります。
:::

<CodePreview
  sourceId="演習-発展1"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <button class="ham-btn">
      <span class="ham-icon">
        <span class="line top"></span>
        <span class="line middle"></span>
        <span class="line bottom"></span>
      </span>
    </button>
  </header>
  <nav class="ham-nav">
    <ul>
      <li><a href="#">ホーム</a></li>
      <li><a href="#">サービス</a></li>
      <li><a href="#">会社情報</a></li>
      <li><a href="#">お問い合わせ</a></li>
      <li><a href="#">お問い合わせ2</a></li>
      <li><a href="#">お問い合わせ3</a></li>
      <li><a href="#">お問い合わせ4</a></li>
    </ul>
  </nav>
  <div class="overlay"></div>`}
  initialCSS={`body {
      margin: 0;
  }

  header {
    border-bottom: solid black 1px;
  }

  /* ハンバーガーのボタンとアイコンの調整 */
  .ham-btn {
    display: block;
    padding: 20px;

    border: none;
    background: transparent;
    cursor: pointer;

    position: relative;
    z-index: 2; /* メニューコンテンツより上に表示するために、z-index を 2 に */
  }

  .ham-icon {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ham-icon .line {
    width: 32px;
    height: 4px;

    display: block;
    background-color: black;
  }
  
  /* ハンバーガーのメニューコンテンツ部分の調整 */
  .ham-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: white;

    padding: 60px 20px 0;

    transform: translateX(-100%);
    transition: all 1s;
    z-index: 1; /* オーバーレイの上に表示するために、z-index を 1 に */
  }
  
  .ham-nav.open {
    transform: translateX(0);
    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2);
  }
  
  /* オーバーレイ部分の調整 */
  .overlay {
    position: fixed; /* 画面内で位置固定 */
    top: 0; /* 上端を画面の上端に合わせる */
    bottom: 0; /* 下端を画面の下端に合わせる */
    left: 0; /* 左端を画面の左端に合わせる */
    right: 0; /* 右端を画面の右端に合わせる */
    background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒 */
    opacity: 0; /* 初期状態では透明にする */
    transition: opacity 1s; /* opacity の変化を滑らかにする */
    z-index: 0; /* メニューの下に表示するために、z-index を 0 に */
  }

  .overlay.open {
    opacity: 1; /* 見えるようにする */
  `}
  initialJS={`const hamBtnYoso = document.querySelector('.ham-btn');
  const hamNavYoso = document.querySelector('.ham-nav');
  // オーバーレイ部分の要素を取得
  const overlayYoso = document.querySelector('.overlay');

  hamBtnYoso.addEventListener('click', () => {
    hamNavYoso.classList.toggle('open');
    overlayYoso.classList.toggle('open'); // オーバーレイ部分も open クラスの付け外しを行う
  });
  
  // オーバーレイ部分がクリックされたときの処理
  overlayYoso.addEventListener('click', () => {
    hamNavYoso.classList.remove('open'); // メニューを閉じる
    overlayYoso.classList.remove('open'); // オーバーレイ部分も閉じる
  });`}
/>

<Solution>
前の演習から増えたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習-発展1"/>
</Solution>
</Exercise>

