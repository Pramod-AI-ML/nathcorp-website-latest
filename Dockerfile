# 1) Build stage
FROM node:20 AS base
WORKDIR /app

# install pnpm
RUN npm i -g pnpm

# install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# copy source & build
COPY . .
RUN pnpm build

# 2) Production image
FROM node:20-alpine3.19 AS release
WORKDIR /app

# install pnpm
RUN npm i -g pnpm

# copy just what's needed
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next       ./.next
COPY --from=base /app/public      ./public   

# (optional) expose the port your Next.js app listens on
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

# start Next.js in production mode
CMD ["pnpm", "start"]
