package co.productstore.domain.dto.product;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DtoProduct {

	private String productCode;
	private String name;
	private String description;
	private double price;
	private double priceUSD;
	private List<String> images;
}
