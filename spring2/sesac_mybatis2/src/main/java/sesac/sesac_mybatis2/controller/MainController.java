package sesac.sesac_mybatis2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac_mybatis2.domain.User;
import sesac.sesac_mybatis2.dto.UserDTO;
import sesac.sesac_mybatis2.service.MainService;
import sesac.sesac_mybatis2.dto.UserDTO;
import sesac.sesac_mybatis2.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {

    @Autowired
    MainService mainService;

    @GetMapping("/users")
    public String getUsers(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList(); //1. 서비스의 겟유저스를실행해서 (메인서비스의 겟유저리스트를 실행시킴)서비스에서 겟유저리스트라는 함수를 실행해서 어레이리스트를 받아오고 모델에 담아서 리턴유저를 하고있음
        //getuserlist를 실행하면 mainservice의 getuserlist함수로 가서 실행되는건데  6. 메인서비스에서 리턴한userDTO users를 여기에서 받아서 실행한다..
        model.addAttribute("list", userList); //
        return "user";
    }

    @GetMapping("/user/insert")
//    http://localhost:8080/user/insert?name=123&nickname=456를 쓰면 /users로 갔을때 입력됨.  근데 원래 도메인에서 User를 다루면안됨.중요한거라. dto에 담아서 해야됨.
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        User user = new User();   //8. user라는 객체를 만들고, name 닉넴을 세터에 설정해줘서 user에는 네임과 닉네임이있다. 이거를 adduser에 넣어서 메인서비스의 user라는 함수로 보낸다.
        user.setName(name);
        user.setNickname(nickname);

        mainService.addUser(user);

        model.addAttribute("list", null);
        return "user";
    }

//여기부턴 내가 한 실습

    @PostMapping ("/axios/register")
    @ResponseBody
    public String register(@RequestBody UserDTO userDTO) {

        mainService.registerUser(userDTO);

        return "user";
    }
}
