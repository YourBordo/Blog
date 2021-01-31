package com.leverx.project.controller;

import com.leverx.project.entity.Tag;
import com.leverx.project.service.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;
import java.util.Map;

@RequestScope
@RestController
@RequestMapping("/api/tag")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Tag getTagById(@PathVariable(name = "id") long id) {
        return tagService.find(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Map<String, Integer> getTagCloud() {
        return tagService.getTagCloud();
    }

    @RequestMapping(value = "/tagName={tagName}", method = RequestMethod.GET)
    public List<Tag> getTagsByTagNameLike(@PathVariable(name = "tagName") String tagName) {
        return tagService.findLike(tagName);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Tag> createTag(@RequestBody Tag tag) {
        return tagService.add(tag);
    }
}
