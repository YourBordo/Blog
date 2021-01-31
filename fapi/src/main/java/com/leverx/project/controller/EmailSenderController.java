package com.leverx.project.controller;

import com.leverx.project.entity.EmailToken;
import com.leverx.project.entity.User;
import com.leverx.project.security.TokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@RestController
@RequestMapping("/api/mail")
public class EmailSenderController {

    private final TokenProvider tokenProvider;

    public EmailSenderController(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @RequestMapping(value = "/generate-email-token", method = RequestMethod.POST)
    public ResponseEntity generateEmailToken(@RequestBody User user) {
        try {
            final String token = tokenProvider.generateEmailToken(user);
            return ResponseEntity.ok(new EmailToken(token));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/is-valid/{token}", method = RequestMethod.GET)
    public boolean isValid(@PathVariable("token") String token) {
        return tokenProvider.isTokenExpired(token);
    }
}
