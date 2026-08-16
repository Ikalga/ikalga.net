# ikalga.net

ポートフォリオwebページ

要件は [docs/requirements.md](docs/requirements.md) を参照。

## 技術スタック

Nuxt 4 / Vue 3 / TypeScript / Tailwind CSS v4 / Nuxt Content

## 開発環境

Dev Container で開発する。ローカルに必要なのは Docker と VS Code（Dev Containers 拡張）のみ。

1. VS Code でリポジトリを開く
2. コマンドパレットから **Dev Containers: Reopen in Container** を実行
3. 初回はコンテナのビルドと `npm install` が自動で走る

コンテナ内で以下を実行する。

```bash
npm run dev        # 開発サーバー (http://localhost:3000)
npm run generate   # 静的サイトを .output/public に生成
npm run preview    # 生成結果をプレビュー
npm run lint       # ESLint
npm run typecheck  # 型チェック
npm run format     # Prettier で整形
```

### Dev Container を使わない場合

Node.js 22 と npm 11 系が必要。Node 22 同梱の npm 10 は依存解決に失敗するため、
`npm install -g npm@11.18.0` でバージョンを上げてから `npm install` を実行する。

## デプロイ

`main` ブランチへの push で GitHub Actions が静的サイトを生成し、GitHub Pages へデプロイする
（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。

公開先の設定:

- **独自ドメイン（ikalga.net）で公開する場合** — 追加設定は不要
- **`<user>.github.io/<repo>/` で公開する場合** — リポジトリ変数 `NUXT_APP_BASE_URL` に `/<repo>/` を設定する
