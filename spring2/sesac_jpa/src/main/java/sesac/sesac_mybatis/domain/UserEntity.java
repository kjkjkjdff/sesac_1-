package sesac.sesac_mybatis.domain;

import javax.persistence.*;

@Entity // 해당 클래스가 Entity 클래스라는 것을 알려준다.
@Table(name="user") // 테이블 이름 명시
// 실제 db에서 어떤 테이블인지 알려주는
public class UserEntity {
    @Id // 어노테이션과 연결 된 필드가 기본키다
    @GeneratedValue // 자동으로 생성 되는 값이다.
    private int id; // id primary key auto_increment 와 동일
    @Column(length = 10, nullable = false) // 기본키나 그런거 아니고 컬럼. // name varchar(20) not null
    private String name;
    @Column(length = 10, nullable = false)
    private String nickname;
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }
}