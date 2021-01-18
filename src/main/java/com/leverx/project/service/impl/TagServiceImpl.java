package com.leverx.project.service.impl;

import com.leverx.project.entity.Tag;
import com.leverx.project.repository.TagRepository;
import com.leverx.project.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;

    @Override
    public Tag find(long id) {
        return tagRepository.findById(id);
    }

    @Override
    public Map<String, Integer> getTagCloud() {
        List<Tag> tags = tagRepository.findAll();
        int count;
        HashMap<String, Integer> cloud = new HashMap<>();
        for (Tag tag : tags) {
            count = tagRepository.countAllByTagName(tag.getTagName());
            cloud.put(tag.getTagName(), count);
        }
        return cloud;
    }
}
