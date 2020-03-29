package co.productstore.domain.port.dao.product;

import java.util.List;

import co.productstore.domain.dto.product.DtoProduct;

public interface DaoProduct {

	List<DtoProduct> list(int category);
	
}
