package co.productstore.application.manager.category;

import java.util.List;

import org.springframework.stereotype.Component;

import co.productstore.domain.dto.category.DtoSubCategory;
import co.productstore.domain.service.category.ListCategoriesService;

@Component
public class ManagerListCategory {

	private final ListCategoriesService listCategoriesService;
	
	public ManagerListCategory(ListCategoriesService listCategoriesService) {
		this.listCategoriesService = listCategoriesService;
	}
	
	public List<DtoSubCategory> ejecute(){
		return listCategoriesService.list();
	}
}
