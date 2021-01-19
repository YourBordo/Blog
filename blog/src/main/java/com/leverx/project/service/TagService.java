package com.leverx.project.service;

import com.leverx.project.entity.Tag;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public interface TagService {
    Tag find(long id);
    Map<String, Integer> getTagCloud();
}
