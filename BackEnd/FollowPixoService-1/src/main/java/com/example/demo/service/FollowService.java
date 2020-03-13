package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Follow;

public interface FollowService {

	Follow createFollower(Follow follow);

	List<Follow> getFollowerByMyid(int myid);

	List<Follow> getFollowingByUserid(int userid);

}
