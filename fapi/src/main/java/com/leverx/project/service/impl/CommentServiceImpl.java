package com.leverx.project.service.impl;

import com.leverx.project.entity.Comment;
import com.leverx.project.entity.Tag;
import com.leverx.project.entity.User;
import com.leverx.project.service.CommentService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.annotation.RequestScope;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
@RequestScope
@Component
public class CommentServiceImpl implements CommentService {

    @Value(value = "${backend.server.url}")
    private String backendUrl;

    @Override
    public Comment find(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/comment/" + id, Comment.class);
    }

    @Override
    public ResponseEntity<Comment> add(Comment comment) {
        RestTemplate restTemplate = new RestTemplate();
        try {
            return new ResponseEntity<>(restTemplate.postForObject(backendUrl + "/api/comment/", comment, Comment.class), HttpStatus.OK);
        } catch (HttpStatusCodeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public List<Comment> findByUserId(long id) {
        RestTemplate restTemplate = new RestTemplate();
        Comment[] comments = restTemplate.getForObject(backendUrl + "/api/comment/user/" + id, Comment[].class);
        return comments == null ? Collections.emptyList() : Arrays.asList(comments);
    }

    @Override
    public List<Comment> findByArticleId(long id) {
        RestTemplate restTemplate = new RestTemplate();
        Comment[] comments = restTemplate.getForObject(backendUrl + "/api/comment/article/" + id, Comment[].class);
        return comments == null ? Collections.emptyList() : Arrays.asList(comments);
    }

    @Override
    public ResponseEntity delete(long id) {
        RestTemplate restTemplate = new RestTemplate();
        try {
            restTemplate.delete(backendUrl + "/api/comment/" + id, Comment.class);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (HttpStatusCodeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
