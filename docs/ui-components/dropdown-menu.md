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

<Exercise title="演習-発展2（スライドダウンアニメーションの追加）">

今のアニメーションに、さらに上から降りてくるアニメーションを追加しましょう。以下のプレビューのように、上からスライドダウンしてくるようにしてください。

:::tip
- `transform: translateY()` を使って、縦方向の移動をアニメーションさせます
::::

<CodePreview
  sourceId="演習-発展2"
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
    border-bottom: solid #ddd 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu > li {
    padding: 15px 20px;
    cursor: pointer;
  }

  .menu > li:hover {
    background-color: #f5f5f5;
  }

  .dd-menu {
    position: relative;
  }
  
  .dd-submenu {
    list-style: none;
    padding: 0;
    margin: 0;
    border: solid #ddd 1px;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0;
    width: max-content;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px); /* 上に10px移動した位置から開始 */
    transition: all 0.3s, transform 0.3s, visibility 0.3s;
  }

  .dd-submenu li {
    padding: 12px 20px;
    cursor: pointer;
  }

  .dd-submenu li:hover {
    background-color: #f5f5f5;
  }
  
  .dd-submenu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0); /* 元の位置に移動 */
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
<CodePreview sourceId="演習-発展2"/>
</Solution>
</Exercise>

<Exercise title="演習-発展3（スケールアニメーションの追加）">

演習-発展2 で作ったスライドダウンアニメーションに、さらに拡大アニメーションも追加しましょう。以下のプレビューのように、上から降りてきながら、同時に小さい状態から拡大して表示されるようにしてください。

:::tip
- `transform` プロパティには、複数の変形を半角スペースで区切って指定できます
- 例: `transform: translateY(-10px) scale(0.95);` （上に10px移動 & 95%の大きさ）
- translateY が上下方向の移動、scale が拡大・縮小を表します
- `transform-origin` を使って、拡大の基準点を設定できます
- 例: `transform-origin: left top;` （左上を基準に拡大・縮小）
::::

<CodePreview
  sourceId="演習-発展3"
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
    border-bottom: solid #ddd 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu > li {
    padding: 15px 20px;
    cursor: pointer;
  }

  .menu > li:hover {
    background-color: #f5f5f5;
  }

  .dd-menu {
    position: relative;
  }
  
  .dd-submenu {
    list-style: none;
    padding: 0;
    margin: 0;
    border: solid #ddd 1px;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0;
    width: max-content;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) scale(0.95); /* 上に10px移動した位置から開始 + 少し小さい状態から開始 */
    transform-origin: left top; /* 左上を基準に変形 */
    transition: all 0.3s;
  }

  .dd-submenu li {
    padding: 12px 20px;
    cursor: pointer;
  }

  .dd-submenu li:hover {
    background-color: #f5f5f5;
  }
  
  .dd-submenu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1); /* 元の位置に移動 + 通常サイズ */
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
<CodePreview sourceId="演習-発展3"/>
</Solution>
</Exercise>

<Exercise title="演習-発展4（回転アニメーションの追加）">

演習-発展3 で作ったアニメーションに、さらに回転のアニメーションも追加しましょう。以下のプレビューのように、上から降りてきながら拡大し、同時に少し回転しながら表示されるようにしてください。

:::tip
- `transform: rotate()` を使って、要素を回転させることができます
- 角度の単位は `deg`（度）を使います
- 複数の変形を組み合わせる場合は、半角スペースで区切って指定します
::::

<CodePreview
  sourceId="演習-発展4"
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
    border-bottom: solid #ddd 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu > li {
    padding: 15px 20px;
    cursor: pointer;
  }

  .menu > li:hover {
    background-color: #f5f5f5;
  }

  .dd-menu {
    position: relative;
  }
  
  .dd-submenu {
    list-style: none;
    padding: 0;
    margin: 0;
    border: solid #ddd 1px;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0;
    width: max-content;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) scale(0.95) rotate(-3deg); /* 上に移動 + 縮小 + 反時計回りに3度回転した状態から開始 */
    transform-origin: top left;
    transition: all 0.3s;
  }

  .dd-submenu li {
    padding: 12px 20px;
    cursor: pointer;
  }

  .dd-submenu li:hover {
    background-color: #f5f5f5;
  }
  
  .dd-submenu.open {
    opacity: 1;
    visibility: visible;
    transform: revert; /* 元の状態に戻す　というのは、実は revert という特別な値を設定することで簡単に実現できます。(このような特別な値は initial, inherit, revert, unset などがあり、これらの特別な値は、全てのCSSのプロパティに使用できます) */
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
<CodePreview sourceId="演習-発展4"/>
</Solution>
</Exercise>
