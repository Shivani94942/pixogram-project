package com.example.demo.service;

import java.util.Optional;

import com.example.demo.entity.Login;
import com.example.demo.entity.User;

public interface UserService {

	Login createLogin(Login login);

	User createUser(User user);

	User findByName(String name);

	Login getByUsername(String name);

	Optional<User> findById(int id);

	Optional<Login> findLoginById(int id);

}
