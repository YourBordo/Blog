package com.leverx.project.service;

import com.leverx.project.entity.Comment;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CommentService{
    Comment find(long id);
    Comment add(Comment comment);
    List<Comment> findByUserId(long id);
    List<Comment> findByArticleId(long id);
    void delete(long id);
}
