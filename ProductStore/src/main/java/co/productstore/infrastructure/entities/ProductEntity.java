package co.productstore.infrastructure.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ProductEntity implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Id
	private String productCode;
	
	@Column ( name = "name")
	private String name;
	
	@Column ( name = "description")
	private String description;
	
	@Column ( name = "weigth")
	private double weight;
	
	@Column ( name = "priceUSD" )
	private double priceUSD;
	
	@Column ( name = "images")
	@ElementCollection
	private List<String> images;
	
	@ManyToOne
	@JoinColumn (name = "id" )
	private CategoryEntity category;

	public ProductEntity() {
		super();
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getPriceUSD() {
		return priceUSD;
	}

	public void setPriceUSD(double priceUSD) {
		this.priceUSD = priceUSD;
	}

	public List<String> getImages() {
		return images;
	}

	public void setImages(List<String> images) {
		this.images = images;
	}
}
