package com.leverx.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.leverx.project.entity.User;

@Repository
public interface UserRepository  extends CrudRepository<User, Long> {
    User findByEmail(String email);
    User findById(long id);

}
