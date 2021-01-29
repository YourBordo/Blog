package com.leverx.project.service;

import com.leverx.project.entity.Article;
import com.leverx.project.pagination.PageWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ArticleService {
    List<Article> find();
    ResponseEntity   delete(long id);
    Article find(long id);
    List<Article> findByUserId(long id);
    List<Article> findByTagId(long id);
    ResponseEntity<Article> update(Article article);
    ResponseEntity<Article> add(Article article);
    PageWrapper<Article> findAll(int pageNumber, int pageSize, String sortBy, String order);
    PageWrapper<Article> findAllByUserId(long userId, int pageNumber, int pageSize,
                                         String sortBy, String order);
    List<Article> findLike(String title);
}
