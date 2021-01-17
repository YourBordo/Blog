package com.leverx.project.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Article {
    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "article_text")
    private String articleText;

    @Column(name = "created_at")
    private String createdAt;

    @Column(name = "updated_at")
    private String updatedAt;

    @Column(name = "article_status")
    private String articleStatus;

    @JsonManagedReference(value="comment-article")
    @OneToMany(mappedBy = "article")
    private List<Comment> comments;

    @JsonBackReference(value="article-user")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "articles")
    @JsonIgnore
    private List<Tag> tags;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArticleText() {
        return articleText;
    }

    public void setArticleText(String articleText) {
        this.articleText = articleText;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getArticleStatus() {
        return articleStatus;
    }

    public void setArticleStatus(String articleStatus) {
        this.articleStatus = articleStatus;
    }
}
