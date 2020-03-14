package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.entity.User;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	LoginRepository loginRepository;
	
	@Override
	public Login createLogin(Login login) {
		return loginRepository.save(login);
	}

	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User findByName(String name) {
		return userRepository.findByUsername(name);
	}

	@Override
	public Login getByUsername(String name) {
		return loginRepository.getByUsername(name);
	}
	

	@Override
	public Optional<User> findById(int id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id);
	}

	@Override
	public Optional<Login> findLoginById(int id) {
		// TODO Auto-generated method stub
		return loginRepository.findById(id);
	}

}
