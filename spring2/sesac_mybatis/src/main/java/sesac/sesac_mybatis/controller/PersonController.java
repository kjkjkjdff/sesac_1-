package sesac.sesac_mybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac_mybatis.dto.PersonDTO;
import sesac.sesac_mybatis.service.PersonService;

@Controller
//@RestController //personController파일 안에 있는 모든 함수들에 @ResponseBody 가 붙는것과 동일하다. 요청에대한 응답을 리턴한다. restapi가 된다는 의미다.
@RequestMapping("/person") //겟맵핑 포스트맵핑이 나뉘어지기전에 쓰던애 . 클래스위에 붙이면, 밑에있는 모든 url에 /person이 붙는다.
public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping("/register")  //이 url로 접속해야되니까 get해준거임
    public String getRegister(){
        return "register";
    }

    @PostMapping("/register")   //"/perosn/register" 이 된다 .@RequestMapping("/person")때문에
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO){ //AXIOS 동적 폼전송으로 보냈을때는 requestbody없이 dto로 받는거 안됨
       personService.insertPerson(personDTO );
        return "";
    }

    @GetMapping("/login")
    public String getLogin(){
        return "login";
    }
    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO){  //불리언으로 바꾼거는 그게 리턴해주는 타입이라서. 트루 .false로 리턴해주고있으니까
        PersonDTO person = personService.getPerosn(personDTO);
        if(person == null )return false;
        else return true;
    }
    @PostMapping("/info")  //이게 로그인 axios form.action, form.method,form.submit();여기랑 이어지는건데 리퀘스트바디 빼야됨
    public String postInfo(PersonDTO personDTO, Model model){
        PersonDTO person = personService.getPerosn(personDTO);  //여기에 person이왔다는건 아이디랑 비번이 검색돼서 왔다는것 로그인때.
        model.addAttribute("person",person);
        return "info";
    }

    @PostMapping("/info/edit") //dto로 오니가 리퀘스트바디
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO){
        personService.updatePerson(personDTO);
        return "";
    }
    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO){
        personService.deletePerson(personDTO);
        return "";
}
}
