package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Login;

public interface LoginRepository extends CrudRepository<Login, Integer>{

	public Login getByUsername(String username);
	public Login findByUsernameAndPassword(String username, String password);
}
