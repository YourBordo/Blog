package com.leverx.project.service;

import com.leverx.project.entity.Comment;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CommentService{
    Comment find(long id);
    ResponseEntity<Comment> add(Comment comment);
    List<Comment> findByUserId(long id);
    List<Comment> findByArticleId(long id);
    ResponseEntity delete(long id);
}
