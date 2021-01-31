package com.leverx.project.controller;

import com.leverx.project.entity.User;
import com.leverx.project.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable(name = "id") long id) {
        return userService.find(id);
    }

    @RequestMapping(value = "/email/{email}", method = RequestMethod.GET)
    public User getUserById(@PathVariable(name = "email") String email) {
        return userService.find(email);
    }

    @RequestMapping(value = "/article/{id}", method = RequestMethod.GET)
    public User getUserByArticleId(@PathVariable(name = "id") long id) {
        return userService.findByArticleId(id);
    }

    @RequestMapping(value = "/comment/{id}", method = RequestMethod.GET)
    public User getUserByCommentId(@PathVariable(name = "id") long id) {
        return userService.findByCommentId(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return userService.add(user);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteUser(@PathVariable(name = "id") long id) {
        return userService.delete(id);
    }
}
