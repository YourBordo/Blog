package com.leverx.project.service.impl;

import com.leverx.project.entity.Tag;
import com.leverx.project.service.TagService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.annotation.RequestScope;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RequestScope
@Component
public class TagServiceImpl implements TagService {

    @Value(value = "${backend.server.url}")
    private String backendUrl;

    @Override
    public Tag find(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/tag/" + id, Tag.class);
    }

    @Override
    public Map<String, Integer> getTagCloud() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendUrl + "/api/tag/", Map.class);
    }

    @Override
    public ResponseEntity<Tag> add(Tag tag) {
        RestTemplate restTemplate = new RestTemplate();
        try {
            return new ResponseEntity<>(restTemplate.postForObject(backendUrl + "/api/tag/", tag, Tag.class), HttpStatus.OK);
        } catch (HttpStatusCodeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public List<Tag> findLike(String tagName) {
        RestTemplate restTemplate = new RestTemplate();
        Tag[] tags = restTemplate.getForObject(backendUrl + "/api/tag/tagName=" + tagName, Tag[].class);
        return tags == null ? Collections.emptyList() : Arrays.asList(tags);
    }
}
