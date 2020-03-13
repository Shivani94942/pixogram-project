package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.UploadMedia;

@Repository
public interface UploadMediaRepository extends CrudRepository<UploadMedia, Integer> {

	public List<UploadMedia> getByUid(int uid);
}
