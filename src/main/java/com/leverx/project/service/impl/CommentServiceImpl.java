package com.leverx.project.service.impl;

import com.leverx.project.entity.Comment;
import com.leverx.project.repository.CommentRepository;
import com.leverx.project.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment find(long id) {
        return commentRepository.findById(id);
    }
}
