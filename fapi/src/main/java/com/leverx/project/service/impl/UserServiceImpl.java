package com.leverx.project.service.impl;

import com.leverx.project.entity.User;
import com.leverx.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.annotation.RequestScope;

import java.util.HashSet;
import java.util.Set;
@RequestScope
@Service("customUserDetailsService")
public class UserServiceImpl implements UserService, UserDetailsService {

    @Value(value = "${backend.server.url}")
    private String backendUrl;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = find(email);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User
                (user.getEmail(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" /*+ user.getRole()*/));
        return authorities;
    }

    @Override
    public User find(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/user/" + id, User.class);
    }

    @Override
    public User find(String email) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/user/email/" + email, User.class);
    }

    @Override
    public ResponseEntity<User> add(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        RestTemplate restTemplate = new RestTemplate();
        try {
            return new ResponseEntity<>(restTemplate.postForObject(backendUrl + "/api/user/", user, User.class), HttpStatus.OK);
        } catch (HttpStatusCodeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity delete(long id) {
        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.delete(backendUrl + "/api/user/" + id, User.class);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (HttpStatusCodeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public User findByArticleId(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/user/article/" + id, User.class);
    }

    @Override
    public User findByCommentId(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/user/comment/" + id, User.class);
    }
}
