package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import sesac.sesac.spring.Person;

import java.util.ArrayList;

@Controller
public class HelloController {

    @GetMapping("/hi") //app.get  getmapping("/hi") get메소드로 누군가 /hi에 접속하면 밑의 함수를 실행시키겠다
    public String getHi(Model model) {
        model.addAttribute("msg", "메세지입니다."); //msg를 html파일에서 받아서 사용할수있음 여기에 적은 HI!가 hi.html에서 나온다.
        //res.render("hi", model); ejs파일에 값보내는 객첸데 그게 model임
        model.addAttribute("utext", "<strong>utext입니다.</strong>");

        model.addAttribute("age", 18);
        return "hi";  //템플릿을 설정해놨기때문에 res.render("hi")라는 뜻임 이건 templates안에 위치해야됨
    }
       @GetMapping("/people") //HelloController랑 Person이랑  people.html
        public String getPeople(Model model) {
            ArrayList<Person> people =  new ArrayList<Person>();
            people.add(new Person("이름1",10));
            people.add(new Person("이름1",10));
            people.add(new Person("이름1",10));
            people.add(new Person("이름1",10));

            model.addAttribute("people",people);
            return "people";
        }
    }


