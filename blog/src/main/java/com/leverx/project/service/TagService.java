package com.leverx.project.service;

import com.leverx.project.entity.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;
import java.util.Map;
@RequestScope
@Component
public interface TagService {
    Tag find(long id);
    Map<String, Integer> getTagCloud();
    ResponseEntity<Tag> add(Tag tag);
    List<Tag> findLike(String tagName);
}
