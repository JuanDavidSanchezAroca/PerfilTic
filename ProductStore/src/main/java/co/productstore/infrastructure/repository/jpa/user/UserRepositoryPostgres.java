package co.productstore.infrastructure.repository.jpa.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import co.productstore.infrastructure.entities.UserEntity;

@Repository
public interface UserRepositoryPostgres extends JpaRepository<UserEntity, Integer> {

	@Query(value = "select u from UserEntity u where u.userName = ?1")
	UserEntity findByUsername(String username);
	
}
