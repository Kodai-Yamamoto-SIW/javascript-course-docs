# ウェブサイト

このウェブサイトは、モダンな静的ウェブサイトジェネレーターである [Docusaurus](https://docusaurus.io/) を使用して構築されています。

## インストール

```bash
npm install
```

## ローカル開発

```bash
npm run start
```

これにより、Docusaurusの開発サーバーとnpm依存としてインストールされた`@kodai-yamamoto-siw/workspace-launch-server` が同時に起動します。ブラウザが自動的に開き、バックエンドのエンドポイント（例: `/manifest`）がポート8787で利用可能になります。

ドキュメントUIのみが必要ですか？`npm run start:docusaurus`を実行してください。APIのみが必要ですか？`npm run server`を実行してください（内部的に`workspace-launch-server`バイナリを実行します）。

## ビルド

```bash
npm run build
```

このコマンドは、`build`ディレクトリに静的コンテンツを生成し、任意の静的コンテンツホスティングサービスを使用して提供できます。

## デプロイ

SSHを使用する場合:

```bash
USE_SSH=true npm run deploy
```

SSHを使用しない場合:

```bash
GIT_USER=<あなたのGitHubユーザー名> npm run deploy
```

GitHub Pagesをホスティングに使用している場合、このコマンドはウェブサイトをビルドし、`gh-pages`ブランチにプッシュする便利な方法です。
