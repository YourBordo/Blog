package com.leverx.project.service;

import com.leverx.project.entity.Comment;
import org.springframework.stereotype.Component;

@Component
public interface CommentService{
    Comment find(long id);

}
