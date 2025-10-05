---
sidebar_position: 1
title: 導入
---

import Exercise, { Solution } from '@kodai-yamamoto-siw/exercise/client';
import { CodePreview } from '@kodai-yamamoto-siw/code-preview';

## JavaScript とは？

たくさんある プログラミング言語（コンピュータの動作を記述したもの） の中の一つ。

プログラミング言語の例：C, C++, Java, JavaScript, PHP, Ruby, Python, ……


:::info
#### JavaScriptの例

<CodePreview initialJS={`function popRow(field, rowIndex) {
    for (let i = rowIndex - 1; i >= 0; i--) {
        field[i + 1] = field[i];
    }
    field[0] = ["　", "　", "　", "　", "　", "　", "　"];
}

function popAlignedRows(field) {
    for (let i = 0; i < field.length; i++) {
        const row = field[i];
        if (isAlignedRow(row)) {
            popRow(field, i);
        }
    }
}`}/>
:::

---


## JavaScript を学ぶと何ができるのか

- ブラウザで動作する系
    - _Webページの一部分に動きをつける_
        - この授業で扱う（後で詳しく）
        - _JavaScript は、元々この用途で使うために作られた言語だった_
    - Webページのほぼ全体をJavaScriptで生成する（シングルページアプリケーション）
        - 例：Facebook、X、YouTube、Teams（Web版）
- インストールして動作する系（モバイルアプリ、デスクトップアプリ開発）
    - 例：Discord、Microsoft Teams、Amazon Kindle

### Webページの一部分に動きをつける例
- フォームのエラーチェック
    - 例：電話番号の入力エラー、メールアドレスの入力エラー
- さいたまIT・WEB専門学校トップページ（ [公式サイト](https://www.siw.ac.jp/) ）
    - 例：メニューの表示/非表示の切り替え、スライダーの作成

---

## インストール作業

「授業を受けるために必要な環境」の資料を見る

---

## フォルダ・ファイルの作成

### ファイル・フォルダとは？
- ファイル: 1 つの データ のこと（画像、動画、音楽のデータなど）
- フォルダ: ファイルやフォルダをまとめて整理するための箱 のこと

#### わりとシンプルな例
![わりとシンプルな例](/img/introduction/folder-structure-simple.png)

#### ややこしめな例
![ややこしめな例](/img/introduction/folder-structure-complex.png)


:::caution
ファイルやフォルダがぐちゃぐちゃだとファイルが紛失します。適切に管理しましょう。
:::


### フォルダの階層構造を見やすくするために、パスバーを表示
1. Finder を起動する
   
    ![Finderを起動する](/img/introduction/pathbar-toggle-1.png)
2. 上部のメニューから、[表示] > [パスバーを表示]を押す。
   
    ![パスバーを表示を選択](/img/introduction/pathbar-toggle-2.png)


#### ファイル名・フォルダ名の注意点
- ファイル名、フォルダ名に絶対に使ってはいけない文字：「/」（スラッシュ）
- ファイル名、フォルダ名で区切りを入れるときによく使われる文字：「-」（ハイフン）、 「_」（アンダースコア）

### VSCode でフォルダを開く
![VSCodeへドラッグ&ドロップ1](/img/introduction/vscode-drag-and-drop-1.png)
![VSCodeへドラッグ&ドロップ2](/img/introduction/vscode-drag-and-drop-2.png)



### ファイル名の構成
![ファイル名の構成の例](/img/introduction/filename-composition.png)
例：`index.html`、`main.js`、`report.pdf`

#### 拡張子の例
ドット以降の部分を「拡張子」といいます。ファイルの種類を表します。

| 拡張子 | 種類 |
| :-: | :-: |
| .docx | (最近の)Microsoft Office Word文書 |
| .pdf | PDF文書 |
| **.html** | **HTMLファイル** |
| **.js** | **JavaScript ファイル** |

### HTMLファイルを作成

![HTML作成1](/img/introduction/create-html-1.png)
![HTML作成2](/img/introduction/create-html-2.png)

#### HTMLファイルを記述

![HTML作成3](/img/introduction/create-html-3.png)

すると、次の内容が自動入力される：

<CodePreview initialHTML={`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`}/>


## HTMLの概略
HTMLはWebページを作るための言語です。

### タグとは？
タグとは `<` と `>` で囲まれた部分（`<!DOCTYPE html>` は除く）のこと。
![HTMLタグ](/img/introduction/html-tag.png)

### 開始タグ・終了タグとは？
- 開始タグ： `<…>` の形（先頭にスラッシュがない）
- 終了タグ： `</…>` の形（先頭にスラッシュがある）
![HTML開始タグ・終了タグ](/img/introduction/html-starttag-endtag.png)
### タグ名とは？
`<〇〇 ...>` または `</〇〇>` の 〇〇 の部分
例：`html`, `head`, `meta`, `title`, `body`
![タグ名の例](/img/introduction/html-tagname.png)

### 要素とは？
同じタグ名をもつ開始タグ～終了タグのひとかたまり（終了タグのない要素もある）
![同じタグ名をもつ開始タグ～終了タグのひとかたまりが要素](/img/introduction/html-element.png)
![要素とは](/img/introduction/html-elements.gif)

## JavaScript を書く
1. head要素の中にscript要素を書く。
![head要素の中にscript要素を書く](/img/introduction/write-script-in-html-head.png)

2. script要素の中に JavaScript のコードを書く。
![head要素の中にscript要素を書く](/img/introduction/write-js-in-script.png)

結果こうなっていればOK：

<CodePreview initialHTML={`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        console.log("こんにちは");
    </script>
</head>
<body></body>
</html>`}/>

## インデント
コードの左の方に書いた余白のことを「 インデント 」という。
![インデント](/img/introduction/html-indent.png)


次のキーでインデントの追加/削除ができる

| キー | 動作 | 覚え方 |
| :-: | :-: | :-: |
| Tab | インデントの追加 | ない |
| Shift + Tab | インデントの削除 | Tabの逆（Shift が逆を表すことが多い） |

![インデントの入力方法](/img/introduction/indent-key-input.png)

## 保存する

タブのファイル名の横に黒丸（●）がついているときは、 _保存されていない状態_

次のキーで保存できる。

![保存のショートカット](/img/introduction/unsaved-icon.png)

| キー | 動作 | 覚え方 |
| :-: | :-: | :-: |
| Cmd + S | 保存 | S は Save(保存) の頭文字 |

![保存アイコン](/img/introduction/save-key-input.png)

## 動作確認

1. Opt + B を押す
2. 起動した Chrome 上で [右クリック] → [検証] を押す

![検証を開く1](/img/introduction/open-devtools-1.png)

3. [コンソール] タブを開く
![検証を開く2](/img/introduction/open-devtools-2.png)

4. 「こんにちは」が表示されているのが確認できる（打ち間違いがある場合はここでエラーを確認できる）

### 成功例
![コンソール確認1](/img/introduction/console-output-1.png)

### 失敗例
![コンソール確認2](/img/introduction/console-output-2.png)

## 実行順序


プログラムは、上から順番に実行されます。

<CodePreview initialJS={`console.log("あああ");
console.log("いいい");
console.log("ううう");`}/>

上記のプログラムを実行すると、次のような順序で表示されます。

![実行順序の図](/img/introduction/execution-order.png)

## 文字列

文字列の表現方法（ _文字列リテラル_ ）

ダブルクォート（"）で囲む場合：
`"こんにちは"`

シングルクォート（'）で囲む場合：
`'こんにちは'`

どちらの書き方でも、動作結果は変わらない。

---

<Exercise title="演習1">

「おはよう」「こんにちは」「さようなら」の3つを出力せよ。
![コンソールの画像](/img/introduction/exercise-1.png)

<Solution>

<CodePreview initialHTML={`<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        console.log("おはよう");
        console.log("こんにちは");
        console.log("さようなら");
    </script>
</head>

<body>
</body>

</html>`}/>

</Solution>

</Exercise>

<Exercise title="演習1-発展">

「ダブルクォート(“)」「シングルクォート(‘)」の2つを次の画面のように出力せよ。
![コンソールの画像](/img/introduction/exercise-1-advanced.png)

<Solution>

<CodePreview initialHTML={`<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        console.log('"'); // ダブルクォートをシングルクォートで挟めば出力できる
        console.log("'"); // シングルクォートをダブルクォートで挟めば出力できる
    </script>
</head>

<body>
</body>

</html>`}/>

</Solution>

</Exercise>
