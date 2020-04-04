package co.productstore.infrastructure.configuration.security;

import java.io.IOException;
import java.util.Collections;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;

public class FilterProcessLogin extends AbstractAuthenticationProcessingFilter {

	public FilterProcessLogin(String url, AuthenticationManager authenticationManager) {
		super(new AntPathRequestMatcher(url, "POST"));
		setAuthenticationManager(authenticationManager);

	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {
		CredentialUser credentialUser = new ObjectMapper().readValue(request.getInputStream(), CredentialUser.class);
		return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(credentialUser.getUser(),
				credentialUser.getPassword(), Collections.emptyList()));
	}
}
