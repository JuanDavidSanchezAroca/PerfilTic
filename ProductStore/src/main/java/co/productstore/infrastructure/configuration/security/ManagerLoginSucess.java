package co.productstore.infrastructure.configuration.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import co.productstore.infrastructure.configuration.exception.AuthenticationException;
import co.productstore.infrastructure.entities.RolEntity;
import co.productstore.infrastructure.repository.jpa.rol.RolRepositoryPostgres;

@Component
public class ManagerLoginSucess implements AuthenticationSuccessHandler {
	
	public static final String NOT_ROLES_ASSIGNED = "Not Roles Assigned";
	
	@Autowired
	private RolRepositoryPostgres repository;
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		try {
			AuthenticationUser authenticationUser = createAuthentication(authentication);

			ResponseHelper.sendResponse(response, HttpServletResponse.SC_OK, authenticationUser);
		} catch (AuthenticationException e) {
			ResponseHelper.sendError(response, e, HttpServletResponse.SC_UNAUTHORIZED, "/login");
		} catch (Exception e) {
			
		}

	}

	private AuthenticationUser createAuthentication(Authentication authentication) throws NamingException {

		List<RolEntity> rolesEntity = repository.rolUser(authentication.getName());
		
		List<DtoUserRol> roles = rolesEntity.stream().map(item ->{
			return new DtoUserRol(item.getName());
		}).collect(Collectors.toList());
		
		if(roles.isEmpty()) {
			throw new AuthenticationException(NOT_ROLES_ASSIGNED);
		}

		AuthenticationUser auth = new AuthenticationUser(authentication.getName(), roles);

		addRoles(authentication, roles);

		return auth;
	}

	private void addRoles(Authentication authentication, List<DtoUserRol> dtoUserRols) {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		dtoUserRols.forEach(rolUser -> {
			SimpleGrantedAuthority authority = new SimpleGrantedAuthority(rolUser.getNameRol());
			authorities.add(authority);
		});
		SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(
				authentication.getPrincipal(), authentication.getCredentials(), authorities));
	}
}
