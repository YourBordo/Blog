package com.leverx.project.service.impl;

import com.leverx.project.entity.Article;
import com.leverx.project.entity.Comment;
import com.leverx.project.entity.User;
import com.leverx.project.repository.ArticleRepository;
import com.leverx.project.repository.TagRepository;
import com.leverx.project.repository.UserRepository;
import com.leverx.project.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Article> find() {
        return articleRepository.findAll();
    }

    @Override
    public Article find(long id) {
        return articleRepository.findById(id);
    }

    @Override
    public List<Article> findByTagId(long id) {
        return tagRepository.findById(id).getArticles();
    }

    @Override
    public Article update(Article article) {
        articleRepository.deleteById(article.getId());
        return articleRepository.save(article);
    }

    @Override
    public Article add(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public List<Article> findByUserId(long id) {
        return userRepository.findById(id).getArticles();
    }

    @Override
    public Article delete(long id) {
        return articleRepository.deleteById(id);
    }
}
