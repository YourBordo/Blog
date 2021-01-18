package com.leverx.project.controller;

import com.leverx.project.entity.Article;
import com.leverx.project.pagination.PageWrapper;
import com.leverx.project.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/article")
public class ArticleController {
    @Autowired
    ArticleService articleService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Article> getAllArticles() {
        return articleService.find();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Article> getArticle(@PathVariable(name = "id") long id) {
        Article article =  articleService.find(id);
        return ResponseEntity.ok(article);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public List<Article> getArticlesByUserId(@PathVariable(name = "id") long id) {
        return articleService.findByUserId(id);
    }

    @RequestMapping(value = "/tag/{id}", method = RequestMethod.GET)
    public List<Article> getArticlesByTagId(@PathVariable(name = "id") long id) {
        return articleService.findByTagId(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Article updateArticle(@RequestBody Article article) {
        return articleService.update(article);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Article createArticle(@RequestBody Article article) {
        return articleService.add(article);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteArticle(@PathVariable(name = "id") long id) {
         articleService.delete(id);
    }

    @RequestMapping(value = "/{page}/{size}/{sort}/{order}", method = RequestMethod.GET)
    public PageWrapper<Article> getAllArticles(@PathVariable("page") int page,
                                            @PathVariable("size") int size,
                                            @PathVariable("sort") String sortBy,
                                            @PathVariable("order") String order) {
        return articleService.findAll(page, size, sortBy, order);
    }
    @RequestMapping(value = "/{userId}/{page}/{size}/{sort}/{order}", method = RequestMethod.GET)
    public PageWrapper<Article> getArticlesByUserId(@PathVariable("userId") long id,
                                              @PathVariable("page") int page,
                                              @PathVariable("size") int size,
                                              @PathVariable("sort") String sortBy,
                                              @PathVariable("order") String order) {
        return articleService.findAllByUserId(id, page, size, sortBy, order);
    }
}
