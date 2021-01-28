package com.leverx.project.controller;

import com.leverx.project.entity.Article;
import com.leverx.project.pagination.PageWrapper;
import com.leverx.project.service.ArticleService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/article")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Article> getAllArticles() {
        return articleService.find();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Article> getArticle(@PathVariable(name = "id") long id) {
        Article article = articleService.find(id);
        return ResponseEntity.ok(article);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public List<Article> getArticlesByUserId(@PathVariable(name = "id") long id) {
        return articleService.findByUserId(id);
    }

    @RequestMapping(value = "/tag/{id}", method = RequestMethod.GET)
    public List<Article> getArticleByTagId(@PathVariable(name = "id") long id) {
        return articleService.findByTagId(id);
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

    @RequestMapping(value = "/title={title}", method = RequestMethod.GET)
    public List<Article> getArticlesByTitleLike(@PathVariable(name = "title") String title) {
        return articleService.findLike(title);
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void updateArticle(@RequestBody Article article) {
        articleService.update(article);
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Article createArticle(@RequestBody Article article) {
        return articleService.add(article);
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteArticle(@PathVariable(name = "id") long id) {
        articleService.delete(id);
    }

}
