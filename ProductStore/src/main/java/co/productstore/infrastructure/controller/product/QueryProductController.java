package co.productstore.infrastructure.controller.product;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import co.productstore.application.manager.product.ManagerListProduct;
import co.productstore.domain.dto.product.DtoProduct;

@RestController
@RequestMapping(value = "/product")
public class QueryProductController {

	private final ManagerListProduct managerListProduct;
	
	public QueryProductController(ManagerListProduct managerListProduct) {
		this.managerListProduct = managerListProduct;
	}

	@GetMapping("/{id}")
	public List<DtoProduct> list(@PathVariable("id") Integer id){
		System.out.println(id);
		return managerListProduct.ejecute(id);
	}
}
