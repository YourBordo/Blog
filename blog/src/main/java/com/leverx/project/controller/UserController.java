package com.leverx.project.controller;

import org.springframework.web.bind.annotation.*;
import com.leverx.project.entity.User;
import com.leverx.project.service.UserService;

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

    @RequestMapping(value = "/article/{id}", method = RequestMethod.GET)
    public User getUserByArticleId(@PathVariable(name = "id") long id) {
        return userService.findByArticleId(id);
    }

    @RequestMapping(value = "/comment/{id}", method = RequestMethod.GET)
    public User getUserByCommentId(@PathVariable(name = "id") long id) {
        return userService.findByCommentId(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public User createUser(@RequestBody User user) {
        return userService.add(user);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable(name = "id") long id) {
        userService.delete(id);
    }
}
