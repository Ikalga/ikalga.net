FROM node:22-bookworm

# node:22 同梱の npm 10.9.8 は依存解決で "Cannot read properties of null (reading 'edgesOut')"
# が発生するため、npm 11 系を使う。CI（.github/workflows/deploy.yml）とバージョンを揃えること。
RUN npm install -g npm@11.18.0

# node_modules 用の名前付きボリュームが node ユーザー所有で初期化されるようにする。
# （ボリューム作成時にイメージ側のディレクトリの所有者が引き継がれる）
RUN mkdir -p /workspace/node_modules && chown -R node:node /workspace

USER node
WORKDIR /workspace
