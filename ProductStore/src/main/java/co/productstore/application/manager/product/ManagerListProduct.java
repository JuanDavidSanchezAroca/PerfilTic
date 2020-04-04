package co.productstore.application.manager.product;

import java.util.List;

import org.springframework.stereotype.Component;

import co.productstore.domain.dto.product.DtoProduct;
import co.productstore.domain.port.dao.product.DaoProduct;

@Component
public class ManagerListProduct {

	private final DaoProduct daoProduct;

	public ManagerListProduct(DaoProduct daoProduct) {
		this.daoProduct = daoProduct;
	}

	public List<DtoProduct> ejecute(int category) {
		return daoProduct.list(category);
	}
}
