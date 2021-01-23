package com.leverx.project.controller;

import com.leverx.project.entity.Tag;
import com.leverx.project.entity.User;
import com.leverx.project.service.TagService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Tag createTag(@RequestBody Tag tag) {
        return tagService.add(tag);
    }

}
