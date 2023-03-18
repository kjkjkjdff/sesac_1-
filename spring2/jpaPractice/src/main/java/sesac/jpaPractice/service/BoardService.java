package sesac.jpaPractice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.jpaPractice.domain.Board;
import sesac.jpaPractice.dto.BoardListDTO;
import sesac.jpaPractice.dto.BoardWriteDTO;
import sesac.jpaPractice.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    public List<BoardListDTO> getBoardList(){  //3. 겟보드리스트실행. 파인드올!  컨트롤 누르고 findall누르면 해당위치로 가짐 list의 형태로 돌아오는데 그 객체가 Board임
        List<Board> boards = boardRepository.findAll();
        List<BoardListDTO> list = new ArrayList<>();

        for ( int i = 0; i < boards.size(); i++ ) {
            BoardListDTO board = new BoardListDTO();
            board.setID(boards.get(i).getId());
            board.setNo(i+1);
            board.setTitle(boards.get(i).getTitle());
            board.setContent(boards.get(i).getContent());
            board.setWriter(boards.get(i).getWriter());

            list.add(board);
        }
        return list;
    }
    
    //id받아서 하나의 게시글 받아오는거
    public BoardListDTO getBoardById(String id) {   //10. 파인드바이아이디 실행! 이거 글한개 찾는거.Optional<T> findById(ID id);  ID는 JAP레파지토리에서 파일에서 보냈던 ID타입을말함. extends JpaRepository<Board, Integer>의 INTEGER 아이디. 옵셔널 T인 보드를 리턴한다.
        Optional<Board> board = boardRepository.findById(Integer.parseInt(id));  //인티저로 형변환 했고 그때 실행했던 결과가 옵셔널 객체 BOARD형태이다.
        BoardListDTO boardListDTO = new BoardListDTO();
        if ( board.isPresent() ){
            boardListDTO.setID(board.get().getId());
            boardListDTO.setTitle(board.get().getTitle());
            boardListDTO.setContent(board.get().getContent());
            boardListDTO.setWriter(board.get().getWriter());
        }
        return boardListDTO; //있으면 보드리스트디티오전달,없으면 빈 디티오리스트 전달//빈값주소로 보내면 빈 객체가 나온다.  39번줄에서 객체만들고 IF안에서 값응ㄹ 넣거나 안넣는거임
    }
    public void addBoard(BoardWriteDTO boardWriteDTO) {  //8. dtd에있는거 엔티티로옮겨닮고 세이브해서 저장하고
        Board board = new Board();
        board.setTitle(boardWriteDTO.getTitle());
        board.setContent(boardWriteDTO.getContent());
        board.setWriter(boardWriteDTO.getWriter());

        boardRepository.save(board);
    }
    public void updateBoard(BoardListDTO boardListDTO) { //12. 엔티티담고 세이브하고있다.
        Board board = new Board();
        board.setId(boardListDTO.getID());//엔티티안에 아이디라는 값이 담겼다.  보드레파지토리가 실행될때 아이디가 있냐없냐가 다르다.
        //보드 파일에 아이디 값이오면 원래걸 찾아서 새롭게 덮어쓰고 보드에 아이디값이 없으면 새롭게 인설트하는거임. 세이브함수실행시킬때. 세이브는 인설트,업데이트할때 둘다쓴다.
        //SETID는 넣어주는거고. boardListDTO에서 아이디를 가져와서 보드에 id를 넣어준다.  위에 글쓰기에서는 getid를 못하는게, 글을써야 id가 만들어지니까 .. 보드리스트dto랑 보드라이트dto는 그냥 쌤이 따로만든거임 
        board.setTitle(boardListDTO.getTitle());
        board.setContent(boardListDTO.getContent());
        board.setWriter(boardListDTO.getWriter());

        boardRepository.save(board);
    }
    public void deleteBoard(int Id) {
        boardRepository.deleteById(Id);
    } //14. 아이디만전달받아서 딜리트바이아이디만 실행함  VOID라서 리턴할수없다.
}
