package com.leverx.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.leverx.project.entity.User;

@Repository
public interface UserRepository  extends CrudRepository<User, Long> {
    User findByFirstName(String firstName);

}
