package com.leverx.project.service;

import com.leverx.project.entity.Article;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public interface ArticleService {
    List<Article> find();
    Article  delete(long id);
}
