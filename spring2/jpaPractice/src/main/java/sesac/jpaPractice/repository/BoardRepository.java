package sesac.jpaPractice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.jpaPractice.domain.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {   //여기가 Board라서 보드객체로 보내진다

    //List<Board> findByTitle(String title);
    //void deleteByWriter(String writer); // delete from board where writer = #{writer}
}
//jpa에 있는 기본함수들만 이용해서 여기 레파지토리 따로 안만들었다
