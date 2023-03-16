package sesac.sesac_mybatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.sesac_mybatis.domain.UserEntity;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByName(String name); // name 이라는 컬럼으로 where 조건 걸어 검색하겟다.
    // Optional<UserEntity> findById(int id);
    // Optional<UserEntity> findByIdName(int id, String name);
    // // select ~~ where name = #{name}
    //
    // boolean existsByName(String name);

    // UserEntity userEntity
    // Optional<UserEntity> user; user.get()
}
