# 베이스 이미지 명시
FROM node:10

RUN npm install

CMD ["node", "server.js"]