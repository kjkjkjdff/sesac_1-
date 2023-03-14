package sesac.sesac_mybatis2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac_mybatis2.domain.User;
import sesac.sesac_mybatis2.dto.UserDTO;
import sesac.sesac_mybatis2.mapper.MainMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {

    @Autowired
     private MainMapper mainMapper;

    public List<UserDTO> getUserList(){   //컨트롤러에 전달
        //   2.  메인멥퍼에있는 리트리브올을 실행시키고잇음
        List<User> result = mainMapper.retrieveAll();  //메인메퍼를 실행할건데 이게 SQL과 연결돼있다 RETRIEVEalL은 셀렉트 올같은거임. 그래서 넘어오는 형태가 lIST<USER>의 형태임
        //USER의 리스트가온다. 도메인에서.(?)
        // 5.  XML에서 RESULTTYPE으로 온 LIST<User>를 그대로 컨트롤러에 옮겨도되지만 옮길때 사용하는게 dto기때문에 userDTO를 담고있는 클래스를 새로 만들어서 실제로 전달할때는 유저DTO리스트로 전달한다.
        //그다음에 for문으로 출력을하고 이제 users를 리턴해서 컨트롤러로 간다. 유저디티오

        List<UserDTO> users = new ArrayList<UserDTO>();  //근데 그대로 오면안돼서 USER라는 USERDTO만들어서 가져올거임 USERS에 FOR문으로 만든
        //것들이 담기게될거고 그걸 리턴해준다


        for ( int i = 0; i< result.size(); i++){
            UserDTO user= new UserDTO();
            user.setId(result.get(i).getId());  //I번째친구. USER 를 가져온다
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1); //DTO에 유저 도메인과다르게 전달하기 위한 값을 만든거임. 테이블에 없는.

            users.add(user);


        }
        return users;
        //근데 그대로 오면안돼서 USER라는 USERDTO만들어서 가져올거임 USERS에 FOR문으로 만든
        //것들이 담기게될거고 그걸 리턴해준다
    }


    public void addUser(User user){mainMapper.insertUser(user);}
    //9. 메인서비스에서온 addUser실행


//   public void registerUser(UserDTO userDTO){mainMapper.insertUser(userDTO);}