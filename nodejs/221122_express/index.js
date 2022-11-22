const express = require("express");
const app = express();
const port = 8080;
// 모듈불러오는 세줄 맨위

app.set('view engine', 'ejs')
// 셋도 설정부분이라 위쪽으로 쓰는게좋음 
// app.use( express.static("static"));
// // src="/img/cat.jpg" 이건 바로접근하는 법.

// app.use("/public", express.static("static"));
// // static이라는 실제 존재하는 폴더에 public(가상)경로로 접근할 수 있도록 함
// // src="/public/img/cat.jpg" 클라이언트가 접속할 주소.. 

app.use(express.urlencoded({ extended: true }));// 이건 body-parser쓸때 쓰는 두줄!외우기. 윗줄은 x-www-urlencoded 데이터 해석을 하겠다 
app.use(express.json());// 아랫줄은 클라이언트한테 받는정보를 제이늣형태로 받아올거다. json:딕셔너리형태와 비슷 
// {
//     key:value
// }
// app.use코드 는 앱겟이든 앱포스트든 그 위로 올라와야됨 

app.use("/static", express.static("static"));

// localhost:8080
app.get('/', (req, res) => {
    res.send("hello express");
})

// localhost:8080/test
app.get('/test', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})


// local host:8080/ejs
app.get('/ejs', (req, res) => {
    res.render("index", {
        title: "index 페이지 입니다.",
        data: ["a", "b", "c"]
    });
})

app.get('/ejs', (req, res) => {
    res.render("index");
})


app.get("/form", (req, res) => {
    res.render("form");
})
// 이건 겟폼 ejs여는 포트


// app.get("/getForm", (req, res) => {
//     console.log(req.query);
//     res.send("get 요청 성공!");
// })
// 위에거랑 짝임.정보전송받으면 주소가 form에서getform으로바뀐다. for action그것때문임 ejs에있는. 클라이언트가 서버측에보내는 요청이 req고 그 객체안에 query가 있음 주소뒤물음표뒤에있는게 query임

app.get("/getForm", (req, res) => {
    console.log(req.query);
    res.send("get 요청 성공!");
})

// app.post("/postForm", (req, res) => {
//     console.log(req.body);
//     res.send("post 요청 성공!");
// })
// 밑에거랑 같은데 방식다른거임. 

app.post("/postForm", (req, res) => {
    console.log(req.body);
    res.render("result", { data: req.body });
})
// 이것도 위위에거랑 짝임 이건 포스트요청. 포스트요청은 req.바디에 정보를 받아온다. 위에 겟요청은 쿼리에 정보를 받아온다.
// 겟요청은 사람이 폼을 통하지 않고 뒤에 getForm치고 주소쳐서 직접 들어올수있는데 포스트요청은 안됨 겟요청은
// http://localhost:8080/getForm?id=aaa&pw=1234이렇게 직접치고들어가면 터미널에 정보가 들어옴 ㄷㄷ근데 포스트요청은 http://localhost:8080/postForm이렇게하면
// 안들어가짐 ..url로 뭘 치고들어가는건 전부 겟요청이라는 뜻임!클라이언트가 서버측에보내는 요청중에 하나임 

//밑에건 실습 
app.get("/form2", (req, res) => {
    res.render("form2");
})
app.get("/getForm2", (req, res) => {
    console.log(req.query);
    res.send("get 요청 성공!");
})

// 위에두개를꼭 짝으로만들어야되는건아닌데, form2파일에 action으로 설정했으니까 무슨값을받겟다 실행하겠다는뜻이니까 밑에줄(결과물나오는화면)도 만드는거임

app.get("/postForm2", (req, res) => {
    res.render("form3");
})
app.post("/Form3", (req, res) => {
    console.log(req.body);
    res.send("post 요청 성공!");
})

// 첨엔 주소타고들어가야돼서 get으로 만들어야됨 포스트요청하더라도. 
app.listen(port, () => {
    console.log("server open :", port);
})
// 서버를 여는코드인 리슨은 젤 마지막에 열어주는게 좋음.설정을 다 한다음에 서버를 열어야되기때문임. 이 코드밑으로 적으면 설정적용이안됨.


// 1.익스프레스모듈불러움
// 2.express모듈가져와서 객체로만드는거임 express(); 익스프레스함수가져와서 앱이라는 객체만든거임 app이라는곳에 담는다.
// 1번2번이 익스프레스만드는기본코드니까 외우셈.
// 3번 포트는 1023이하로는 하면안되고 나머지중에서 고르셈.보통8080,3000이런거.
// 25번 리슨이라는 메소드는 첫번재, 포트라는 인자랑, 함수가들어감.
// 26번 몇번포트로 열었는지까지 콘솔로그로찍음 앞에 7줄 다외우셈. 터미널에 node index.js치면 나옴//이건 서버를열기만한거임.

// 16번. 이걸보여줄거야하는코드. get이라는 메소드. 어떤 요청을 처리해준다
// 겟안에 '/'기본주소가 인자로. localhost:8080/  기본주소로 보여주고싶다하면 슬래시만치면되고
// localhost:8080/test주소 보여주고싶으면 인자를  ('/test')로 바꿔야됨
// 16번에 두버너째함수에는 매개변수가 필요함 무조건. req랑res
// res라는객체를타고 보여주고픈 send라는 메시지를쓸거임 17번.  17번째줄에있는게 서버들어가서 뭘할건지를 보여주는거임.브라우저상에서.
// res는 response의 약자고 서버가 클라이언트측에보내는 응답임. server to client다!! req는 클라이언트가 서버측에 보내는 요청이다.clien to server.
// send라는 메소드가 서버가 클라이언트한테 어떤 메시지를 응답으로보내겠다는 메소드임. 8080접속하면 헬로익스프레스보게됨!서버수정하면
// 컨트롤씨누르고 껏다가 다시켜야 웹주소에 localhost:8080쳤을때 반영됨 node index.js써서 다시켜고 localhost:8080가면 수정반영됨
// 21번에 테스트라는 새로운 라우터 열어서 http://localhost:8080/test 여기들어가서 잘 나오나 확인! 이렇게 익스프레스사용해서 웹서버를 구축합니당
// 22번 센드파일안에 절대경로입력 근데 __dirname이라고 쳐주면 기본으로 지정돼있는 변수이기때문에 알아서 여기에 담겨있음 __dirname이라는게 현재 인덱스점html이 위치해있는
// 폴더경로가 담겨있다는 뜻임.. __dirname: c:/~~~~//221122_express라고 담겨있을거임! 뷰스라는 폴더안에있으니까 /views/index.html이라고 씀
// 그럼 8080/test갔을때 html나와야됨. 근데 그상태로 html파일 수정하고 홈피 새고하면 바로반영됨.서버 껐다켜지않아도 됨!
// 백엔드파일인 index.js같은건 수정하먼 껏다켜줘야되는데 다른 파일이나 html파일들은 그냥 홈피 새고하면됨 그건 프엔언어라서.
// 9번 익스프레스안에잇는 스태틱이라는 매소드를찾아서 미들웨어등록하면됨(앱.use) 그 안에 인자두개를 넘겨준다. 스태틱메소드안에 쓴
// ("static")인자는 실제로 존재하는 폴더.  "/public"은 가상경로이기때문에 이 첫번째인자는 아무거나원하는거쓰면됨. 두번째인자인 express.static이건
// 꼭써줘야되고 그 안에 ("폴더이름") 즉 , app.use("/dfddff", express.static("폴더이름"));쓰면됨
// app.set('view engine', 'ejs') 나는 뷰엔진으로 ejs를쓸거다. 외워라! ejs를 엔진으로쓰겠다.views라는 폴더이름이 있어야됨.그 폴더가
// 뷰가 모여져있는 기본디렉토리가된거임 이제 views에다가 ejs파일들을 만들수있음. 뷰스가 기본 디렉토리로 설정된다 그래서 res.render("index");라고만쓰면됨
//index가 views폴더임
// 그래서 28번에 render라는 걸 쓸수있음. 저게 뷰엔진 설정돼있어서. 마약에 뷰스밑에 테스트폴더만들고 그밑에 테스트.ejs파일만들면
//  res.render("/test/test");라고 치면됨 res.render라는게 응답이오면 해당파일을 보여주겠다!라는뜻임.

app.get('/img', (req, res) => {
    res.render("index2");
})













// app.get('/img', (req, res) => {
//     res.render("index", {
//         file: ["1.png", "2.png" ]
//     });
// })배열로 가져오는법 