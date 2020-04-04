package co.productstore.infrastructure.repository.jpa.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import co.productstore.infrastructure.entities.ProductEntity;

@Repository
public interface ProductRepositoryPostgres extends JpaRepository<ProductEntity, Integer> {

	@Query(value = "select p from ProductEntity p where p.category.id = ?1")
	List<ProductEntity> list(int idCategory);
}
