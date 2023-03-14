package sesac.sesac_mybatis2.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesac.sesac_mybatis2.domain.User;

import java.util.List;

@Mapper
public interface MainMapper {
    //mapper참고하기
    List<User> retrieveAll();  //3. 리트리브올을 실행시킨다. 매인멥퍼는 인터페이스니까 이 리트리브올이라는 함수는 내용이없는데 메인서비스에서는 실행하고있음. 그럼 뭘 실행하는거냐?
    //이 리트리브올과 연결된 sql문을 실행시키는거다. xml메인멥퍼파일안에 있는 sql문을 실행한다.

    //밑에코드는 mapper참고 안하는 방법 (mainmapper.xml을 의미)

    @Insert("insert into user(name,nickname) values(#{name}, #{nickname})") //insertUser를 실행할때 이 sql문을 실행하겠다
    void insertUser(User user);//user라는 객체를 가져왔음. 닉넴하고 아이디가 있는데 그걸 위에 #{name}, #{nickname}이런식으로 가져와서,,
    //전달받은 user라는 객체와 sql문을 맵핑해서 내가 셋했던 네임과 닉네임이 들어가게 될거임 . 맨앞에 @Insert 적어줘야됨
    //10. 주소에 직접 이름 닉네임적으면 알아서 맵핑해서 정보가 가진다. void는 아무것도 리턴하지않기대문에 void임
}
