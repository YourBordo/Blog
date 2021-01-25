package com.leverx.project.service.impl;

import com.leverx.project.entity.Article;
import com.leverx.project.entity.enums.ArticleStatus;
import com.leverx.project.pagination.PageWrapper;
import com.leverx.project.repository.ArticleRepository;
import com.leverx.project.repository.TagRepository;
import com.leverx.project.repository.UserRepository;
import com.leverx.project.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;
    private final TagRepository tagRepository;
    private final UserRepository userRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository, TagRepository tagRepository, UserRepository userRepository) {
        this.articleRepository = articleRepository;
        this.tagRepository = tagRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Article> find() {
        Optional<List<Article>> optionalArticles =
                Optional.ofNullable(articleRepository.findAll());
        return optionalArticles.orElse(null);
    }

    @Override
    public Article find(long id) {
        Optional<Article> optionalArticle = Optional.ofNullable(articleRepository.findById(id));
        return optionalArticle.orElse(null);
    }

    @Override
    public Article findByTagId(long id) {
        Optional<Article> optionalArticle =
                Optional.ofNullable(tagRepository.findById(id).getArticles().get(0));
        return optionalArticle.orElse(null);
    }

    @Override
    public Article update(Article article) {
        articleRepository.deleteById(article.getId());
        return articleRepository.save(article);
    }

    @Override
    public List<Article> findLike(String title) {
        Optional<List<Article>> optionalArticles =
                Optional.ofNullable(articleRepository.getAllByTitleContaining(title));
        return optionalArticles.orElse(null);
    }

    @Override
    public Article add(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public List<Article> findByUserId(long id) {
        Optional<List<Article>> optionalArticles =
                Optional.ofNullable(userRepository.findById(id).getArticles());
        return optionalArticles.orElse(null);
    }

    @Override
    public void delete(long id) {
        articleRepository.deleteById(id);
    }

    @Override
    public PageWrapper<Article> findAll(int pageNumber, int pageSize, String sortBy, String order) {
        if (pageNumber >= 0 && pageSize >= 0 &&
                (sortBy.equals("id") || sortBy.equals("title") || sortBy.equals("createdAt") ||
                        sortBy.equals("updatedAt") || sortBy.equals("articleStatus")) &&
                (order.equals("asc") || order.equals("desc"))) {
            PageRequest pageRequest = this.createRequest(pageNumber, pageSize, sortBy, order);
            Page<Article> page = articleRepository.findAll(pageRequest);
            return new PageWrapper<>(page.getContent(), page.getTotalPages());

        }
        return null;
    }

    @Override
    public PageWrapper<Article> findAllByUserId(long id, int pageNumber, int pageSize, String sortBy, String order) {
        if (pageNumber >= 0 && pageSize >= 0 &&
                (sortBy.equals("id") || sortBy.equals("title") || sortBy.equals("createdAt") ||
                        sortBy.equals("updatedAt") || sortBy.equals("articleStatus")) &&
                (order.equals("asc") || order.equals("desc"))) {
            PageRequest pageRequest = this.createRequest(pageNumber, pageSize, sortBy, order);
            Page<Article> page = articleRepository.findAllByUserId(id, pageRequest);
            return new PageWrapper<>(page.getContent(), page.getTotalPages());
        }
        return null;
    }

    private PageRequest createRequest(int pageNumber, int pageSize, String sortBy, String order) {
        Sort sort;
        if ("desc".equals(order)) {
            sort = Sort.by(sortBy).descending();
        } else {
            sort = Sort.by(sortBy).ascending();
        }
        return PageRequest.of(pageNumber, pageSize, sort);
    }
}
