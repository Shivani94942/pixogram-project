package com.example.demo.entity;

import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity

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
	public User(int id, String fname, String lname, String username, String password, String email, String profilepic) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.email = email;
		this.profilepic = profilepic;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getProfilepic() {
		return profilepic;
	}
	public void setProfilepic(String profilepic) {
		this.profilepic = profilepic;
	}
	
	
	
}
