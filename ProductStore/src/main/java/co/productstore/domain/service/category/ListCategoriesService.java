package co.productstore.domain.service.category;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import co.productstore.domain.dto.category.DtoCategory;
import co.productstore.domain.dto.category.DtoSubCategory;
import co.productstore.domain.port.dao.category.DaoCategory;

public class ListCategoriesService {

	private final DaoCategory daoCategory;

	public ListCategoriesService(DaoCategory daoCategory) {
		this.daoCategory = daoCategory;
	}

	public List<List<DtoSubCategory>> list() {
		List<DtoCategory> listFather = daoCategory.categoriesFather();
		List<DtoCategory> listChildren = daoCategory.categoriesChildren();
		List<List<DtoSubCategory>> result = new ArrayList<>();

		for (int i = 0; i < listFather.size(); i++) {
			result.add(bfs(listFather.get(i), listChildren));
		}
		return result;
	}

	private List<DtoSubCategory> bfs(DtoCategory s, List<DtoCategory> listChildren) {
		DtoSubCategory subCategory = new DtoSubCategory(s.getId(), s.getName(), s.getUrlPhoto(), null);
		List<DtoSubCategory> result = new ArrayList<DtoSubCategory>();
		LinkedList<DtoSubCategory> queue = new LinkedList<DtoSubCategory>();
		queue.add(subCategory);
		result.add(subCategory);
		while (queue.size() != 0) {
			subCategory = queue.poll();
			List<DtoSubCategory> temp = new ArrayList<DtoSubCategory>();
			for (int i = 0; i < listChildren.size(); i++) {
				if (listChildren.get(i).getParentCategory().getId() == subCategory.getId()) {
					DtoSubCategory ctg = new DtoSubCategory(listChildren.get(i).getId(), listChildren.get(i).getName(),
							listChildren.get(i).getUrlPhoto(), null);
					queue.add(ctg);
					temp.add(ctg);
				}
			}
			if (!temp.isEmpty())
				subCategory.setSubCategories(temp);
		}
		return result;
	}
}
