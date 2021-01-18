package com.leverx.project.service.impl;

import com.leverx.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.leverx.project.entity.User;
import com.leverx.project.repository.UserRepository;

@Component
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User find(String firstName) {

        return userRepository.findByFirstName(firstName);
    }

    @Override
    public void delete(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User add(User user) {
        return userRepository.save(user);
    }

    @Override
    public User find(long id) {
        return userRepository.findById(id);
    }
}
