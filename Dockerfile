# 베이스 이미지 명시
FROM node:10

COPY ./ ./

# 추가적으로 필요한 파일들을 다운 받음
RUN npm install

# 실행할 명령어
CMD ["node", "server.js"]

