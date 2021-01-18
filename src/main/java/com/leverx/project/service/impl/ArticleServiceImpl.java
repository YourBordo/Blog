package com.leverx.project.service.impl;

import com.leverx.project.entity.Article;
import com.leverx.project.repository.ArticleRepository;
import com.leverx.project.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    ArticleRepository articleRepository;

    @Override
    public List<Article> find() {
        return articleRepository.findAll();
    }

    @Override
    public Article delete(long id) {
       return articleRepository.deleteById(id);
    }
}
