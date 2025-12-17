---
title: ポップアップ/ダイアログ/モーダル (Magnific Popup)
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

今日は、ポップアップ（ダイアログ/モーダル）を実装してみましょう。
実際のウェブサイトでは、「お知らせの表示」「詳細情報の表示」「入力フォーム」「確認ダイアログ」などで広く使われています。

実際に使われていそうなサイトの例（代表例）:

- X (旧Twitter)（ポスト作成）: https://x.com/
  - 使われる箇所: 「ポストする」ボタンをクリック → モーダルで投稿フォームが表示
- Google ドライブ（新規フォルダ作成）: https://drive.google.com/
  - 使われる箇所: 「新規」→「新しいフォルダ」をクリック → モーダルでフォルダ名入力フォームが表示

以下は、完成イメージです。「ポップアップを開く」ボタンをクリックすると、ポップアップが表示されます。

<CodePreview
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <a class="open-popup-link" href="#popup-content">ポップアップを開く</a>

  <div id="popup-content" class="mfp-hide white-popup">
    <h2>お知らせ</h2>
    <p>これはポップアップの内容です。</p>
    <p>背景をクリックすると、閉じることができます。</p>
  </div>`}
  initialCSS={`.white-popup {
    background: white;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
  }`}
  initialJS={`$('.open-popup-link').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    midClick: true,
  });`}/>

---

## この章の進め方（ライブラリを使ってみよう）

ポップアップは、純粋な HTML、CSS、JavaScript だけで比較的簡単に作れますが、今回は、**「ライブラリ」** を使ってみましょう。

実務では、誰かが作ってくれたものを借りて使って、目的を達成するということがよくあります。
今日は、この「誰かが作ってくれたライブラリ」をドキュメントを見ながら使うという体験をしましょう。

今回使用するライブラリは「Magnific Popup」という、ポップアップを簡単に実装できる jQuery プラグインです。

- まず公式サイトをざっと眺める: https://dimsemenov.com/plugins/magnific-popup/
- 検索キーワード例:
  - 「Magnific Popup 使い方」,「Magnific Popup 始め方」
  - 「Magnific Popup 画像」

以下の演習は、Magnific Popup の使い方を自分で調べて解いてください。

---

<Exercise title="演習1（テキストリンクから画像ポップアップ）">
テキストのリンクをクリックすると、画像がポップアップで表示されるものを作成して下さい。

<CodePreview
  sourceId="演習1_テキストリンク画像"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a class="image-link" href="img/christmas_chicken.jpg">画像を見る</a>`}
  initialJS={`$('.image-link').magnificPopup({
    type: 'image',
  });`}
  images={{
    "img/christmas_chicken.jpg": "/javascript-course-docs/img/popup_magnific-popup/christmas_chicken.jpg"
  }}
/>

<Solution>
<CodePreview
  sourceId="演習1_テキストリンク画像"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- テキストリンクの `href` に画像のパスを指定します。
- `type: 'image'` で画像ポップアップモードになります。
- CSSは一切書かなくても動作します。
</Solution>
</Exercise>

---

<Exercise title="演習2（画像クリックでポップアップ）">
サムネイル画像をクリックすると、同じ画像が大きくポップアップで表示されるものを作成して下さい。

<CodePreview
  sourceId="演習2_画像ポップアップ"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a class="image-popup" href="img/christmas_chicken.jpg">
    <img src="img/christmas_chicken.jpg" width="200" alt="サムネイル">
  </a>`}
  initialJS={`$('.image-popup').magnificPopup({
    type: 'image',
  });`}
  images={{
    "img/christmas_chicken.jpg": "/javascript-course-docs/img/popup_magnific-popup/christmas_chicken.jpg"
  }}
/>

<Solution>
<CodePreview
  sourceId="演習2_画像ポップアップ"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `<a>` タグの `href` に画像のパスを指定します。
- `<img>` タグで小さいサムネイルを表示し、クリックで大きい画像を表示します。
- `type: 'image'` で画像ポップアップモードになります。
</Solution>
</Exercise>

---

<Exercise title="演習3（テキストコンテンツのポップアップ）">
リンクをクリックすると、テキストがポップアップで表示されるものを作成して下さい。

<CodePreview
  sourceId="演習3_テキスト"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a class="open-popup" href="#content">詳細を見る</a>

  <div id="content" class="mfp-hide">
    <p>これはポップアップで表示されるテキストです。</p>
  </div>`}
  initialJS={`$('.open-popup').magnificPopup({
    type: 'inline',
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習3_テキスト"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `href="#content"` でポップアップに表示するコンテンツのIDを指定します。
- `mfp-hide` クラスを付けると、通常時は非表示になります。
- `type: 'inline'` でページ内のHTML要素をポップアップとして表示します。
</Solution>
</Exercise>

---

<Exercise title="演習-発展1（モーダルウィンドウ風のポップアップ）">
リンクをクリックすると、見た目を整えたモーダルウィンドウ風のポップアップが表示されるものを作成して下さい。

<CodePreview
  sourceId="演習発展1_モーダル"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a class="open-modal" href="#modal-content">お知らせを見る</a>

  <div id="modal-content" class="mfp-hide white-popup">
    <h2>お知らせ</h2>
    <p>これはモーダルウィンドウ風のポップアップです。</p>
    <p>背景をクリックすると閉じることができます。</p>
  </div>`}
  initialCSS={`.white-popup {
    background: white;
    padding: 30px;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 8px;
  }
  .white-popup h2 {
    margin-top: 0;
  }`}
  initialJS={`$('.open-modal').magnificPopup({
    type: 'inline',
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習発展1_モーダル"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- CSSで `.white-popup` クラスにスタイルを適用して、モーダルウィンドウ風の見た目にします。
- `background: white` で白い背景を設定します。
- `padding` と `border-radius` で見栄えを整えます。
</Solution>
</Exercise>

---

<Exercise title="演習-発展2（YouTube動画のポップアップ）">
リンクをクリックすると、YouTube動画がポップアップで表示されるものを作成して下さい。

<CodePreview
  sourceId="演習発展2_YouTube"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <a class="video-popup" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">動画を見る</a>`}
  initialCSS={``}
  initialJS={`$('.video-popup').magnificPopup({
    type: 'iframe',
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習発展2_YouTube"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `href` にYouTubeの動画URLを指定します。
- `type: 'iframe'` でiframeとして動画を埋め込みます。
- Magnific PopupがYouTubeのURLを自動的に埋め込み形式に変換してくれます。
</Solution>
</Exercise>

---

<Exercise title="演習-発展3（画像ギャラリー）">
複数の画像をギャラリーとして表示し、ポップアップ内で左右の矢印で画像を切り替えられるようにして下さい。

<CodePreview
  sourceId="演習発展3_ギャラリー"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

  <!-- これを body 内に入れて -->
  <div class="gallery">
    <a href="img/christmas_chicken.jpg">
      <img src="img/christmas_chicken.jpg" width="150" alt="画像1">
    </a>
    <a href="img/christmas_snowman.jpg">
      <img src="img/christmas_snowman.jpg" width="150" alt="画像2">
    </a>
    <a href="img/whole_cake.jpg">
      <img src="img/whole_cake.jpg" width="150" alt="画像3">
    </a>
  </div>`}
  initialJS={`$('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });`}
  images={{
    "img/christmas_chicken.jpg": "/javascript-course-docs/img/popup_magnific-popup/christmas_chicken.jpg",
    "img/christmas_snowman.jpg": "/javascript-course-docs/img/popup_magnific-popup/christmas_snowman.jpg",
    "img/whole_cake.jpg": "/javascript-course-docs/img/popup_magnific-popup/whole_cake.jpg"
  }}
/>

<Solution>
<CodePreview
  sourceId="演習発展3_ギャラリー"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `delegate: 'a'` で、親要素（.gallery）内の `<a>` タグをトリガーとして指定します。
- `gallery: { enabled: true }` でギャラリーモードを有効にし、左右の矢印で画像を切り替えられるようになります。
- 複数の画像を一つのギャラリーとしてまとめて表示できます。
</Solution>
</Exercise>

