package com.leverx.project.controller;

import com.leverx.project.entity.Article;
import com.leverx.project.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Article deleteArticle(@PathVariable(name = "id") long id) {
        return articleService.delete(id);
    }

    //PUT update article, POST new article (includes add tag)
}
