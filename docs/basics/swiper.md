---
title: スライダーを作ろう
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

今日は、スライダーやカルーセルを実装してみましょう。
実際のウェブサイトの「画像ギャラリー」や「商品一覧」、「ニュースのスライダー」で広く使われている機能です。

実際に使われていそうなサイトの例（代表例）:

- Apple Store（公開ページで製品紹介のスライダーが確認できます）: https://www.apple.com/jp/store
  - 使われる箇所: トップページの製品紹介スライダー → 画像を左右にスワイプ
- Uniqlo（商品画像のスライダー）: https://www.uniqlo.com/jp/ja/
  - 使われる箇所: 商品詳細ページの画像ギャラリー → 左右にスワイプして別の商品画像を表示

以下は、完成イメージです。左右の矢印ボタンやドラッグで操作できます。

<CodePreview
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="product-card">
          <div class="product-image">📱</div>
          <h3>スマートフォン</h3>
          <p class="price">¥89,800</p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="product-card">
          <div class="product-image">💻</div>
          <h3>ノートパソコン</h3>
          <p class="price">¥149,800</p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="product-card">
          <div class="product-image">⌚</div>
          <h3>スマートウォッチ</h3>
          <p class="price">¥45,800</p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="product-card">
          <div class="product-image">🎧</div>
          <h3>ワイヤレスイヤホン</h3>
          <p class="price">¥29,800</p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="product-card">
          <div class="product-image">📷</div>
          <h3>デジタルカメラ</h3>
          <p class="price">¥79,800</p>
        </div>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    height: 280px;
    /* スライド幅計算とズレないよう左右パディングは外す */
    padding: 20px 0;
    /* 念のためはみ出しを隠す */
    overflow: hidden;
  }
  .swiper-slide {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 子要素の幅計算でオーバーフローしないように */
    min-width: 0;
  }
  .product-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
    /* スライド幅に応じて縮み、最大200pxまで */
    max-width: 200px;
    box-sizing: border-box;
  }
  .product-image {
    font-size: 64px;
    margin-bottom: 12px;
  }
  .product-card h3 {
    font-size: 18px;
    margin: 8px 0;
    color: #333;
  }
  .price {
    font-size: 20px;
    font-weight: bold;
    color: #e74c3c;
    margin: 8px 0 0 0;
  }`}
  initialJS={`let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });`}/>

---

## この章の進め方（ライブラリを使ってみよう）

スライダーを純粋な HTML、CSS、JavaScript だけで自力で作るのは、とても難しいです。
そこで、**「ライブラリ」** と言って、どこかの誰かが作ってくれたものを使いましょう。

実務では、誰かが作ってくれたものを借りて使って、目的を達成するということがよくあります。
今日は、この「誰かが作ってくれたライブラリ」をドキュメントを見ながら使うという体験をしましょう。

今回使用するライブラリは「Swiper.js」という、スライダーやカルーセルを簡単に実装できるライブラリです。

- まず公式サイトをざっと眺める: https://swiperjs.com/
- 検索キーワード例:
  - 「Swiper 使い方」,「Swiper 始め方」
  - 「Swiper 矢印ボタン」,「Swiper ページネーション」

以下の演習は、Swiper.js の使い方を自分で調べて解いてください。

---

<Exercise title="演習1（基本のスライダー：3枚を横にスワイプ）">
3枚のスライドを横にスワイプできる、次のプレビューのようなスライダーを作成して下さい。

<CodePreview
  sourceId="演習1_基本"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <!-- これを body 内に入れて -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
    </div>
  </div>`}
  initialCSS={`.swiper {
    height: 220px;
  }
  .swiper-slide {
    background-color: #cfe9ff;
  }`}
  initialJS={`let swiper = new Swiper('.swiper', {});`}
/>

<Solution>
<CodePreview
  sourceId="演習1_基本"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>
</Solution>
</Exercise>

---

<Exercise title="演習2（矢印とページネーションを付ける）">
4枚のスライドを横にスワイプできる、次のプレビューのようなスライダーを作成して下さい。

- 左右の矢印ボタンで操作できる。
- 下部にページネーション（点）が表示される。

<CodePreview
  sourceId="演習2_ナビページネーション"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <!-- これを body 内に入れて -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">商品A</div>
      <div class="swiper-slide">商品B</div>
      <div class="swiper-slide">商品C</div>
      <div class="swiper-slide">商品D</div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    height: 230px;
  }
  .swiper-slide {
    background-color: #e0ffe0;
  }`}
  initialJS={`let swiper = new Swiper('.swiper', {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習2_ナビページネーション"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>
</Solution>
</Exercise>

---

<Exercise title="演習2-発展1（自動再生とループ機能）">
5枚のスライドを持つ、次のプレビューのようなスライダーを作成して下さい。

- 3秒ごとに自動でスライドが切り替わる。
- 最後のスライドの次は、最初のスライドに戻る（ループ再生）。
- 矢印ボタンとページネーションも表示する。

<CodePreview
  sourceId="演習2発展1_自動再生ループ"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <!-- これを body 内に入れて -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">ニュース1</div>
      <div class="swiper-slide">ニュース2</div>
      <div class="swiper-slide">ニュース3</div>
      <div class="swiper-slide">ニュース4</div>
      <div class="swiper-slide">ニュース5</div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    height: 250px;
  }
  .swiper-slide {
    background-color: #fff3cd;
  }`}
  initialJS={`let swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習2発展1_自動再生ループ"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `loop: true` で最後のスライドの次に最初のスライドに戻ります（ループ再生）。
- `autoplay: { delay: 3000 }` で3秒（3000ミリ秒）ごとに自動でスライドが切り替わります。
- これらのオプションを組み合わせることで、ニュースティッカーのような自動循環スライダーが作れます。
</Solution>
</Exercise>

---

<Exercise title="演習2-発展2（複数枚同時表示）">
6枚のスライドを持つ、次のプレビューのようなスライダーを作成して下さい。

- 一度に3枚のスライドを表示する。
- スライド間のスペースは20pxにする。
- 矢印ボタンとページネーションも表示する。

<CodePreview
  sourceId="演習2発展2_複数枚表示"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <!-- これを body 内に入れて -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">画像1</div>
      <div class="swiper-slide">画像2</div>
      <div class="swiper-slide">画像3</div>
      <div class="swiper-slide">画像4</div>
      <div class="swiper-slide">画像5</div>
      <div class="swiper-slide">画像6</div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    height: 250px;
  }
  .swiper-slide {
    background-color: #d4edda;
  }`}
  initialJS={`let swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習2発展2_複数枚表示"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `slidesPerView: 3` で一度に3枚のスライドを表示します。
- `spaceBetween: 20` でスライド間のスペースを20pxに設定します。
- このように複数枚を同時に表示することで、ギャラリーや商品一覧のようなレイアウトが作れます。
</Solution>
</Exercise>
