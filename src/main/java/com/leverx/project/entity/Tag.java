package com.leverx.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Tag {
    @Id
    @Column(name = "id")
    private long id;
    @Column(name = "tag_name")
    private String tagName;

    @ManyToMany
    @JoinTable(
            name = "article_tag",
            joinColumns = @JoinColumn(name = "article_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id")
    )
    @JsonIgnore
    private List<Article> articles;


    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
}
