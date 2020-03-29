package co.productstore.infrastructure.beans;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import co.productstore.domain.port.dao.category.DaoCategory;
import co.productstore.domain.service.category.ListCategoriesService;

@Configuration
public class Beans {

	/**
	 * Servicio categoria 
	 */
	@Bean
	public ListCategoriesService listCategoriesService(DaoCategory daoCategory) {
		return new ListCategoriesService(daoCategory);
	}
}
