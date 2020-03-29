package co.productstore.domain.domain;

import lombok.Getter;

@Getter
public class Category {

	private int id;
	
	private String name;
	
	private String urlPhoto;
	
	private Category parentCategory;

}
