package com.leverx.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.leverx.project.entity.User;
import com.leverx.project.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable(name = "id") long id) {
        return userService.find(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public User createUser(@RequestBody User user){
        return userService.add(user);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable(name = "id") long id){
         userService.delete(id);
    }


}
