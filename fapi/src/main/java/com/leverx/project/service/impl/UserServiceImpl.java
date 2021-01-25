package com.leverx.project.service.impl;

import com.leverx.project.entity.User;
import com.leverx.project.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class UserServiceImpl implements UserService {

    @Value(value = "${backend.server.url}")
    private String backendUrl;

    @Override
    public User find(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/user/" + id, User.class);
    }

    @Override
    public User find(String firstName) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/user/" + firstName, User.class);
    }

    @Override
    public User add(User user) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(backendUrl + "/api/user/", user, User.class);
    }

    @Override
    public void delete(long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendUrl + "/api/user/" + id, User.class);
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
