package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller

public class PersonController {
    public String name;
    public int age;
    @GetMapping("/people2") //app.get  getmapping("/hi") get메소드로 누군가 /hi에 접속하면 밑의 함수를 실행시키겠다
    public String getPerson(Model model){
        List<Person1> userList = new ArrayList<>();
        userList.add(new Person1("kim", 11));
        userList.add(new Person1("park", 12));
        userList.add(new Person1("lee", 13));
        userList.add(new Person1("haha", 13));
        model.addAttribute("userList",userList);

        return "person";  //템플릿을 설정해놨기때문에 res.render("hi")라는 뜻임 이건 templates안에 위치해야됨
    }
}

//person1이랑 person.html이랑 연결됨