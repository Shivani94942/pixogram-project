package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.UploadMedia;

public interface UploadMediaService {

	UploadMedia createMedia(UploadMedia uploadMedia);

	List<UploadMedia> getMediaByUid(int userId);

	Optional<UploadMedia> getMediaById(int userId);
}
