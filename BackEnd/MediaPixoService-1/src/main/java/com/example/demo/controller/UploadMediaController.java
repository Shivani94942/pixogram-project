package com.example.demo.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UploadMedia;
import com.example.demo.service.UploadMediaService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UploadMediaController {

	@Autowired
	UploadMediaService uploadMediaService;
	
	@PostMapping("/media/create/{userId}/{userName}")
	public UploadMedia createMedia(@RequestBody UploadMedia media,@PathVariable int userId, @PathVariable String userName) throws IOException {
		/*
		 * SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		 * Date date = new Date(); String d = formatter.format(date);
		 * System.out.println(d);
		 * 
		 */
		
		 Date date = Calendar.getInstance().getTime();  
         DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");  
         String strDate = dateFormat.format(date); 
		
		UploadMedia uploadMedia=new UploadMedia(userId, media.getTitle(), media.getDescription(), media.getTags(), media.getUrl(),strDate,userName);
		uploadMediaService.createMedia(uploadMedia);
		return uploadMedia;
    }

	 @GetMapping("/media/uid/{userId}")
	 public List<UploadMedia> getAllUserMedia(@PathVariable int userId) throws IOException {	 
		 return uploadMediaService.getMediaByUid(userId);
	 }
	 @GetMapping("/media/id/{userId}")
	 public Optional<UploadMedia> getUserMedia(@PathVariable int userId) throws IOException {	 
		 return uploadMediaService.getMediaById(userId);
	 }
 
	
}