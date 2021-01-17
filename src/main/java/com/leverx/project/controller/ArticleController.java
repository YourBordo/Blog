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

    //TODO deleting with relation manyToMany
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteArticle(@PathVariable(name = "id") long id) {
        articleService.delete(id);//????
    }

}
