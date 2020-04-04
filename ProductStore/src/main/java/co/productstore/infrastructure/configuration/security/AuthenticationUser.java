package co.productstore.infrastructure.configuration.security;

import java.util.List;

public class AuthenticationUser {

	private String user;
	private List<DtoUserRol> userRol;
	
	
	public AuthenticationUser(String user, List<DtoUserRol> userRol) {
		this.user = user;
		this.userRol = userRol;
	}
	
	
	public String getUser() {
		return user;
	}
	
	public List<DtoUserRol> getUserRol() {
		return userRol;
	}
	
}
