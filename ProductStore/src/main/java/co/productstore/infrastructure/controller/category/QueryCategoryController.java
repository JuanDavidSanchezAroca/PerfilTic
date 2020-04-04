package co.productstore.infrastructure.controller.category;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.productstore.application.manager.category.ManagerListCategory;
import co.productstore.domain.dto.category.DtoSubCategory;

@RestController
@RequestMapping(value = "/category")
public class QueryCategoryController {

	private final ManagerListCategory managerListCategory;
	
	public QueryCategoryController(ManagerListCategory managerListCategory) {
		this.managerListCategory = managerListCategory;
	}
	
	@GetMapping
	public List<List<DtoSubCategory>> list(){
		return managerListCategory.ejecute();
	}
	
}
