package com.leverx.project.service;

import com.leverx.project.entity.User;
import org.springframework.stereotype.Component;

@Component
public interface UserService {
    User find(String firstName);
}
