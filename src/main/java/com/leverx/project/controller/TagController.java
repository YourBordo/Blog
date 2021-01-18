package com.leverx.project.controller;

import com.leverx.project.entity.Tag;
import com.leverx.project.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/tag")
public class TagController {
    @Autowired
    TagService tagService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Tag getTagById(@PathVariable(name = "id") long id) {
        return tagService.find(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Map<String, Integer> getTagCloud() {
        return tagService.getTagCloud();
    }
}
