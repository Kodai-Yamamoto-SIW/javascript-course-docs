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

## 認証設定 (Microsoft Teams サインイン)

このサイトは `@kodai-yamamoto-siw/docusaurus-microsoft-auth` プラグインを通じて Microsoft Teams / Microsoft 365 アカウントでのサインインを必須としています。事前に Azure ポータルでアプリ登録を作成し、以下の環境変数を設定してください。

1. Azure portal → Microsoft Entra ID → アプリの登録 から新しいアプリを作成し、`http://localhost:3000` (or 開発用 URL) をリダイレクト URI (Web) として追加します。
2. アプリケーション (クライアント) ID とディレクトリ (テナント) ID を控えます。
3. `.env.example` を `.env` にコピーして値を書き換えます。

`.env` に設定する例:

```bash
DOCUSAURUS_MICROSOFT_CLIENT_ID=<アプリケーション (クライアント) ID>
DOCUSAURUS_MICROSOFT_TENANT_ID=<ディレクトリ (テナント) ID>
DOCUSAURUS_MICROSOFT_AUTHORITY_HOST=https://login.microsoftonline.com
DOCUSAURUS_MICROSOFT_REDIRECT_URI=http://localhost:3000
DOCUSAURUS_MICROSOFT_POST_LOGOUT_REDIRECT_URI=http://localhost:3000
DOCUSAURUS_MICROSOFT_SCOPES=User.Read
```

- `AUTHORITY_HOST` を省略すると `https://login.microsoftonline.com` が使われます。
- `REDIRECT_URI` と `POST_LOGOUT_REDIRECT_URI` を省略すると現在のサイトの URL が使われます（GitHub Pages では `https://<your-account>.github.io/javascript-course-docs/`）。
- 追加の Graph API 権限が必要な場合は `DOCUSAURUS_MICROSOFT_SCOPES` にカンマ区切りでスコープを設定してください。
- 本番環境でも同じ環境変数を設定し、リダイレクト URI をホスティング URL に合わせて更新してください。

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
