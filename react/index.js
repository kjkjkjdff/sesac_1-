//React 따라하기

function HellowWorldButton(){
    const [isClick, setClickState] = React.useState("It isn't clicked");
    console.log(isClick);
    //isclick이랑 set clilckstate라는 변수선언
       return React.createElement("button", {onClick: () => { setClickState("It's clicked") }}, isClick);
}  //dom요소를 컨트롤하지않아도 html요소들을 쉽게 컨트롤할수있다 

const e = React.createElement;
//리액트라는 라이브러리요소를 불러와서 크리에이트엘레멘트함수를사용해서
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HellowWorldButton));
//함수로 html요소를 그리는 법

//안쓴다
