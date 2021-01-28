package com.leverx.project.controller;

import com.leverx.project.entity.User;
import com.leverx.project.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

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

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/current")
    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return userService.find(((org.springframework.security.core.userdetails.User) authentication.getPrincipal()).getUsername());
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