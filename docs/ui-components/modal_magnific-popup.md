---
title: モーダルウィンドウ (Magnific Popup)
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

今日は、モーダルウィンドウ（ポップアップ）を実装してみましょう。
実際のウェブサイトでは、「お知らせの表示」「詳細情報の表示」「入力フォーム」「確認ダイアログ」などで広く使われています。

実際に使われていそうなサイトの例（代表例）:

- X (旧Twitter)（ポスト作成）: https://x.com/
  - 使われる箇所: 「ポストする」ボタンをクリック → モーダルウィンドウで投稿フォームが表示
- Google ドライブ（新規フォルダ作成）: https://drive.google.com/
  - 使われる箇所: 「新規」→「新しいフォルダ」をクリック → モーダルでフォルダ名入力フォームが表示

以下は、完成イメージです。「モーダルを開く」ボタンをクリックすると、モーダルウィンドウが表示されます。

<CodePreview
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <a href="#modal-content" class="open-modal-btn">モーダルを開く</a>

  <div id="modal-content" class="mfp-hide">
    <div class="modal-inner">
      <h2>🎉 お知らせ</h2>
      <p>これはモーダルウィンドウです。</p>
      <p>背景をクリックするか、右上の×ボタンで閉じることができます。</p>
    </div>
  </div>`}
  initialCSS={`.open-modal-btn {
    display: inline-block;
    padding: 16px 32px;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    transition: background 0.3s;
  }
  .open-modal-btn:hover {
    background: #2980b9;
  }
  .modal-inner {
    background: white;
    padding: 40px;
    border-radius: 12px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }
  .modal-inner h2 {
    margin: 0 0 16px 0;
    color: #333;
  }
  .modal-inner p {
    margin: 8px 0;
    color: #666;
    line-height: 1.6;
  }`}
  initialJS={`$('.open-modal-btn').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    mainClass: 'mfp-fade',
    removalDelay: 300,
  });`}/>

---

## この章の進め方（ライブラリを使ってみよう）

モーダルウィンドウは、純粋な HTML、CSS、JavaScript だけで比較的簡単に作れますが、今回は、**「ライブラリ」** を使ってみましょう。

実務では、誰かが作ってくれたものを借りて使って、目的を達成するということがよくあります。
今日は、この「誰かが作ってくれたライブラリ」をドキュメントを見ながら使うという体験をしましょう。

今回使用するライブラリは「Magnific Popup」という、モーダルウィンドウを簡単に実装できる jQuery プラグインです。

- まず公式サイトをざっと眺める: https://dimsemenov.com/plugins/magnific-popup/
- 検索キーワード例:
  - 「Magnific Popup 使い方」,「Magnific Popup 始め方」
  - 「Magnific Popup インライン」,「Magnific Popup 画像」

以下の演習は、Magnific Popup の使い方を自分で調べて解いてください。

---

<Exercise title="演習1（基本のモーダル：ボタンクリックでポップアップ表示）">
ボタンをクリックするとモーダルウィンドウが表示される、次のプレビューのようなモーダルを作成して下さい。

<CodePreview
  sourceId="演習1_基本"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a href="#my-modal" class="open-btn">モーダルを開く</a>

  <div id="my-modal" class="mfp-hide">
    <p>これはモーダルの中身です。</p>
  </div>`}
  initialCSS={`.open-btn {
    display: inline-block;
    padding: 12px 24px;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  #my-modal {
    background: white;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
  }`}
  initialJS={`$('.open-btn').magnificPopup({
    type: 'inline',
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習1_基本"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `href="#my-modal"` でモーダルに表示するコンテンツのIDを指定します。
- `mfp-hide` クラスは、モーダルコンテンツを初期状態で非表示にするためのクラスです。
- `type: 'inline'` で、ページ内の要素をモーダルとして表示します。
</Solution>
</Exercise>

---

<Exercise title="演習2（画像のポップアップ表示）">
画像をクリックすると、その画像が拡大表示される、次のプレビューのようなモーダルを作成して下さい。

<CodePreview
  sourceId="演習2_画像モーダル"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a href="https://picsum.photos/800/600" class="image-popup">
    <img src="https://picsum.photos/200/150" alt="サンプル画像">
  </a>`}
  initialCSS={`.image-popup img {
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.3s;
  }
  .image-popup img:hover {
    transform: scale(1.05);
  }`}
  initialJS={`$('.image-popup').magnificPopup({
    type: 'image',
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習2_画像モーダル"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `href` 属性に拡大表示する画像のURLを指定します。
- `type: 'image'` で、画像をモーダルとして表示します。
- サムネイル画像をクリックすると、大きな画像がポップアップ表示されます。
</Solution>
</Exercise>

---

<Exercise title="演習2-発展1（画像ギャラリー：複数画像を切り替え表示）">
複数の画像を持つギャラリーを作成して下さい。

- 画像をクリックすると拡大表示される。
- 左右の矢印で次の画像・前の画像に移動できる。

<CodePreview
  sourceId="演習2発展1_画像ギャラリー"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <div class="gallery">
    <a href="https://picsum.photos/800/600?random=1" class="gallery-item">
      <img src="https://picsum.photos/150/100?random=1" alt="画像1">
    </a>
    <a href="https://picsum.photos/800/600?random=2" class="gallery-item">
      <img src="https://picsum.photos/150/100?random=2" alt="画像2">
    </a>
    <a href="https://picsum.photos/800/600?random=3" class="gallery-item">
      <img src="https://picsum.photos/150/100?random=3" alt="画像3">
    </a>
    <a href="https://picsum.photos/800/600?random=4" class="gallery-item">
      <img src="https://picsum.photos/150/100?random=4" alt="画像4">
    </a>
  </div>`}
  initialCSS={`.gallery {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .gallery-item img {
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  .gallery-item img:hover {
    opacity: 0.8;
  }`}
  initialJS={`$('.gallery').magnificPopup({
    delegate: '.gallery-item',
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習2発展1_画像ギャラリー"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `delegate: '.gallery-item'` で、ギャラリー内の各画像リンクを対象にします。
- `gallery: { enabled: true }` で、複数画像をギャラリーとして扱います。
- `navigateByImgClick: true` で、画像をクリックして次の画像に移動できます。
- `preload: [0, 1]` で、現在の画像の前後1枚をプリロードします。
</Solution>
</Exercise>

---

<Exercise title="演習2-発展2（フェードアニメーション付きモーダル）">
フェードインアニメーション付きのモーダルを作成して下さい。

- モーダルが開くときにフェードインする。
- モーダルが閉じるときにフェードアウトする。
- 閉じるボタンをモーダル内に表示する。

<CodePreview
  sourceId="演習2発展2_アニメーション"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a href="#fancy-modal" class="fancy-btn">アニメーション付きモーダル</a>

  <div id="fancy-modal" class="mfp-hide">
    <div class="fancy-content">
      <h2>✨ ようこそ！</h2>
      <p>フェードインアニメーションで表示されました。</p>
      <p>背景をクリックするか、×ボタンで閉じられます。</p>
    </div>
  </div>`}
  initialCSS={`.fancy-btn {
    display: inline-block;
    padding: 16px 32px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
  }
  .fancy-content {
    background: white;
    padding: 40px;
    border-radius: 16px;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  }
  .fancy-content h2 {
    margin: 0 0 16px 0;
    color: #333;
  }
  .fancy-content p {
    margin: 8px 0;
    color: #666;
  }
  /* フェードアニメーション用CSS */
  .mfp-fade.mfp-bg {
    opacity: 0;
    transition: all 0.3s ease-out;
  }
  .mfp-fade.mfp-bg.mfp-ready {
    opacity: 0.8;
  }
  .mfp-fade.mfp-bg.mfp-removing {
    opacity: 0;
  }
  .mfp-fade.mfp-wrap .mfp-content {
    opacity: 0;
    transition: all 0.3s ease-out;
  }
  .mfp-fade.mfp-wrap.mfp-ready .mfp-content {
    opacity: 1;
  }
  .mfp-fade.mfp-wrap.mfp-removing .mfp-content {
    opacity: 0;
  }`}
  initialJS={`$('.fancy-btn').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    mainClass: 'mfp-fade',
    removalDelay: 300,
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習2発展2_アニメーション"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `mainClass: 'mfp-fade'` で、フェードアニメーション用のクラスを追加します。
- `removalDelay: 300` で、閉じるアニメーションの時間を確保します（300ミリ秒）。
- `closeBtnInside: true` で、閉じるボタンをモーダル内に表示します。
- CSSの `transition` と `.mfp-ready`、`.mfp-removing` クラスを使ってアニメーションを実現します。
</Solution>
</Exercise>
