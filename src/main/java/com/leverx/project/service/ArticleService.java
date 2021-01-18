package com.leverx.project.service;

import com.leverx.project.entity.Article;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public interface ArticleService {
    List<Article> find();
    Article  delete(long id);
    Article find(long id);
    List<Article> findByUserId(long id);
    List<Article> findByTagId(long id);
    Article update(Article article);
    Article add(Article article);
}
