import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';
import { FollowModel } from 'src/app/models/follow.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
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

    for(let i=0;this.fllwmodel.length;i++){
      console.log(this.fllwmodel[i].userid)

      this.uploadService.getUserMedia(Number(this.fllwmodel[i].userid)).subscribe(
        src => {
          console.log(src);
          this.media = src;
          this.arrofmedia = this.arrofmedia.concat(this.media);
          console.log(i + this.arrofmedia)
          /* this.myMedia=JSON.stringify(src);
      console.log(this.myMedia) */
        },
        error => console.log(error),
        () => {
          console.log("completed");
        }
      );
      }
   

  }
   
  
)
    
  
console.log(this.arrofmedia+"jkjdsah");    
    
    
  
    
 
  //displaing follwers media
 /*  this.uploadService.getUserMedia(uid).subscribe(
    src => {
      console.log(src);
      this.media = src;
      /* this.myMedia=JSON.stringify(src);
  console.log(this.myMedia) 
    },
    error => console.log(error),
    () => {
      console.log("completed");
    }
  ); */



    

  }

  getId(data){
    console.log(data)
    sessionStorage.setItem("intentid",data)
    
  }



}
