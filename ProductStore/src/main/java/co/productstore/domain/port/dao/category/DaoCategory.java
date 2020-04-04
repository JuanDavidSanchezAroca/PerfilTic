package co.productstore.domain.port.dao.category;

import java.util.List;

import co.productstore.domain.dto.category.DtoCategory;

public interface DaoCategory {

	List<DtoCategory> namesCategories();
	
	List<DtoCategory> categoriesFather();
	
	List<DtoCategory> categoriesChildren();
}
