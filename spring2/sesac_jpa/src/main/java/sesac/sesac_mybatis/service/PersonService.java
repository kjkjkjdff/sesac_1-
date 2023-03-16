package sesac.sesac_mybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac_mybatis.domain.Person;
import sesac.sesac_mybatis.dto.PersonDTO;
import sesac.sesac_mybatis.mapper.PersonMapper;

@Service
public class PersonService {

    @Autowired
    PersonMapper personMapper;

    //회원가입
    public void insertPerson(PersonDTO personDTO) {
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.insertPerson(person);
    }

//    public void getPerson(PersonDTO personDTO) {
//
//    personMapper.getPerosn(personDTO.getId(),personDTO.getPw());
//}
    public PersonDTO getPerosn(PersonDTO personDTO){
        Person person = personMapper.getPerson(personDTO.getId(),personDTO.getPw());

        if(person ==null) return null;
        PersonDTO info = new PersonDTO();
        info.setId(person.getId());
        info.setPw(person.getPw());
        info.setName(person.getName());
        info.setNickname(person.getId()+ person.getName());
        return info;
    }

    public void updatePerson(PersonDTO personDTO){
        Person person = new Person(); //person이라는 도메인에 담는다
        person.setId(personDTO.getId());
        person.setPw(personDTO.getId());
        person.setName(personDTO.getName());

        personMapper.updatePerson(person);
    }
    public void deletePerson(PersonDTO personDTO){
        personMapper.deletePerson(personDTO.getId());  //맵퍼에 보낸다.
    }

}

