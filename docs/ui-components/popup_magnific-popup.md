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

