package com.leverx.project.service.impl;

import com.leverx.project.entity.Article;
import com.leverx.project.repository.ArticleRepository;
import com.leverx.project.repository.CommentRepository;
import com.leverx.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.leverx.project.entity.User;
import com.leverx.project.repository.UserRepository;

import java.util.Optional;

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
    public void delete(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User add(User user) {
        return userRepository.save(user);
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
