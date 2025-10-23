---
title: Swiper.js
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

この章で学ぶSwiper.jsは、スライダーやカルーセルを簡単に実装できるJavaScriptライブラリです。
実際のウェブサイトの「画像ギャラリー」や「商品一覧」、「ニュースのスライダー」で広く使われています。

実際に使われていそうなサイトの例（代表例）:

- Apple Store（公開ページで製品紹介のスライダーが確認できます）: https://www.apple.com/jp/store
  - 使われる箇所: トップページの製品紹介スライダー → Swiper.jsのような機能で画像をスワイプ
- Uniqlo（商品画像のスライダー）: https://www.uniqlo.com/jp/ja/
  - 使われる箇所: 商品詳細ページの画像ギャラリー → 左右にスワイプして別の商品画像を表示

以下は、Swiper.jsを使った商品スライダーの実例です。左右の矢印ボタンやドラッグで操作できます。

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
    width: 100%;
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
    width: 100%;
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

## Swiper.jsとは

**Swiper.js** は、タッチ操作やマウスドラッグに対応した高機能なスライダーを作成できるJavaScriptライブラリです。
スマートフォンやタブレットでのスワイプ操作にも対応しており、レスポンシブデザインに最適です。

---

## Swiper.jsを使う準備

Swiper.jsを使うには、HTMLファイルに以下のCDN（Content Delivery Network）を追加します。

```html
<!-- SwiperのCSSファイル -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">

<!-- SwiperのJavaScriptファイル -->
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
```

:::info
CDNとは、インターネット上でライブラリを公開しているサービスです。自分でファイルをダウンロードしなくても、URLを指定するだけでライブラリを使えます。
:::

---

## 基本的なスライダーの作り方

Swiper.jsで基本的なスライダーを作るには、HTMLとJavaScriptを次のように書きます。

### HTMLの構造

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">スライド1</div>
    <div class="swiper-slide">スライド2</div>
    <div class="swiper-slide">スライド3</div>
  </div>
</div>
```

- `swiper`: スライダー全体を囲む要素
- `swiper-wrapper`: スライドをまとめる要素
- `swiper-slide`: 各スライドの要素

### JavaScriptでスライダーを初期化

```js
let swiper = new Swiper(".swiper", {
  // オプションはここに書く
});
```

<CodePreview
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
    </div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 200px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightblue;
    font-size: 24px;
  }`}
  initialJS={`// Swiperを初期化
  let swiper = new Swiper(".swiper", {});`}/>

:::info
上記の例では、マウスでドラッグするか、スマートフォンでスワイプすることでスライドを切り替えられます。
:::

---

<Exercise title="演習1">
次のHTMLに対して、JavaScriptでSwiperを初期化し、基本的なスライダーを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">画像1</div>
    <div class="swiper-slide">画像2</div>
    <div class="swiper-slide">画像3</div>
  </div>
</div>
```

<CodePreview
  sourceId="演習1"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">画像1</div>
      <div class="swiper-slide">画像2</div>
      <div class="swiper-slide">画像3</div>
    </div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 250px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightcoral;
    font-size: 28px;
    color: white;
  }`}
  initialJS={`// Swiperを初期化
  let swiper = new Swiper(".swiper", {});`}/>

<Solution>
<CodePreview sourceId="演習1"/>
</Solution>
</Exercise>

---

## ナビゲーションボタンを追加する

左右の矢印ボタンでスライドを切り替えるには、HTMLに `swiper-button-next` と `swiper-button-prev` を追加し、JavaScriptのオプションで `navigation` を設定します。

### HTML

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">スライド1</div>
    <div class="swiper-slide">スライド2</div>
    <div class="swiper-slide">スライド3</div>
  </div>
  <!-- ナビゲーションボタン -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

### JavaScript

```js
let swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
```

<CodePreview
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 200px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightgreen;
    font-size: 24px;
  }`}
  initialJS={`// ナビゲーションボタン付きのSwiper
  let swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });`}/>

---

<Exercise title="演習2">
次のHTMLに対して、JavaScriptでナビゲーションボタン（左右の矢印）を有効にしたSwiperを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">商品A</div>
    <div class="swiper-slide">商品B</div>
    <div class="swiper-slide">商品C</div>
    <div class="swiper-slide">商品D</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

<CodePreview
  sourceId="演習2"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">商品A</div>
      <div class="swiper-slide">商品B</div>
      <div class="swiper-slide">商品C</div>
      <div class="swiper-slide">商品D</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: skyblue;
    font-size: 26px;
  }`}
  initialJS={`// ナビゲーションボタンを有効化
  let swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習2"/>
</Solution>
</Exercise>

---

## ページネーションを追加する

スライドの位置を示す点（ページネーション）を追加するには、HTMLに `swiper-pagination` を追加し、JavaScriptのオプションで `pagination` を設定します。

### HTML

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">スライド1</div>
    <div class="swiper-slide">スライド2</div>
    <div class="swiper-slide">スライド3</div>
  </div>
  <!-- ページネーション -->
  <div class="swiper-pagination"></div>
</div>
```

### JavaScript

```js
let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
```

<CodePreview
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 200px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightpink;
    font-size: 24px;
  }`}
  initialJS={`// ページネーション付きのSwiper
  let swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });`}/>

---

<Exercise title="演習3">
次のHTMLに対して、JavaScriptでページネーション（スライド位置を示す点）を表示するSwiperを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">ニュース1</div>
    <div class="swiper-slide">ニュース2</div>
    <div class="swiper-slide">ニュース3</div>
    <div class="swiper-slide">ニュース4</div>
  </div>
  <div class="swiper-pagination"></div>
</div>
```

<CodePreview
  sourceId="演習3"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">ニュース1</div>
      <div class="swiper-slide">ニュース2</div>
      <div class="swiper-slide">ニュース3</div>
      <div class="swiper-slide">ニュース4</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightyellow;
    font-size: 26px;
  }`}
  initialJS={`// ページネーションを有効化
  let swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習3"/>
</Solution>
</Exercise>

---

<Exercise title="演習3-発展">
次のHTMLに対して、JavaScriptでナビゲーションボタンとページネーションの両方を表示するSwiperを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">スライド1</div>
    <div class="swiper-slide">スライド2</div>
    <div class="swiper-slide">スライド3</div>
    <div class="swiper-slide">スライド4</div>
    <div class="swiper-slide">スライド5</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>
```

<CodePreview
  sourceId="演習3-発展"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
      <div class="swiper-slide">スライド4</div>
      <div class="swiper-slide">スライド5</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 230px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightseagreen;
    font-size: 26px;
    color: white;
  }`}
  initialJS={`// ナビゲーションボタンとページネーションを有効化
  let swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習3-発展"/>
</Solution>
</Exercise>

---

## 自動再生を設定する

スライドを自動で切り替えるには、JavaScriptのオプションで `autoplay` を設定します。

```js
let swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000, // 2秒（2000ミリ秒）ごとに自動で次のスライドへ
  },
});
```

<CodePreview
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 200px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightgoldenrodyellow;
    font-size: 24px;
  }`}
  initialJS={`// 自動再生を有効化
  let swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });`}/>

:::info
`delay` の単位はミリ秒です。1秒 = 1000ミリ秒なので、3秒にしたい場合は `delay: 3000` と書きます。
:::

---

<Exercise title="演習4">
次のHTMLに対して、JavaScriptで自動再生（3秒ごと）とページネーションを設定したSwiperを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">バナー1</div>
    <div class="swiper-slide">バナー2</div>
    <div class="swiper-slide">バナー3</div>
  </div>
  <div class="swiper-pagination"></div>
</div>
```

<CodePreview
  sourceId="演習4"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">バナー1</div>
      <div class="swiper-slide">バナー2</div>
      <div class="swiper-slide">バナー3</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lavender;
    font-size: 26px;
  }`}
  initialJS={`// 3秒ごとに自動再生
  let swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習4"/>
</Solution>
</Exercise>

---

## ループ再生を設定する

最後のスライドに到達した後、最初のスライドに戻るようにするには、`loop` オプションを `true` に設定します。

```js
let swiper = new Swiper(".swiper", {
  loop: true,
});
```

<CodePreview
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 200px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightsteelblue;
    font-size: 24px;
  }`}
  initialJS={`// ループ再生を有効化
  let swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });`}/>

---

<Exercise title="演習5">
次のHTMLに対して、JavaScriptでループ再生、自動再生（2秒ごと）、ナビゲーションボタンを設定したSwiperを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">画像A</div>
    <div class="swiper-slide">画像B</div>
    <div class="swiper-slide">画像C</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

<CodePreview
  sourceId="演習5"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">画像A</div>
      <div class="swiper-slide">画像B</div>
      <div class="swiper-slide">画像C</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightsalmon;
    font-size: 26px;
  }`}
  initialJS={`// ループ、自動再生、ナビゲーションボタンを有効化
  let swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習5"/>
</Solution>
</Exercise>

---

<Exercise title="演習5-発展">
次のHTMLに対して、JavaScriptで以下の設定をしたSwiperを作成せよ。

- ループ再生を有効
- 自動再生（4秒ごと）
- ナビゲーションボタンを表示
- ページネーションを表示

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">おすすめ1</div>
    <div class="swiper-slide">おすすめ2</div>
    <div class="swiper-slide">おすすめ3</div>
    <div class="swiper-slide">おすすめ4</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>
```

<CodePreview
  sourceId="演習5-発展"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">おすすめ1</div>
      <div class="swiper-slide">おすすめ2</div>
      <div class="swiper-slide">おすすめ3</div>
      <div class="swiper-slide">おすすめ4</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 230px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: peachpuff;
    font-size: 26px;
  }`}
  initialJS={`// 全ての機能を有効化
  let swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習5-発展"/>
</Solution>
</Exercise>

---

## スライドの表示数を変更する

一度に複数のスライドを表示するには、`slidesPerView` オプションを設定します。

```js
let swiper = new Swiper(".swiper", {
  slidesPerView: 2, // 一度に2つのスライドを表示
});
```

<CodePreview
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">2</div>
      <div class="swiper-slide">3</div>
      <div class="swiper-slide">4</div>
      <div class="swiper-slide">5</div>
    </div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 200px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightcyan;
    font-size: 32px;
    border: 2px solid gray;
  }`}
  initialJS={`// 一度に2つのスライドを表示
  let swiper = new Swiper(".swiper", {
    slidesPerView: 2,
  });`}/>

---

<Exercise title="演習6">
次のHTMLに対して、JavaScriptで一度に3つのスライドを表示するSwiperを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">商品1</div>
    <div class="swiper-slide">商品2</div>
    <div class="swiper-slide">商品3</div>
    <div class="swiper-slide">商品4</div>
    <div class="swiper-slide">商品5</div>
    <div class="swiper-slide">商品6</div>
  </div>
</div>
```

<CodePreview
  sourceId="演習6"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">商品1</div>
      <div class="swiper-slide">商品2</div>
      <div class="swiper-slide">商品3</div>
      <div class="swiper-slide">商品4</div>
      <div class="swiper-slide">商品5</div>
      <div class="swiper-slide">商品6</div>
    </div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: mistyrose;
    font-size: 24px;
    border: 2px solid darkgray;
  }`}
  initialJS={`// 一度に3つのスライドを表示
  let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
  });`}/>

<Solution>
<CodePreview sourceId="演習6"/>
</Solution>
</Exercise>

---

## スライド間の余白を設定する

スライド間に余白を追加するには、`spaceBetween` オプションを設定します（単位はピクセル）。

```js
let swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20, // スライド間に20pxの余白
});
```

<CodePreview
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">2</div>
      <div class="swiper-slide">3</div>
      <div class="swiper-slide">4</div>
    </div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 200px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightgray;
    font-size: 32px;
  }`}
  initialJS={`// 余白を設定
  let swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
  });`}/>

---

<Exercise title="演習7">
次のHTMLに対して、JavaScriptで一度に3つのスライドを表示し、スライド間に30pxの余白を設定したSwiperを作成せよ。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">カード1</div>
    <div class="swiper-slide">カード2</div>
    <div class="swiper-slide">カード3</div>
    <div class="swiper-slide">カード4</div>
    <div class="swiper-slide">カード5</div>
  </div>
</div>
```

<CodePreview
  sourceId="演習7"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">カード1</div>
      <div class="swiper-slide">カード2</div>
      <div class="swiper-slide">カード3</div>
      <div class="swiper-slide">カード4</div>
      <div class="swiper-slide">カード5</div>
    </div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: powderblue;
    font-size: 24px;
  }`}
  initialJS={`// 3つ表示、余白30px
  let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
  });`}/>

<Solution>
<CodePreview sourceId="演習7"/>
</Solution>
</Exercise>

---

<Exercise title="演習7-発展1">
次のHTMLに対して、JavaScriptで以下の設定をしたSwiperを作成せよ。

- 一度に4つのスライドを表示
- スライド間の余白は15px
- ループ再生を有効
- ナビゲーションボタンを表示

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">A</div>
    <div class="swiper-slide">B</div>
    <div class="swiper-slide">C</div>
    <div class="swiper-slide">D</div>
    <div class="swiper-slide">E</div>
    <div class="swiper-slide">F</div>
    <div class="swiper-slide">G</div>
    <div class="swiper-slide">H</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

<CodePreview
  sourceId="演習7-発展1"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">A</div>
      <div class="swiper-slide">B</div>
      <div class="swiper-slide">C</div>
      <div class="swiper-slide">D</div>
      <div class="swiper-slide">E</div>
      <div class="swiper-slide">F</div>
      <div class="swiper-slide">G</div>
      <div class="swiper-slide">H</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: wheat;
    font-size: 28px;
  }`}
  initialJS={`// 4つ表示、余白15px、ループ、ナビゲーション
  let swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習7-発展1"/>
</Solution>
</Exercise>

---

<Exercise title="演習7-発展2">
次のHTMLに対して、JavaScriptで以下の設定をしたSwiperを作成せよ。

- 一度に2つのスライドを表示
- スライド間の余白は25px
- 自動再生（3秒ごと）
- ループ再生を有効
- ページネーションを表示（クリック可能にする）

ページネーションをクリック可能にするには、`pagination` オプションに `clickable: true` を追加します。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">記事1</div>
    <div class="swiper-slide">記事2</div>
    <div class="swiper-slide">記事3</div>
    <div class="swiper-slide">記事4</div>
    <div class="swiper-slide">記事5</div>
    <div class="swiper-slide">記事6</div>
  </div>
  <div class="swiper-pagination"></div>
</div>
```

<CodePreview
  sourceId="演習7-発展2"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">記事1</div>
      <div class="swiper-slide">記事2</div>
      <div class="swiper-slide">記事3</div>
      <div class="swiper-slide">記事4</div>
      <div class="swiper-slide">記事5</div>
      <div class="swiper-slide">記事6</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 230px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: thistle;
    font-size: 26px;
  }`}
  initialJS={`// 2つ表示、余白25px、自動再生、ループ、クリック可能なページネーション
  let swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習7-発展2"/>
</Solution>
</Exercise>

---

<Exercise title="演習7-発展3">
次のHTMLに対して、JavaScriptでイベントを利用してスライドが切り替わったときにconsole.logで現在のスライド番号を出力するSwiperを作成せよ。

スライドが切り替わったときにイベントを検知するには、`on` オプションで `slideChange` イベントを設定します。

```js
let swiper = new Swiper(".swiper", {
  on: {
    slideChange: function() {
      console.log("現在のスライド: " + (this.realIndex + 1));
    },
  },
});
```

:::info
`this.realIndex` は、ループを考慮した実際のスライドのインデックス（0から始まる）を返します。表示上は1から始める方が自然なので、`+ 1` しています。
:::

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">スライド1</div>
    <div class="swiper-slide">スライド2</div>
    <div class="swiper-slide">スライド3</div>
    <div class="swiper-slide">スライド4</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

<CodePreview
  sourceId="演習7-発展3"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  consoleVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">スライド1</div>
      <div class="swiper-slide">スライド2</div>
      <div class="swiper-slide">スライド3</div>
      <div class="swiper-slide">スライド4</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 220px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightblue;
    font-size: 26px;
  }`}
  initialJS={`// スライド切り替え時にログ出力
  let swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function() {
        console.log("現在のスライド: " + (this.realIndex + 1));
      },
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習7-発展3"/>
</Solution>
</Exercise>

---

<Exercise title="演習7-発展4">
次のHTMLに対して、JavaScriptで以下の設定をしたSwiperを作成せよ。

- 一度に1つのスライドを表示
- 自動再生（5秒ごと）
- ループ再生を有効
- ページネーションを表示（分数形式で表示）
- ナビゲーションボタンを表示

ページネーションを分数形式（1/5のような表示）にするには、`pagination` オプションに `type: "fraction"` を追加します。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">写真1</div>
    <div class="swiper-slide">写真2</div>
    <div class="swiper-slide">写真3</div>
    <div class="swiper-slide">写真4</div>
    <div class="swiper-slide">写真5</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>
```

<CodePreview
  sourceId="演習7-発展4"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">写真1</div>
      <div class="swiper-slide">写真2</div>
      <div class="swiper-slide">写真3</div>
      <div class="swiper-slide">写真4</div>
      <div class="swiper-slide">写真5</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 240px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightgreen;
    font-size: 28px;
  }`}
  initialJS={`// 自動再生、ループ、分数形式のページネーション、ナビゲーション
  let swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習7-発展4"/>
</Solution>
</Exercise>

---

<Exercise title="演習7-発展5">
次のHTMLに対して、JavaScriptで以下の設定をしたSwiperを作成せよ。

- 一度に3つのスライドを表示
- スライド間の余白は20px
- 自動再生（2秒ごと）
- ループ再生を有効
- ページネーションを表示（プログレスバー形式）
- スライドが切り替わったときに、現在のスライド番号をコンソールに出力

ページネーションをプログレスバー形式にするには、`pagination` オプションに `type: "progressbar"` を追加します。

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
    <div class="swiper-slide">4</div>
    <div class="swiper-slide">5</div>
    <div class="swiper-slide">6</div>
    <div class="swiper-slide">7</div>
    <div class="swiper-slide">8</div>
    <div class="swiper-slide">9</div>
  </div>
  <div class="swiper-pagination"></div>
</div>
```

<CodePreview
  sourceId="演習7-発展5"
  htmlVisible={true}
  jsVisible={false}
  previewVisible={true}
  consoleVisible={true}
  initialHTML={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">2</div>
      <div class="swiper-slide">3</div>
      <div class="swiper-slide">4</div>
      <div class="swiper-slide">5</div>
      <div class="swiper-slide">6</div>
      <div class="swiper-slide">7</div>
      <div class="swiper-slide">8</div>
      <div class="swiper-slide">9</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>`}
  initialCSS={`.swiper {
    width: 100%;
    height: 240px;
  }
  .swiper-slide {
    display: grid;
    place-items: center;
    background-color: lightcoral;
    font-size: 32px;
    color: white;
  }`}
  initialJS={`// 3つ表示、余白20px、自動再生、ループ、プログレスバー、イベント
  let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    on: {
      slideChange: function() {
        console.log("現在のスライド: " + (this.realIndex + 1));
      },
    },
  });`}/>

<Solution>
<CodePreview sourceId="演習7-発展5"/>
</Solution>
</Exercise>
