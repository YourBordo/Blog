package com.leverx.project.service;

import org.springframework.stereotype.Component;

@Component
public interface EmailService {
    void sendSimpleMessage(String to, String subject, String text);
}
