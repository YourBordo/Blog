package com.leverx.project.entity;

public class EmailToken {
    private String token;

    public EmailToken() {
    }

    public EmailToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
