package co.productstore.infrastructure.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_rol")
public class UserRolEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn (name = "id_rol")
	private RolEntity rol;
	
	@ManyToOne
	@JoinColumn(name = "user_name")
	private UserEntity user;

	public UserRolEntity() {
	}
	/**
	 * @return the rol
	 */
	public RolEntity getRol() {
		return rol;
	}

	/**
	 * @param rol the rol to set
	 */
	public void setRol(RolEntity rol) {
		this.rol = rol;
	}

	/**
	 * @return the user
	 */
	public UserEntity getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(UserEntity user) {
		this.user = user;
	}
	
	
	
	

}
