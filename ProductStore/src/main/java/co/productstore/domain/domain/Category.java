package co.productstore.domain.domain;

import lombok.Getter;

@Getter
public class Category {

	private int id;
	
	private String name;
	
	private String urlPhoto;
	
	private Category parentCategory;

	public Category(int id, String name, String urlPhoto, Category parentCategory) {
		this.id = id;
		this.name = name;
		this.urlPhoto = urlPhoto;
		this.parentCategory = parentCategory;
	}
	
	

}
