package co.productstore.infrastructure.repository.jpa.rol;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import co.productstore.infrastructure.entities.RolEntity;


@Repository
public interface RolRepositoryPostgres extends JpaRepository<RolEntity, Integer>{

	@Query(value = "select r from UserRolEntity ur join ur.user u join ur.rol r where ur.user.userName = ?1")
	List<RolEntity> rolUser(String userName);
}
