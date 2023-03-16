package sesac.sesac_mybatis.mapper;

import org.apache.ibatis.annotations.*;
import sesac.sesac_mybatis.domain.Person;

@Mapper
public interface PersonMapper {

    @Insert("insert into person(id, pw, name) values(#{id}, #{pw}, #{name})")
    void insertPerson(Person person);

    @Select("select* from person where id=#{id} and pw=#{pw} limit 1")
    Person getPerson(String id, String pw); //도메인에 담겨서온다 한사람의 정보가

    @Update("update person set pw=#{pw}, name=#{name} where id=#{id}")
    void updatePerson(Person person);


    @Delete("delete from person where id=#{id}")
    void deletePerson(String id);

}
