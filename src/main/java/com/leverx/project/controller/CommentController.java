package com.leverx.project.controller;

import com.leverx.project.entity.Comment;
import com.leverx.project.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    CommentService commentService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Comment findCommentById(@PathVariable(name = "id") long id) {
        return commentService.find(id);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public List<Comment> findCommentByUserId(@PathVariable(name = "id") long id) {
        return commentService.findByUserId(id);
    }

    @RequestMapping(value = "/article/{id}", method = RequestMethod.GET)
    public List<Comment> findCommentByArticleId(@PathVariable(name = "id") long id) {
        return commentService.findByArticleId(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Comment addComment(@RequestBody Comment comment) {
        return commentService.add(comment);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteCommentById(@PathVariable(name = "id") long id) {
         commentService.delete(id);
    }
}
