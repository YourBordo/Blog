package com.leverx.project.service.impl;

import com.leverx.project.entity.Comment;
import com.leverx.project.repository.ArticleRepository;
import com.leverx.project.repository.CommentRepository;
import com.leverx.project.repository.UserRepository;
import com.leverx.project.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Override
    public List<Comment> findByUserId(long id) {
        return userRepository.findById(id).getComments();
    }

    @Override
    public List<Comment> findByArticleId(long id) {
        return articleRepository.findById(id).getComments();
    }

    @Override
    public void delete(long id) {
        commentRepository.deleteById(id);
    }

    @Override
    public Comment add(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public Comment find(long id) {
        return commentRepository.findById(id);
    }
}
