package co.productstore.infrastructure.configuration.user;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import co.productstore.infrastructure.entities.UserEntity;
import co.productstore.infrastructure.repository.jpa.user.UserRepositoryPostgres;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepositoryPostgres userRepository;
	
	@Autowired
	private BCryptPasswordEncoder bcrypt;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity user = userRepository.findByUsername(username);
		List<GrantedAuthority> roles = new ArrayList<>();
		roles.add(new SimpleGrantedAuthority("ADMIN"));
		UserDetails userDetails = new User(user.getUsername(), bcrypt.encode(user.getPassword()), roles);
		return userDetails;
	}

}
