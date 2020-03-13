package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Follow;
import com.example.demo.service.FollowService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FollowController {
	
	@Autowired
	FollowService followService;
	
	@PostMapping("/follow/create")
	public Follow createFollower(@RequestBody Follow follow) throws IOException {
    	
		return followService.createFollower(follow);
    }

	 @GetMapping("/follow/following/{myid}")
	 public List<Follow> getFollwer(@PathVariable int myid) throws IOException {	 
		 return followService.getFollowerByMyid(myid);
	 }
	 
	 @GetMapping("/follow/follower/{userid}")
	 public List<Follow> getFollwing(@PathVariable int userid) throws IOException {	 
		 return followService.getFollowingByUserid(userid);
	 }
}
