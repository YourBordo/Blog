package com.leverx.project.service.impl;

import com.leverx.project.entity.Tag;
import com.leverx.project.repository.TagRepository;
import com.leverx.project.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@RequestScope
@Component
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;

    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    public Tag find(long id) {
        Optional<Tag> optionalTag = Optional.ofNullable(tagRepository.findById(id));
        return optionalTag.orElse(null);
    }

    @Override
    public Map<String, Integer> getTagCloud() {
        Optional<List<Tag>> optionalTags = Optional.ofNullable(tagRepository.findAll());
        if(optionalTags.isPresent()) {
            int count;
            HashMap<String, Integer> cloud = new HashMap<>();
            for (Tag tag : optionalTags.get()) {
                count = tag.getArticles().size();
                cloud.put(tag.getTagName(), count);
            }
            return cloud;
        }
        return null;
    }

    @Override
    public ResponseEntity<Tag> add(Tag tag) {
        try{
            return ResponseEntity.ok(tagRepository.save(tag));
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @Override
    public List<Tag> findLike(String tagName) {
        Optional<List<Tag>> optionalTag =
                Optional.ofNullable(tagRepository.getAllByTagNameContaining(tagName));
        return optionalTag.orElse(null);
    }
}
