package com.leverx.project.controller;

import com.leverx.project.entity.Comment;
import com.leverx.project.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    CommentService commentService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Comment findCommentById(@PathVariable(name = "id") long id) {
        return commentService.find(id);
    }

}
