import { Component, OnInit } from '@angular/core';
import {NewsFeed} from 'src/app/models/news-model';
import { FollowModel } from 'src/app/models/follow.model';
import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  feedusers:any=[];
  
  //sdkg

  fllwmodel:FollowModel[];
  media: any = [];
  arrofmedia:any = [];

  constructor(private userService: UserService, private uploadService:UploadService,private router: Router) { }

  ngOnInit(): void {
    //authentication
    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }

  let myid = sessionStorage.getItem("userid"); 
  console.log(myid) 
  this.userService.getFollowing(Number(myid)).subscribe(following =>{
    console.log(following)
    this.fllwmodel=JSON.parse(JSON.stringify(following))
    this.feedusers[0] = Number(myid);

    this.fllwmodel=this.fllwmodel.concat(this.feedusers[0])

    for(let i=0;this.fllwmodel.length ; i++){
      let newid = this.fllwmodel[i].userid;
      this.feedusers[i+1]=newid;
     // this.fllwmodel[i]=this.
     //console.log(this.feedusers[i])

     this.uploadService.getUserMedia(this.feedusers[i]).subscribe(
      src => {
        console.log(src);
        this.media = src;
        this.arrofmedia = this.arrofmedia.concat(this.media);
        console.log(i + this.arrofmedia)

      });
      
    }
  
  }  
  )

/* for(let k=0;this.feedusers.length;k++){
  console.log(this.feedusers[k] + " out")
} */

  }


  logout(){
    sessionStorage.clear();
    console.log("logout")
  }


}
