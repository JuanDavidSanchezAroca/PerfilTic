package co.productstore.domain.dto.category;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoCategory {
	
	private int id;
	private String name;
	private String urlPhoto;
	private DtoCategory parentCategory;
	
	
	public DtoCategory(int id, String name, String urlPhoto, DtoCategory parentCategory) {
		this.id = id;
		this.name = name;
		this.urlPhoto = urlPhoto;
		this.parentCategory = parentCategory;
	}
	
	
}
