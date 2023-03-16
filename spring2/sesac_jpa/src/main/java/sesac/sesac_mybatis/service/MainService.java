package sesac.sesac_mybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac_mybatis.domain.User;
import sesac.sesac_mybatis.domain.UserEntity;
import sesac.sesac_mybatis.dto.UserDTO;
import sesac.sesac_mybatis.mapper.MainMapper;
import sesac.sesac_mybatis.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {

    @Autowired
    private MainMapper mainMapper;
    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUserList() {   //컨트롤러에 전달
        //   2.  메인멥퍼에있는 리트리브올을 실행시키고잇음
//        List<User> result = mainMapper.retrieveAll();  //메인메퍼를 실행할건데 이게 SQL과 연결돼있다 RETRIEVEalL은 셀렉트 올같은거임. 그래서 넘어오는 형태가 lIST<USER>의 형태임
        //USER의 리스트가온다. 도메인에서.(?)
        // 5.  XML에서 RESULTTYPE으로 온 LIST<User>를 그대로 컨트롤러에 옮겨도되지만 옮길때 사용하는게 dto기때문에 userDTO를 담고있는 클래스를 새로 만들어서 실제로 전달할때는 유저DTO리스트로 전달한다.
        //그다음에 for문으로 출력을하고 이제 users를 리턴해서 컨트롤러로 간다. 유저디티오

        List<UserEntity>result = userRepository.findAll();
        // select * from
        List<UserDTO> users = new ArrayList<UserDTO>();  //근데 그대로 오면안돼서 USER라는 USERDTO만들어서 가져올거임 USERS에 FOR문으로 만든
        //것들이 담기게될거고 그걸 리턴해준다


        for (int i = 0; i < result.size(); i++) {
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());  //I번째친구. USER 를 가져온다
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i + 1); //DTO에 유저 도메인과다르게 전달하기 위한 값을 만든거임. 테이블에 없는.

            users.add(user);


        }
        return users;
        //근데 그대로 오면안돼서 USER라는 USERDTO만들어서 가져올거임 USERS에 FOR문으로 만든
        //것들이 담기게될거고 그걸 리턴해준다
    }

    public void addUser(UserEntity user) {userRepository.save(user); } // insert
//    public void addUser(User user) {
//        mainMapper.insertUser(user);
//    }
    //9. 메인서비스에서온 addUser실행
public ArrayList<UserDTO> getUserName(String name) {
    Optional<UserEntity> user = userRepository.findByName(name);
    // findByName 하면 name을 조건으로 걸어서 검색함 jpa의 장점 중 하나 컬럼을 조건으로 검색~~~ //user는 변수임  밑에 user.ispresent랑 똑같은 변수
    ArrayList<UserDTO> userList = new ArrayList<>();

    if ( user.isPresent() ) { // Optional 로 감싸진 객체가 null인지 아닌지 확인
        UserDTO dto = new UserDTO();
        dto.setId(user.get().getId());
        dto.setNo(0);  //0이라는 숫자를 임의로 넣어준거임
        dto.setName(user.get().getName());
        dto.setNickname(user.get().getNickname());
        userList.add(dto);
    }
    return userList;
    }
}


//   public void registerUser(UserDTO userDTO){mainMapper.insertUser(userDTO);}