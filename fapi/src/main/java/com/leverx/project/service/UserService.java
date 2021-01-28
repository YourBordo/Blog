package com.leverx.project.service;

import com.leverx.project.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface UserService {
    User find(String email);
    User find(long id);
    ResponseEntity<User> add(User user);
    ResponseEntity delete(long id);
    User findByArticleId(long id);
    User findByCommentId(long id);
}
