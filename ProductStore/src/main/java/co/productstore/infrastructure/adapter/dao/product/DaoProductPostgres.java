package co.productstore.infrastructure.adapter.dao.product;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.productstore.domain.dto.product.DtoProduct;
import co.productstore.domain.port.dao.product.DaoProduct;
import co.productstore.infrastructure.entities.ProductEntity;
import co.productstore.infrastructure.repository.jpa.product.ProductRepositoryPostgres;

@Repository
public class DaoProductPostgres implements DaoProduct {

	@Autowired
	private final ProductRepositoryPostgres repository;


	public DaoProductPostgres(ProductRepositoryPostgres repository) {
		this.repository = repository;
	}

	@Override
	public List<DtoProduct> list(int category) {
		List<ProductEntity> result = repository.list(category);
		List<DtoProduct> list = new ArrayList<>();
		for (ProductEntity product : result) {
			list.add(new DtoProduct(product.getProductCode(), product.getName(), product.getDescription(),
					product.getWeight(), product.getPriceUSD(), product.getImages()));
		}
		return list;
	}

}
