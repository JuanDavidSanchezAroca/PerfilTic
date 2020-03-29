package co.productstore.domain.domain;

import java.util.List;

import lombok.Getter;


@Getter
public class Product {

	private String productCode;
	
	private String name;
	
	private String description;
	
	private double weight;
	
	private double priceUSD;
	
	private List<String> images;
	
	private Category category;

}
