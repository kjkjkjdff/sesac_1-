const url =require("url"); 
// 내장모듈이라 불러와야됨
console.log(url);
console.log(url.parse);
var obj= url.parse('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%8B%B9&oquery=%EC%83%88%EC%8B%B9&tqi=h3UgSwprvTVssiQsdb8ssssstfC-150782')
// parse라는함수의 url을 가져온다
console.log(obj);
// obj는 클래스 객체다라는걸 알려주고있음 결과물에서 
// console.log(url.format(obj)); 
// 문자열로 바꾼다??
console.log(url.URL);

console.group(obj.protocol);
// 객체로나눠진 친구에서 먼가를 가져오고싶을때 이렇게

var string= new url.URL("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%8B%B9&oquery=%EC%83%88%EC%8B%B9&tqi=h3UgSwprvTVssiQsdb8ssssstfC-150782")
// new사용해서 url객체만든거. url여기가 클래스임.
console.log(string.searchParams);
// 물음표뒤에있는걸 나눠놓은거임
var string = new url.URL("https://localhost?name=sesac&name=코딩온&age=10");
// url을 객체로만드는법
console.log(string.searchParams.getAll('name'));
console.log(string.searchParams.keys());
// 키는 네임네임에이지
string.searchParams.append('age','28');
// 기존의함수말고 다른함수더하고싶을때 어펜드
console.log(string.searchParams.getAll('age'));
console.log(string.searchParams.has('age'));
// has쓰면 그 문자쓰는 게있나 확인함.? age쓰는게있냐->트루

// 객체를 어케쓰는지랑 ?표 뒤에있는거쓰는법만 알면됨. 
