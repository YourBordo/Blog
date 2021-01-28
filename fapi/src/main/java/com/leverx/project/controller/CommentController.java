package com.leverx.project.controller;

import com.leverx.project.entity.Comment;
import com.leverx.project.service.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Comment findCommentById(@PathVariable(name = "id") long id) {
        return commentService.find(id);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public List<Comment> findCommentsByUserId(@PathVariable(name = "id") long id) {
        return commentService.findByUserId(id);
    }

    @RequestMapping(value = "/article/{id}", method = RequestMethod.GET)
    public List<Comment> findCommentsByArticleId(@PathVariable(name = "id") long id) {
        return commentService.findByArticleId(id);
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Comment> addComment(@RequestBody Comment comment) {
        return commentService.add(comment);
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteCommentById(@PathVariable(name = "id") long id) {
       return commentService.delete(id);
    }
}
