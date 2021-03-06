package com.leverx.project.repository;

import com.leverx.project.entity.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TagRepository extends CrudRepository<Tag, Long> {
    Tag findById(long id);
    Tag findByTagName(String tagName);
    List<Tag> findAll();
    int countAllByTagName(String tagName);
    List<Tag> getAllByTagNameContaining(String tagName);
}
