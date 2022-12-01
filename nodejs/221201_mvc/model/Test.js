exports.hello = function(){
    return "hello";
}

exports.test = function(){
    return [
        {id: "a", name: "김소연"},
        {id: "b", name: "김소연"},

    ];
}

//mysql에서 받아온앖을 리턴해줘야됨. 컨트롤러에있는 파일을 사용할수있도록. 
//저런식으로 내용이 리턴돼서온다 

//컨트롤러에서 불러올거임 