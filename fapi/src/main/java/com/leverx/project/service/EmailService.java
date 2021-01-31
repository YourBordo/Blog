package com.leverx.project.service;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@Component
public interface EmailService {
    void sendSimpleMessage(String to, String subject, String text);
}
