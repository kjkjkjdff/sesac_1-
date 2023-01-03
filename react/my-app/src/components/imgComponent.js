// import logo from "../logo.svg";
// import logo from "../../public/logo192.png";

//logo는 변수임 
// function ImgComponent(){
//     return(
//         <img src={logo} alt="이미지"/>
//     )
// }

// export default ImgComponent;

//자바스크립트적으로 이미지불러오는거. src내부에있는 폴더의 이미지까지만 접근 가능하다. 그밖 이미지는 접근불가능

function ImgComponent(){
    return(
        <img src="/logo192.png" alt="이미지"/>
    )
}

export default ImgComponent;