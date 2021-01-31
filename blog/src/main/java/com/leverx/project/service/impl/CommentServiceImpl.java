package com.leverx.project.service.impl;

import com.leverx.project.entity.Comment;
import com.leverx.project.repository.ArticleRepository;
import com.leverx.project.repository.CommentRepository;
import com.leverx.project.repository.UserRepository;
import com.leverx.project.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;
import java.util.Optional;

@RequestScope
@Component
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;

    public CommentServiceImpl(CommentRepository commentRepository, UserRepository userRepository, ArticleRepository articleRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.articleRepository = articleRepository;
    }

    @Override
    public List<Comment> findByUserId(long id) {
        Optional<List<Comment>> optionalComments =
                Optional.ofNullable(userRepository.findById(id).getComments());
        return optionalComments.orElse(null);
    }

    @Override
    public List<Comment> findByArticleId(long id) {
        Optional<List<Comment>> optionalComments =
                Optional.ofNullable(articleRepository.findById(id).getComments());
        return optionalComments.orElse(null);
    }

    @Override
    public Comment find(long id) {
        Optional<Comment> optionalComment =
                Optional.ofNullable(commentRepository.findById(id));
        return optionalComment.orElse(null);
    }

    @Override
    public ResponseEntity delete(long id) {
        try {
            commentRepository.deleteById(id);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }

    @Override
    public ResponseEntity<Comment> add(Comment comment) {
        try {
            return ResponseEntity.ok(commentRepository.save(comment));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}
