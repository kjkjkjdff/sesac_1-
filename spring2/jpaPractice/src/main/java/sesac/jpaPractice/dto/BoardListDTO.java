package sesac.jpaPractice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardListDTO {
    private int ID;
    private int no;//이런건 맘대로 만들어줘도됨! 그리고 DTO는 그냥 그릇이라 여러개 맘대로 만들어도됨
    private String title;
    private String content;
    private String writer;
}
