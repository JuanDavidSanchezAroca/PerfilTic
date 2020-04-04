package co.productstore.infrastructure.adapter.repository;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.productstore.domain.domain.Category;
import co.productstore.domain.port.repository.CategoryRepository;
import co.productstore.infrastructure.entities.CategoryEntity;
import co.productstore.infrastructure.repository.jpa.category.CategoryRepositoryPostgres;

@Repository
public class RepositoryCategoriaJpa implements CategoryRepository{

	@Autowired
	private final CategoryRepositoryPostgres repository;
	
	private ModelMapper modelMapper = new ModelMapper();
	
	
	public RepositoryCategoriaJpa(CategoryRepositoryPostgres repository) {
		this.repository = repository;
	}

	@Override
	public void create(Category category) {
	
		CategoryEntity ctgEntity= modelMapper.map(category,CategoryEntity.class);
		repository.save(ctgEntity);
	}

	@Override
	public Category searchByName(String name) {
		CategoryEntity ctgEntity = repository.searchByName(name);
		if(ctgEntity!=null)
		return modelMapper.map(ctgEntity,Category.class);
		else {
			return null;
		}
	}

	@Override
	public List<Category> listByCategory(String nameParent) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Category searchByNameParent(String name, Category idParent) {
		CategoryEntity ctgAux= modelMapper.map(idParent, CategoryEntity.class);
		CategoryEntity ctgEntity = repository.searchByNameParent(name, ctgAux);
		if(ctgEntity!=null)
		return modelMapper.map(ctgEntity, Category.class);
		
		return null;
	}

}
