package sesac.spring.api.sesacapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.api.sesacapi.dto.UserDTO;
import sesac.spring.api.sesacapi.vo.LoginVO;
import sesac.spring.api.sesacapi.vo.SigninVO;
import sesac.spring.api.sesacapi.vo.UserVO;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){
        return "request";
    }
    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam(value = "name",required = true) String name2, Model model) { //get /response1으로 넘어온애들중에서 name속성으로 넘어온애들이있으면 여기에 담아라  name으로 보낸거면 name으로 받아야된다
        model.addAttribute("name",name2);
        return "response";
    }
//required = true 필수값
    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value = "name",required = false) String name2, Model model) { //get /response1으로 넘어온애들중에서 name속성으로 넘어온애들이있으면 여기에 담아라  name으로 보낸거면 name으로 받아야된다
        model.addAttribute("name",name2);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}") //name과 age로 그 값이 오면 그걸 name과 age에 할당해라 이게 밑줄의 String name과 String age로 받는다
    //이름은 변수이름 똑같이 받은거고 age는 변수이름 다를경우의 처리방법임
    public String getAPI3(@PathVariable String name, @PathVariable("age") String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @GetMapping({"/get/response4/{name}","/get/response4/{name}/{age}"}) //name과 age로 그 값이 오면 그걸 name과 age에 할당해라 이게 밑줄의 String name과 String age로 받는다
    //이름은 변수이름 똑같이 받은거고 age는 변수이름 다를경우의 처리방법임
    //name하나만오든 name이랑age가 동시에 오든 밑에걸로 처리해라 그래서 주소를 배열로 넣는다 {"/get/response4/{name}","/get/response4/{name}/{age}"}
    public String getAPI4(@PathVariable String name, @PathVariable(value="age",required = false ) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required=false) String name, Model model){
        model.addAttribute("name", name);
        return "response"; //html파일을 찾는다
    }

    @PostMapping("/post/response3")
    @ResponseBody  //이걸 붙이면 java객체를 json기반 바디로 변환해서 값을 보낸다. 파일을 렌더하는게아니라 값을 보내는 res.send
    //동적 폼전송 할때 이걸 많이 쓴다!! 뷰파일 랜더하는게 아니라
    public String postAPI3(@RequestParam(required=false) String name){
//        model.addAttribute("name", name); //뷰파일을 실행하지않기때문에 모델을 받을필요가없다
        return "이름은 :"+ name;
    }




//    실습
@GetMapping("/introduce/{name}")
public String getAPI5(@PathVariable String name, Model model){
    model.addAttribute("name", name);
    return "response2";
}

// 실습2
@GetMapping("/introduce2")
public String getAPI6(@RequestParam(value = "name",required = true) String name2, @RequestParam(value = "age",required = true) String age, Model model) {
    model.addAttribute("name",name2);
    model.addAttribute("age",age);
    return "response2";
}

//실습3
@PostMapping("/post/response6")
public String postAPI7(@RequestParam String name, @RequestParam String gender, @RequestParam String hobby, Model model){
    model.addAttribute("name", name);
    model.addAttribute("gender", gender);
    model.addAttribute("hobby", hobby);
    return "response3";
}

//dto
@GetMapping("/dto/response1")
@ResponseBody
public String dtoAPI1(UserDTO M){   //UserDTO가 UserDTO의 set함수에서 가져온거고 M은 변수
        String msg = M.getName() + " " + M.getAge() + "!!!";
        return msg;
}
@PostMapping("/dto/response2")
@ResponseBody
public String dtoAPI2(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }


 @PostMapping("/dto/response3")
 @ResponseBody     //일반 폼전송은 리퀘스트바디가 안됨 json형태만 맵핑을 시킬수있음 그래서 이건 안됨!
 public String dtoAPI3(@RequestBody UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }



//    vo
@GetMapping("/vo/response1")
@ResponseBody
public String voAPI1(UserVO userVO){  //vo에 set함수없어서 값 못가져옴 null
    String msg = userVO.getName() + " " + userVO.getAge() + "!!!";
    return msg;
}

@PostMapping("/vo/response2")  //null
@ResponseBody
public String voAPI2(UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge() + "!!!";
        return msg;
    }

@PostMapping("/vo/response3")  //실행안됨
@ResponseBody
// 일반 폼전송으로 데이터를 보내게 되면 content-type 이 application/www-form-data-urlencoded? 이런 거다.
// @RequestBody 라는 친구는 content-type이 application/json 으로 넘어온 데이터를 자바 객체에 매핑시켜주는 역할을 한다.
public String voAPI3(@RequestBody UserVO userVO) {
    String msg = "이름:" + userVO.getName() + " " + userVO.getAge() + "!!!";
    return msg;
}

//axios dto 실습
@GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value="name")String name,@RequestParam(value="age")String age){
        String msg="이름: " +name + "\n나이 : " + age ;
        return msg;
}
@GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName()+ "\n나이:"+ userDTO.getAge();
    return msg;
    }
@PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value="name")String name, @RequestParam(value="age")String age){
        String msg="이름: " + name + "\n나이:" + age;
            return msg;
}
@PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO){
        String msg="이름: " + userDTO.getName() + "\n나이:" +userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO){
        String msg="이름: " + userDTO.getName() + "\n나이:" +userDTO.getAge();
        return msg;
    }



 //axios vo실습

 @GetMapping("/axios/vo/response1")
 @ResponseBody
 public String axiosvoAPI1(@RequestParam(value="name") String name, @RequestParam(value="age")String age){
        String msg="이름: "+ name + "\n나이 : " + age;
        return msg;
 }
 @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosvoAPI2(UserVO userV0) {
     String msg = "이름 : " + userV0.getName() + "\n나이: " + userV0.getAge();
     return msg;
 }
@PostMapping ("/axios/vo/response3")
@ResponseBody
  public String axiosvoAPI3(@RequestParam(value="name") String name, @RequestParam(value= "age")String age){
      String msg="이름: "+ name + "\n나이:"+age;
      return msg;

 }
 @PostMapping("/axios/vo/response4")
 @ResponseBody
 public String axiosvoAPI4(UserVO userVO){
  String msg= "이름:"+ userVO.getName()+ "\n나이: " + userVO.getAge();
  return msg;
 }
 @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosvoAPI5(@RequestBody UserVO userVO){
        String msg = "이름 : "+ userVO.getName()+ "\n나이 : "+ userVO.getAge();
        return msg;
 }

 //동적폼전송 로그인 실습

    @PostMapping("/axios/vo/response6")
    @ResponseBody
    public String axiosvoAPI6(@RequestBody SigninVO signinVO){
        String msg = signinVO.getName()+"님이 가입했습니다";
        return msg;
    }

    //로그인

    @PostMapping("/axios/vo/login")
    @ResponseBody
    public String axiosvoAPI7(@RequestBody LoginVO loginVO){
        String msg = loginVO.getName()+"님이 로그인했습니다";...
        return msg;
    }
}

