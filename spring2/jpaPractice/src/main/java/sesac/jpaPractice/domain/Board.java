package sesac.jpaPractice.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="board")
public class Board {
    @Id
    @GeneratedValue
    private int id;

    @Column(length=100, nullable = false)
    private String title;

    @Lob //게시글 작성할때 타이틀같은경우는 제한 걸수있지만 컨텐츠는 제한모르니까 Lob로...long text로 나오게됨 varchar말고
    private String content;

    @Column(length=50, nullable = false)
    private String writer;
}