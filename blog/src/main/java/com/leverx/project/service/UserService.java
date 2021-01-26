package com.leverx.project.service;

import com.leverx.project.entity.User;
import org.springframework.stereotype.Component;

@Component
public interface UserService {
    User find(String email);
    User find(long id);
    User add(User user);
    void delete(long id);
    User findByArticleId(long id);
    User findByCommentId(long id);
}
