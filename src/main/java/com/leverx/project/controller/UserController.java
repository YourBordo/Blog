package com.leverx.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.leverx.project.entity.User;
import com.leverx.project.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/{firstName}", method = RequestMethod.GET)
    public User getUserByNickname(@PathVariable(name = "firstName") String firstName) {
        return userService.find(firstName);
    }
}
