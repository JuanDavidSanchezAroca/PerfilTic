package co.productstore.infrastructure.configuration.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;

import co.productstore.infrastructure.configuration.user.MyUserDetailsService;

@Configuration
@EnableWebSecurity
public class ConfigurationSecurity extends WebSecurityConfigurerAdapter {

	@Autowired
	private MyUserDetailsService userDetailsService;

	@Autowired
	private BCryptPasswordEncoder bcrypt;

	@Autowired
	ManagerLoginSucess managerLoginSucess;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		return bCryptPasswordEncoder;
	}

	public AbstractAuthenticationProcessingFilter authenticationProcessingFilter() throws Exception {
		FilterProcessLogin filterProcessLogin = new FilterProcessLogin("/login", authenticationManager());
		filterProcessLogin.setAuthenticationSuccessHandler(managerLoginSucess);
		;
		return filterProcessLogin;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.headers().frameOptions().sameOrigin().and().authorizeRequests().antMatchers("/login").permitAll()
				.antMatchers(HttpMethod.GET, "/", "/*.html","/**/*.html","/**/*.css","/**/*.js","/**/*.png","/**/*.ico").permitAll()
				.anyRequest().fullyAuthenticated().and().csrf().disable()
				.addFilterBefore(authenticationProcessingFilter(), UsernamePasswordAuthenticationFilter.class).logout()
				.logoutUrl("/logout").logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler());
	}

	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bcrypt);
	}

}
