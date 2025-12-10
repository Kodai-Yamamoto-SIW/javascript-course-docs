---
title: ドロップダウンメニュー
sidebar_position: 999
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## ドロップダウンメニューとは

ドロップダウンメニューは、メニュー項目の下に隠されたサブメニューが、クリックやホバーで表示される UI パターンです。ナビゲーションメニューでよく使われ、限られたスペースに多くのリンクを配置できます。

このページでは、ドロップダウンメニューの作り方を順を追って学んでいきます。

<Exercise title="演習1（メニューの基本構造作成）">

まずは、メニューの基本的な見た目を作りましょう。以下のプレビューと同じ見た目になるように、HTML と CSS を書いてください。

<CodePreview
  sourceId="演習1"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <nav>
      <ul class="menu">
        <li>ホーム</li>
        <li>サービス</li>
        <li>会社情報</li>
        <li>お問い合わせ</li>
      </ul>
    </nav>
  </header>`}
  initialCSS={`body {
    margin: 0; /* ページの端の余白をなくす */
  }

  header {
    border-bottom: solid black 1px; /* ヘッダーの下の線 */
  }

  .menu {
    display: flex; /* 横並びに */
    list-style: none; /* リストの点を消す */
    padding: 0; /* ulにデフォルトでついているパディングを消す */
  }`}
/>

<Solution>
<CodePreview sourceId="演習1"/>
</Solution>
</Exercise>

<Exercise title="演習2（サブメニューの作成）">

続いて、メニューの中身を書きましょう。「サービス」メニューの中身だけ、作成してください。以下のプレビューと同じ見た目になるように、HTML と CSS を書いてください。

<CodePreview
  sourceId="演習2"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <nav>
      <ul class="menu">
        <li>ホーム</li>
        <li>
          <span>サービス</span> <!-- サブメニューができたので、(地べたに置くと扱いにくそうなので)ここは何か要素で囲んでおく(span など (概ねなんでも良い)) -->
          <ul class="dd-submenu"> <!-- 「サービス」を囲んでいた li の中に、サブメニューを追加。dd = drop down のつもりでつけました(名前は何でも良いです) -->
            <li>Web開発</li>
            <li>モバイルアプリ開発</li>
            <li>UI/UXデザイン</li>
          </ul>
        </li>
        <li>会社情報</li>
        <li>お問い合わせ</li>
      </ul>
    </nav>
  </header>`}
  initialCSS={`body {
    margin: 0;
  }

  header {
    border-bottom: solid black 1px;
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
  }
  
  .dd-submenu {
    list-style: none; /* リストの点を消す */
    padding: 0; /* ulにデフォルトでついているパディングを消す */
    border: solid black 1px; /* 枠線 */
    background-color: white; /* 背景色を白に */
    position: absolute; /* 絶対配置にして、その場のスペースを占有せずに、要素を浮かせる */
  }`}
/>

<Solution>
前の演習から増えたり、変わったりしたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習2"/>
</Solution>
</Exercise>

<Exercise title="演習3（開閉機能の作成）">

ついに、JavaScript で開閉機能を作りましょう。以下のプレビューのように、サービスメニューにカーソルを乗せたときにサブメニューが表示されるようにしてください。

（次の演習でアニメーションさせたいので）表示/非表示は、透明度で制御してください。
また、CSSの変更はクラスのつけ外しで行ってください。

::::tip
透明度で表示/非表示を制御する場合、要素が完全に透明であっても、要素自体は存在している扱いとなるため、カーソルを乗せた時のイベントなどが発生する状態となります。  
それを防ぐには、CSSの `visibility` プロパティを使って、非表示にするときには `visibility: hidden;`、表示するときには `visibility: visible;` も追加することで、イベントも発生させないようにできます。
::::

<CodePreview
  sourceId="演習3"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <nav>
      <ul class="menu">
        <li>ホーム</li>
        <li class="dd-menu"> <!-- この要素(= 子である「サービス」や「.dd-submenu」)にカーソルを乗せたり外したりしたときにメニューを開閉したいので、ここにクラスをつける -->
          <span>サービス</span>
          <ul class="dd-submenu">
            <li>Web開発</li>
            <li>モバイルアプリ開発</li>
            <li>UI/UXデザイン</li>
          </ul>
        </li>
        <li>会社情報</li>
        <li>お問い合わせ</li>
      </ul>
    </nav>
  </header>`}
  initialCSS={`body {
    margin: 0;
  }

  header {
    border-bottom: solid black 1px;
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
  }
  
  .dd-submenu {
    list-style: none;
    padding: 0;
    border: solid black 1px;
    background-color: white;
    position: absolute;
    opacity: 0; /* 最初は完全に透明で */
    visibility: hidden; /* 見えないようにする */
  }
  
  .dd-submenu.open { /* サブメニューに open クラスがついているとき（開いているとき） */
    opacity: 1; /* しっかり見えるようにする */
    visibility: visible; /* 見えるようにする */
  }`}
  initialJS={`// ドロップダウンメニューの要素を取得
  let ddMenuYoso = document.querySelector('.dd-menu');

  // マウスが乗ったときの処理
  ddMenuYoso.addEventListener('mouseenter', function() {
    let submenu = ddMenuYoso.querySelector('.dd-submenu');
    submenu.classList.add('open'); // open クラスを追加して表示
  });

  // マウスが離れたときの処理
  ddMenuYoso.addEventListener('mouseleave', function() {
    let submenu = ddMenuYoso.querySelector('.dd-submenu');
    submenu.classList.remove('open'); // open クラスを削除して非表示
  });`}
/>

<Solution>
前の演習から増えたり、変わったりしたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習3"/>
</Solution>
</Exercise>

<Exercise title="演習4（アニメーション化）">

あとは適切にアニメーションするように調整しましょう。以下のプレビューのように、滑らかに表示/非表示が切り替わるようにしてください。

<CodePreview
  sourceId="演習4"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <nav>
      <ul class="menu">
        <li>ホーム</li>
        <li class="dd-menu">
          <span>サービス</span>
          <ul class="dd-submenu">
            <li>Web開発</li>
            <li>モバイルアプリ開発</li>
            <li>UI/UXデザイン</li>
          </ul>
        </li>
        <li>会社情報</li>
        <li>お問い合わせ</li>
      </ul>
    </nav>
  </header>`}
  initialCSS={`body {
    margin: 0;
  }

  header {
    border-bottom: solid black 1px;
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
  }
  
  .dd-submenu {
    list-style: none;
    padding: 0;
    border: solid black 1px;
    background-color: white;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s; /* 0.3秒かけて変化させるようにアニメーション化する */
  }
  
  .dd-submenu.open {
    opacity: 1;
    visibility: visible;
  }`}
  initialJS={`let ddMenuYoso = document.querySelector('.dd-menu');

  ddMenuYoso.addEventListener('mouseenter', function() {
    let submenu = ddMenuYoso.querySelector('.dd-submenu');
    submenu.classList.add('open');
  });

  ddMenuYoso.addEventListener('mouseleave', function() {
    let submenu = ddMenuYoso.querySelector('.dd-submenu');
    submenu.classList.remove('open');
  });`}
/>

<Solution>
前の演習から増えたり、変わったりしたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習4"/>
</Solution>
</Exercise>

<Exercise title="演習-発展1（デザイン調整）">

機能は完成したので、見た目を整えましょう。以下のプレビューと同じ見た目になるように、CSSを調整してください。

<CodePreview
  sourceId="演習-発展1"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<header>
    <nav>
      <ul class="menu">
        <li>ホーム</li>
        <li class="dd-menu">
          <span>サービス</span>
          <ul class="dd-submenu">
            <li>Web開発</li>
            <li>モバイルアプリ開発</li>
            <li>UI/UXデザイン</li>
          </ul>
        </li>
        <li>会社情報</li>
        <li>お問い合わせ</li>
      </ul>
    </nav>
  </header>`}
  initialCSS={`body {
    margin: 0;
  }

  header {
    border-bottom: solid #ddd 1px; /* 枠線を薄いグレーに */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 影を追加 */
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0; /* デフォルトのマージンを削除 */
  }

  .menu > li { /* メニュー項目のスタイル */
    padding: 15px 20px; /* 上下15px、左右20pxの余白 */
    cursor: pointer; /* カーソルをポインターに */
  }

  .menu > li:hover { /* メニュー項目にホバーしたとき */
    background-color: #f5f5f5; /* 背景色を薄いグレーに */
  }

  .dd-menu { /* ドロップダウンメニューを持つ項目 */
    position: relative; /* 子要素の絶対配置の基準にする */
  }
  
  .dd-submenu {
    list-style: none;
    padding: 0;
    margin: 0; /* デフォルトのマージンを削除 */
    border: solid #ddd 1px; /* 枠線を薄いグレーに */
    background-color: white;
    position: absolute;
    top: 100%; /* .dd-menu の下端に配置 */
    left: 0; /* .dd-menu の左端に配置 */
    width: max-content; /* 最大コンテンツの幅に合わせる */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 影を追加 */
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  .dd-submenu li { /* サブメニュー項目のスタイル */
    padding: 12px 20px; /* 上下12px、左右20pxの余白 */
    cursor: pointer; /* カーソルをポインターに */
  }

  .dd-submenu li:hover { /* サブメニュー項目にホバーしたとき */
    background-color: #f5f5f5; /* 背景色を薄いグレーに */
  }
  
  .dd-submenu.open {
    opacity: 1;
    visibility: visible;
  }`}
  initialJS={`
    let ddMenuYoso = document.querySelector('.dd-menu');

    ddMenuYoso.addEventListener('mouseenter', function() {
      let submenu = ddMenuYoso.querySelector('.dd-submenu');
      submenu.classList.add('open');
    });

    ddMenuYoso.addEventListener('mouseleave', function() {
      let submenu = ddMenuYoso.querySelector('.dd-submenu');
      submenu.classList.remove('open');
    });
  `}
/>

<Solution>
前の演習から増えたり、変わったりしたところだけ、プロパティの後ろにコメントを書いています。
<CodePreview sourceId="演習-発展1"/>
</Solution>
</Exercise>
