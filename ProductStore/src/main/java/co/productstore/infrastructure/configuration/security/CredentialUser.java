package co.productstore.infrastructure.configuration.security;

import java.io.Serializable;

public class CredentialUser  implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String user;
	private String password;
	/**
	 * @return the user
	 */
	public String getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(String user) {
		this.user = user;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
}
