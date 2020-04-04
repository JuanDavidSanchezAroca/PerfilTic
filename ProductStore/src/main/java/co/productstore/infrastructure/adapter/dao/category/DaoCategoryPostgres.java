package co.productstore.infrastructure.adapter.dao.category;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.productstore.domain.dto.category.DtoCategory;
import co.productstore.domain.port.dao.category.DaoCategory;
import co.productstore.infrastructure.entities.CategoryEntity;
import co.productstore.infrastructure.repository.jpa.category.CategoryRepositoryPostgres;

@Repository
public class DaoCategoryPostgres implements DaoCategory {

	@Autowired
	private final CategoryRepositoryPostgres repository;

	private ModelMapper modelMapper = new ModelMapper();

	public DaoCategoryPostgres(CategoryRepositoryPostgres categoryRepositoryPostgres) {
		this.repository = categoryRepositoryPostgres;
	}

	@Override
	public List<DtoCategory> namesCategories() {
		List<CategoryEntity> result = repository.categories();
		List<DtoCategory> list = new ArrayList<DtoCategory>();
		for (CategoryEntity category : result) {
			list.add(modelMapper.map(category, DtoCategory.class));
		}
		return list;
	}

	@Override
	public List<DtoCategory> categoriesFather() {
		List<CategoryEntity> result = repository.categoriesFather();
		List<DtoCategory> list = new ArrayList<DtoCategory>();
		for (CategoryEntity category : result) {
			list.add(new DtoCategory(category.getId(), category.getName(), category.getUrlPhoto(),null));
		}
		return list;
	}

	@Override
	public List<DtoCategory> categoriesChildren() {
		List<CategoryEntity> result = repository.categoriesChildren();
		List<DtoCategory> list = new ArrayList<DtoCategory>();
		for (CategoryEntity category : result) {
			list.add(new DtoCategory(category.getId(), category.getName(), category.getUrlPhoto(),
					new DtoCategory(category.getParentCategory().getId(), null, null, null)));
		}
		return list;
	}

}
