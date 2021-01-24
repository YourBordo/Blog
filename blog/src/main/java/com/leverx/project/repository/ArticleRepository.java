package com.leverx.project.repository;

import com.leverx.project.entity.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends CrudRepository<Article, Long> {
    List<Article> findAll();
    Article deleteById(long id);
    Article findById(long id);
    Page<Article> findAllByUserId(long userId, Pageable pageable);
    Page<Article> findAll(Pageable pageable);
    List<Article> getAllByTitleContaining(String title);
}
