---
title: モーダルウィンドウ (Remodal)
---

import Exercise, { Solution } from "@kodai-yamamoto-siw/exercise/client";
import { CodePreview } from "@kodai-yamamoto-siw/code-preview";

## 今日の学習はこんなところで使うよ

今日は、モーダルウィンドウ（ポップアップ）を実装してみましょう。
実際のウェブサイトでは、「お知らせの表示」「画像の拡大表示」「入力フォーム」「確認ダイアログ」などで広く使われています。

実際に使われていそうなサイトの例（代表例）:

- Amazon（商品詳細の画像拡大表示）: https://www.amazon.co.jp/
  - 使われる箇所: 商品画像をクリック → モーダルで拡大表示
- 楽天市場（ログインフォーム）: https://www.rakuten.co.jp/
  - 使われる箇所: ログインボタンをクリック → モーダルでログインフォームが表示

以下は、完成イメージです。「開く」ボタンをクリックすると、モーダルウィンドウが表示されます。

<CodePreview
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="modal">モーダルを開く</button>

  <div class="remodal" data-remodal-id="modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>モーダルウィンドウ</h2>
    <p>これはモーダルウィンドウの内容です。</p>
    <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
  </div>`}
  initialCSS={``}
  initialJS={``}
/>

---

## この章の進め方（ライブラリを使ってみよう）

モーダルウィンドウを純粋な HTML、CSS、JavaScript だけで自力で作るのは、とても難しいです。
そこで、**「ライブラリ」** と言って、どこかの誰かが作ってくれたものを使いましょう。

実務では、誰かが作ってくれたものを借りて使って、目的を達成するということがよくあります。
今日は、この「誰かが作ってくれたライブラリ」をドキュメントを見ながら使うという体験をしましょう。

今回使用するライブラリは「Remodal」という、モーダルウィンドウを簡単に実装できる jQuery プラグインです。

- まず公式サイトをざっと眺める: http://vodkabears.github.io/remodal/
- GitHub リポジトリ: https://github.com/VodkaBears/Remodal
- 検索キーワード例:
  - 「Remodal 使い方」,「Remodal 始め方」
  - 「Remodal jQuery」,「Remodal modal」

以下の演習は、Remodal の使い方を自分で調べて解いてください。

---

<Exercise title="演習1（基本のモーダル）">
ボタンをクリックするとモーダルウィンドウが開く、次のプレビューのようなモーダルを作成して下さい。

<CodePreview
  sourceId="演習1_基本"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="modal1">開く</button>

  <div class="remodal" data-remodal-id="modal1">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>こんにちは</h2>
    <p>これは基本のモーダルウィンドウです。</p>
  </div>`}
  initialCSS={``}
  initialJS={``}
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

<Exercise title="演習2（OKボタンとキャンセルボタン）">
ボタンをクリックするとモーダルウィンドウが開く、次のプレビューのようなモーダルを作成して下さい。

- モーダル内に「OK」ボタンと「キャンセル」ボタンを配置する。
- 右上の×ボタンでも閉じられるようにする。

<CodePreview
  sourceId="演習2_OKキャンセル"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="modal2">確認ダイアログを開く</button>

  <div class="remodal" data-remodal-id="modal2">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>確認</h2>
    <p>本当に削除しますか？</p>
    <button data-remodal-action="cancel" class="remodal-cancel">キャンセル</button>
    <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
  </div>`}
  initialCSS={``}
  initialJS={``}
/>

<Solution>
<CodePreview
  sourceId="演習2_OKキャンセル"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>
</Solution>
</Exercise>

---

<Exercise title="演習3（画像ギャラリー風モーダル）">
画像をクリックするとモーダルウィンドウで拡大表示する、次のプレビューのようなモーダルを作成して下さい。

<CodePreview
  sourceId="演習3_画像ギャラリー"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <div style="text-align: center;">
    <button data-remodal-target="image-modal" style="font-size: 48px; border: none; background: none; cursor: pointer;">🌅</button>
  </div>

  <div class="remodal" data-remodal-id="image-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <div style="font-size: 200px; text-align: center;">🌅</div>
    <p style="text-align: center;">美しい夕日の風景</p>
  </div>`}
  initialCSS={``}
  initialJS={``}
/>

<Solution>
<CodePreview
  sourceId="演習3_画像ギャラリー"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>
</Solution>
</Exercise>

---

<Exercise title="演習3-発展1（JavaScriptでモーダルを制御）">
ボタンをクリックすると、JavaScript からモーダルを開く、次のプレビューのようなモーダルを作成して下さい。

- `data-remodal-target` 属性を使わず、JavaScript でモーダルを制御する。
- ボタンをクリックすると `open()` メソッドでモーダルを開く。

<CodePreview
  sourceId="演習3発展1_JavaScript制御"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button id="openBtn">JavaScript でモーダルを開く</button>

  <div class="remodal" data-remodal-id="js-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>JavaScript から開きました</h2>
    <p>この方法を使うと、より高度な制御が可能になります。</p>
    <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
  </div>`}
  initialCSS={``}
  initialJS={`$(function() {
    let modal = $('[data-remodal-id=js-modal]').remodal();
    
    $('#openBtn').on('click', function() {
      modal.open();
    });
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習3発展1_JavaScript制御"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `$('[data-remodal-id=js-modal]').remodal()` でモーダルのインスタンスを取得します。
- `modal.open()` でモーダルを開くことができます。
- この方法を使うことで、条件に応じてモーダルを開いたり、他の処理と組み合わせたりすることが可能になります。
</Solution>
</Exercise>

---

<Exercise title="演習3-発展2（イベントハンドラで処理を実行）">
モーダルが開いた時・閉じた時にコンソールにメッセージを表示する、次のプレビューのようなモーダルを作成して下さい。

- モーダルが開いた時に「モーダルが開きました」とコンソールに表示する。
- モーダルが閉じた時に「モーダルが閉じました」とコンソールに表示する。

<CodePreview
  sourceId="演習3発展2_イベント"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="event-modal">モーダルを開く</button>

  <div class="remodal" data-remodal-id="event-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>イベントのテスト</h2>
    <p>開発者ツールのコンソールを確認してください。</p>
    <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
  </div>`}
  initialCSS={``}
  initialJS={`$(document).on('opened', '.remodal', function() {
    console.log('モーダルが開きました');
  });

  $(document).on('closed', '.remodal', function() {
    console.log('モーダルが閉じました');
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習3発展2_イベント"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- Remodal は様々なイベントを提供しています。
- `opened` イベントはモーダルが完全に開いた後に発火します。
- `closed` イベントはモーダルが完全に閉じた後に発火します。
- これらのイベントを利用することで、モーダルの開閉に合わせて様々な処理を実行できます。
- 例: アナリティクスの記録、データの読み込み、フォームのリセットなど。
</Solution>
</Exercise>

---

<Exercise title="演習3-発展3（確認・キャンセルの判定）">
ユーザーが「OK」を押したか「キャンセル」を押したかを判定し、それぞれ異なるメッセージをコンソールに表示する、次のプレビューのようなモーダルを作成して下さい。

- 「OK」ボタンをクリックした時は「確認されました」とコンソールに表示する。
- 「キャンセル」ボタンをクリックした時は「キャンセルされました」とコンソールに表示する。

<CodePreview
  sourceId="演習3発展3_確認キャンセル判定"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="confirm-modal">削除確認ダイアログを開く</button>

  <div class="remodal" data-remodal-id="confirm-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>確認</h2>
    <p>本当にこのファイルを削除しますか？</p>
    <p style="font-size: 12px; color: #666;">開発者ツールのコンソールを確認してください。</p>
    <button data-remodal-action="cancel" class="remodal-cancel">キャンセル</button>
    <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
  </div>`}
  initialCSS={``}
  initialJS={`$(document).on('confirmation', '.remodal', function() {
    console.log('確認されました');
  });

  $(document).on('cancellation', '.remodal', function() {
    console.log('キャンセルされました');
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習3発展3_確認キャンセル判定"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- `confirmation` イベントは、確認ボタン（`data-remodal-action="confirm"`）がクリックされた時に発火します。
- `cancellation` イベントは、キャンセルボタン（`data-remodal-action="cancel"`）がクリックされた時に発火します。
- これらのイベントを使うことで、ユーザーの選択に応じて異なる処理を実行できます。
- 実際の開発では、削除処理の実行、フォームの送信、API呼び出しなどに利用されます。
</Solution>
</Exercise>

---

<Exercise title="演習3-発展4（複数のモーダルを連続表示）">
最初のモーダルで「次へ」ボタンをクリックすると、そのモーダルを閉じて次のモーダルを開く、次のプレビューのようなモーダルを作成して下さい。

- 最初のモーダルには「次へ」ボタンを配置する。
- 「次へ」ボタンをクリックすると、最初のモーダルが閉じて2番目のモーダルが開く。
- 2番目のモーダルには「完了」ボタンを配置する。

<CodePreview
  sourceId="演習3発展4_連続モーダル"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="step1-modal">ステップ形式のモーダルを開始</button>

  <div class="remodal" data-remodal-id="step1-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>ステップ1</h2>
    <p>これは最初のステップです。</p>
    <button id="nextBtn" class="remodal-confirm">次へ</button>
  </div>

  <div class="remodal" data-remodal-id="step2-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>ステップ2</h2>
    <p>これは2番目のステップです。</p>
    <button data-remodal-action="confirm" class="remodal-confirm">完了</button>
  </div>`}
  initialCSS={``}
  initialJS={`$(function() {
    let modal1 = $('[data-remodal-id=step1-modal]').remodal();
    let modal2 = $('[data-remodal-id=step2-modal]').remodal();
    
    $('#nextBtn').on('click', function() {
      modal1.close();
      setTimeout(function() {
        modal2.open();
      }, 300);
    });
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習3発展4_連続モーダル"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- 複数のモーダルインスタンスを取得し、それぞれを制御します。
- `close()` メソッドで最初のモーダルを閉じ、`setTimeout()` で少し待ってから2番目のモーダルを開きます。
- `setTimeout()` を使う理由は、アニメーションが完了するまで待つためです（300ミリ秒 = 0.3秒）。
- この手法は、ウィザード形式の入力フォームやチュートリアルなどで使われます。
</Solution>
</Exercise>

---

<Exercise title="演習3-発展5（カスタムスタイルのモーダル）">
背景色やボタンの色をカスタマイズした、次のプレビューのようなモーダルを作成して下さい。

- モーダルの背景色を変更する。
- ボタンの色をカスタマイズする。
- CSS でスタイルをカスタマイズする。

<CodePreview
  sourceId="演習3発展5_カスタムスタイル"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="custom-modal">カスタムスタイルのモーダルを開く</button>

  <div class="remodal custom-modal" data-remodal-id="custom-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>カスタムモーダル</h2>
    <p>背景色とボタンの色がカスタマイズされています。</p>
    <button data-remodal-action="cancel" class="remodal-cancel">キャンセル</button>
    <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
  </div>`}
  initialCSS={`.custom-modal {
    background-color: #2c3e50;
    color: white;
  }

  .custom-modal h2 {
    color: #ecf0f1;
  }

  .custom-modal .remodal-confirm {
    background-color: #27ae60;
    color: white;
  }

  .custom-modal .remodal-confirm:hover {
    background-color: #229954;
  }

  .custom-modal .remodal-cancel {
    background-color: #95a5a6;
    color: white;
  }

  .custom-modal .remodal-cancel:hover {
    background-color: #7f8c8d;
  }`}
  initialJS={``}
/>

<Solution>
<CodePreview
  sourceId="演習3発展5_カスタムスタイル"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- モーダルに独自のクラス（`custom-modal`）を追加し、CSS でスタイルをカスタマイズします。
- 背景色、テキスト色、ボタンの色などを自由に変更できます。
- `:hover` 疑似クラスを使って、ホバー時の色も設定できます。
- これにより、サイトのデザインに合わせたモーダルを作成できます。
- ブランドカラーを反映させたり、用途に応じて色を変えたりすることが可能です。
</Solution>
</Exercise>

---

<Exercise title="演習3-発展6（フォーム入力値の受け取り）">
モーダル内にテキスト入力欄を配置し、「OK」ボタンをクリックした時に入力値をコンソールに表示する、次のプレビューのようなモーダルを作成して下さい。

- モーダル内に名前を入力するテキストボックスを配置する。
- 「OK」ボタンをクリックした時、入力された名前をコンソールに表示する。
- 入力が空の場合は、警告メッセージを表示する。

<CodePreview
  sourceId="演習3発展6_フォーム入力"
  htmlVisible={false}
  cssVisible={false}
  jsVisible={false}
  previewVisible={true}
  initialHTML={`<!-- これを head 内に入れて -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"></script>

  <!-- これを body 内に入れて -->
  <button data-remodal-target="form-modal">名前入力フォームを開く</button>

  <div class="remodal" data-remodal-id="form-modal">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h2>名前を入力してください</h2>
    <input type="text" id="nameInput" placeholder="名前を入力" style="width: 100%; padding: 8px; margin: 10px 0; box-sizing: border-box;">
    <p id="warningMsg" style="color: red; display: none;">名前を入力してください。</p>
    <p style="font-size: 12px; color: #666;">開発者ツールのコンソールを確認してください。</p>
    <button data-remodal-action="cancel" class="remodal-cancel">キャンセル</button>
    <button id="submitBtn" class="remodal-confirm">OK</button>
  </div>`}
  initialCSS={``}
  initialJS={`$(function() {
    let modal = $('[data-remodal-id=form-modal]').remodal();
    
    $('#submitBtn').on('click', function(e) {
      let name = $('#nameInput').val().trim();
      
      if (name === '') {
        e.preventDefault();
        $('#warningMsg').show();
      } else {
        $('#warningMsg').hide();
        console.log('入力された名前: ' + name);
        $('#nameInput').val('');
      }
    });
    
    $(document).on('opened', '[data-remodal-id=form-modal]', function() {
      $('#nameInput').val('');
      $('#warningMsg').hide();
    });
  });`}
/>

<Solution>
<CodePreview
  sourceId="演習3発展6_フォーム入力"
  htmlVisible={true}
  cssVisible={true}
  jsVisible={true}
  previewVisible={true}
/>

**解説**:
- モーダル内に入力フォームを配置し、ユーザーからの入力を受け取ります。
- `e.preventDefault()` を使って、入力が空の時はモーダルを閉じないようにします。
- `trim()` メソッドで前後の空白を削除し、空白のみの入力を防ぎます。
- `opened` イベントでモーダルが開いた時に入力欄をリセットします。
- この手法は、ユーザー登録フォーム、コメント投稿、検索ボックスなどに応用できます。
</Solution>
</Exercise>
