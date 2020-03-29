package co.productstore.application.factory;

import org.springframework.stereotype.Component;

import co.productstore.application.command.CategoryCommand;
import co.productstore.domain.domain.Category;

@Component
public class FactoryCategory {

	public Category create(CategoryCommand categoryCommand) {
		if(categoryCommand.getParentCategory()!=null)
		return new Category(categoryCommand.getName(),new Category(categoryCommand.getParentCategory().getName(),null));
		else {
			return new Category(categoryCommand.getName(),null);
		}
	}
	
}
