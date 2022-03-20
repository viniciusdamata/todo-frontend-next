FROM node:16-alpine as deps

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent

FROM node:16-alpine as builder

ARG NEXT_PUBLIC_TODO_API_URL
ENV NEXT_PUBLIC_TODO_API_URL=$NEXT_PUBLIC_TODO_API_URL

WORKDIR /usr/app

RUN echo $NEXT_PUBLIC_TODO_API_URL
COPY next.config.js ./
COPY tsconfig.json ./
COPY next-env.d.ts ./
COPY src ./src
COPY public ./public
COPY package.json ./
COPY --from=deps /usr/app/node_modules ./node_modules

RUN npm run build


FROM node:16-alpine as release

WORKDIR /usr/app

COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json

EXPOSE 3000


CMD ["npm", "start"]