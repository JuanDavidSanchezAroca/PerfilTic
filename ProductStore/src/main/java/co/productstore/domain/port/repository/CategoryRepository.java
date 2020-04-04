package co.productstore.domain.port.repository;

import java.util.List;

import co.productstore.domain.domain.Category;

public interface CategoryRepository {
	
	void create(Category category);
	
	Category searchByName(String name);
	
	Category searchByNameParent(String name, Category idParent);
	
	List<Category> listByCategory(String nameParent);

}
