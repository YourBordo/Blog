package com.leverx.project.service.impl;

import com.leverx.project.entity.User;
import com.leverx.project.repository.ArticleRepository;
import com.leverx.project.repository.CommentRepository;
import com.leverx.project.repository.UserRepository;
import com.leverx.project.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import java.util.Optional;

@RequestScope
@Component
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final CommentRepository commentRepository;

    public UserServiceImpl(UserRepository userRepository,
                           ArticleRepository articleRepository,
                           CommentRepository commentRepository) {
        this.userRepository = userRepository;
        this.articleRepository = articleRepository;
        this.commentRepository = commentRepository;
    }

    @Override
    public User find(String email) {
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findByEmail(email));
        return optionalUser.orElse(null);
    }

    @Override
    public ResponseEntity<User> delete(long id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>(new User(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new User(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<User> add(User user) {
        try {
            return ResponseEntity.ok(userRepository.save(user));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public User find(long id) {
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findById(id));
        return optionalUser.orElse(null);
    }

    @Override
    public User findByArticleId(long id) {
        Optional<User> optionalUser = Optional.ofNullable(articleRepository.findById(id).getUser());
        return optionalUser.orElse(null);
    }

    @Override
    public User findByCommentId(long id) {
        Optional<User> optionalUser = Optional.ofNullable(commentRepository.findById(id).getUser());
        return optionalUser.orElse(null);
    }
}
