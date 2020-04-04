package co.productstore.domain.dto.category;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DtoSubCategory {
	
	private int id;
	private String name;
	private String urlPhoto;
	private List<DtoSubCategory> subCategories;
	
}
