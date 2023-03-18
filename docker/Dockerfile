#부모 이미지 지정 //기존 이미지를 불러오는곳
FROM node:16
#작업 디렉토리 생성 컨테이너가돌아갈때 작업디렉토리 어디로할것인지../app에서 작업하겠다
WORKDIR /app
#소스 추가 //컨테이너 디렉토리안에 옮겨놓겠다 
COPY . /app 
#패키지 설치
RUN npm install
#포트 매핑  //도커이미지를돌릴때 어떤 포트를 사용할건지 
EXPOSE 8000
#실행 명령  //가장 최종적으로 실행되는 부분 
CMD [ "node", "index.js"]

# 터미널에 docker run --name node-project -p 8080:8000 node-project치기. 8080이 실제 접속하는 포트.8000이 기본 포트 