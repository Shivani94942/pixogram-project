package com.example.demo.entity;

import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.Setter;


@Entity
@AllArgsConstructor
@Getter
@Setter

public class User {

	@Id
	private int id;
	private String fname;
	private String lname;
	private String username;
	private String password;
	private String email;
	private String profilepic;
	public User( ) {
		super();
		Random rand = new Random();
		int resRandom = rand.nextInt((9999 - 100) + 1) + 10;
		this.id = resRandom;
	}
	
	
}
