package com.leverx.project.service.impl;

import com.leverx.project.entity.Article;
import com.leverx.project.pagination.PageWrapper;
import com.leverx.project.service.ArticleService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
public class ArticleServiceImpl implements ArticleService {

    @Value(value = "${backend.server.url}")
    private String backendUrl;

    @Override
    public List<Article> find() {
        RestTemplate restTemplate = new RestTemplate();
        Article[] articles = restTemplate.getForObject(backendUrl + "/api/article/", Article[].class);
        return articles == null ? Collections.emptyList() : Arrays.asList(articles);
    }

    @Override
    public Article find(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/article/" + id, Article.class);
    }

    @Override
    public Article findByTagId(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/article/tag/" + id, Article.class);
    }

    @Override
    public void update(Article article) {
        RestTemplate restTemplate = new RestTemplate();
         restTemplate.put(backendUrl + "/api/article/", article, Article.class);
    }

    @Override
    public List<Article> findLike(String title) {
        RestTemplate restTemplate = new RestTemplate();
        Article[] articles = restTemplate.getForObject(backendUrl + "/api/article/title=" + title, Article[].class);
        return articles == null ? Collections.emptyList() : Arrays.asList(articles);
    }

    @Override
    public Article add(Article article) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(backendUrl + "/api/article/", article, Article.class);
    }

    @Override
    public List<Article> findByUserId(long id) {
        RestTemplate restTemplate = new RestTemplate();
        Article[] articles = restTemplate.getForObject(backendUrl + "/api/article/user/" + id, Article[].class);
        return articles == null ? Collections.emptyList() : Arrays.asList(articles);
    }

    @Override
    public void delete(long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendUrl + "/api/article/" + id, Article.class);
    }

    @Override
    public PageWrapper<Article> findAll(int pageNumber, int pageSize, String sortBy, String order) {
        RestTemplate restTemplate = new RestTemplate();
        String path = backendUrl + "/api/article/" + pageNumber + '/' + pageSize
                + '/' + sortBy + '/' + order;
        return restTemplate.getForObject(path, PageWrapper.class);

    }

    @Override
    public PageWrapper<Article> findAllByUserId(long id, int pageNumber, int pageSize, String sortBy, String order) {
        RestTemplate restTemplate = new RestTemplate();
        String path = backendUrl + "/api/article/" + id + '/' + pageNumber + '/' + pageSize
                + '/' + sortBy + '/' + order;
        return restTemplate.getForObject(path, PageWrapper.class);
    }

}
