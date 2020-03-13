package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Login;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/user/create")
	public User createUser(@RequestBody User user)
	{
		Login login = new Login(user.getId(), user.getUsername(), user.getPassword(), user.getProfilepic());
		userService.createLogin(login);
		return userService.createUser(user);
	}
	@GetMapping("/user/{name}") 
	public User getUserByName(@PathVariable(value = "name") String name)
	{
		return userService.findByName(name);
	}

	@GetMapping("/user/login/{name}") 
	public Login getLoginByName(@PathVariable(value = "name") String name)
	{
		
		return userService.getByUsername(name);
	}

	@GetMapping("/user/id/{id}")
	public Optional<User> getUserById(@PathVariable(value="id") int id) {
		return userService.findById(id);
	}
	
	@PutMapping("/user/update/{id}")
	public Optional<User> updateUser(@RequestBody User user, @PathVariable(value = "id") int id) {
		Optional<User> u1=userService.findById(id);
		User u2=u1.get();
		u2.setUsername(user.getUsername());
		u2.setPassword(user.getPassword());
		u2.setEmail(user.getEmail());
		
		Optional<Login> l1=userService.findLoginById(id);
		Login l2=l1.get();
		l2.setUsername(user.getUsername());
		l2.setPassword(user.getPassword());
		
		userService.createUser(u2);
		userService.createLogin(l2);
		
		return u1;
	}
}
