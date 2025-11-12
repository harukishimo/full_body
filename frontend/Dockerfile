# 開発用（compose 専用）。本番は別Dockerfileを作る想定
FROM node:20-slim

# 必要なら追加のOSライブラリ（sharp等のネイティブ依存が出たら解放）
# RUN apt-get update -qq && apt-get install -y --no-install-recommends \
#     libc6 libstdc++6 python3 make g++ && \
#     rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 依存解決をキャッシュさせるため、先にマニフェストだけコピー
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# パッケージマネージャは project に合わせて1つだけ有効化
# npm
RUN if [ -f package-lock.json ]; then npm ci; fi
# pnpm
# RUN corepack enable && if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; fi
# yarn
# RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; fi

# ソースはホストからマウントする前提。ビルドに必要なら下でコピー
# COPY . .

EXPOSE 3000

# compose 側で `command: npm run dev` を指定しているので CMD は空でOK
# ここで指定したい場合は↓を有効化
# CMD ["npm", "run", "dev"]
