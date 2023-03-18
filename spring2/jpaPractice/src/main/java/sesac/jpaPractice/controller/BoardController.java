package sesac.jpaPractice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.jpaPractice.dto.BoardListDTO;
import sesac.jpaPractice.dto.BoardWriteDTO;
import sesac.jpaPractice.service.BoardService;

import java.util.List;

@Controller
public class BoardController {
    @Autowired
    BoardService boardService;

    @GetMapping("/")  //1. 겟보드리스트를 실행시킨다 
    public String get(Model model){
        List<BoardListDTO> boards = boardService.getBoardList();
        model.addAttribute("list", boards);  //2.템플릿에 전달
        return "list";
    }
    @GetMapping("/write")  //4. 포스트매핑으로
    public String getWrite(){
        return "write";
    }
    @PostMapping("/write") //5. 리케스트바디가없으니 일반폼전송으로 전송하는구나. axios가 아님
    public String postWrite(BoardWriteDTO boardWriteDTO){
        boardService.addBoard(boardWriteDTO);  //6. 보드서비스에있는 addboard함수를 실행
        return "redirect:/";//7. / 의 경로로 리다이렉트 시키겟다. 글작성완료하면 ("/")로 간다
    }
    @GetMapping("/board/{id}") //9. 바로보기 눌렀을때 나오는 글 한개 ! 겟보드아이디로 id를 전달한다
    public String getBoardone(@PathVariable String id, Model model) {
        BoardListDTO board = boardService.getBoardById(id);
        model.addAttribute("board", board);
        return "detail";
    }
    @PostMapping("/edit")  //11. 엑시오스로. 서비스의 업데이트보드를 실행시킨다
    @ResponseBody
    public boolean postEdit(@RequestBody BoardListDTO boardListDTO) {
        boardService.updateBoard(boardListDTO);
        return true;
    }
    @PostMapping("/delete") //13. 아이디만 있으면 삭제 가능하다 아이디만 전달
    @ResponseBody
    public boolean postDelete(@RequestBody BoardListDTO boardListDTO) {
        boardService.deleteBoard(boardListDTO.getID());
        return true;
    }
}
