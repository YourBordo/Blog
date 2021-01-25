package com.leverx.project.service.impl;

import com.leverx.project.entity.Comment;
import com.leverx.project.service.CommentService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

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
    public Comment add(Comment comment) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(backendUrl + "/api/comment/", comment, Comment.class);
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
    public void delete(long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendUrl + "/api/comment/" + id, Comment.class);
    }
}
