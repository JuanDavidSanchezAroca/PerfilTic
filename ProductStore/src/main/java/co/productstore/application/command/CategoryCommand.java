package co.productstore.application.command;

public class CategoryCommand {
	
	private String name;
	
	private String urlPhoto;
	
	private CategoryCommand parentCategory;

	public CategoryCommand(String name, CategoryCommand parentCategory) {
		this.name = name;
		this.parentCategory = parentCategory;
	}

	public CategoryCommand() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public CategoryCommand getParentCategory() {
		return parentCategory;
	}

	public void setParentCategory(CategoryCommand parentCategory) {
		this.parentCategory = parentCategory;
	}

	public String getUrlPhoto() {
		return urlPhoto;
	}

	public void setUrlPhoto(String urlPhoto) {
		this.urlPhoto = urlPhoto;
	}
	
}
