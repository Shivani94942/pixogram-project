import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-media',
  templateUrl: './my-media.component.html',
  styleUrls: ['./my-media.component.css']
})
export class MyMediaComponent implements OnInit {
  media: any = [];
  public images: any = [];
  myMedia: any = [];
  title: String;
  userid: string;

  constructor(
    private uploadService: UploadService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    //authentication
    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }
    
    this.userid = sessionStorage.getItem("userid");
    console.log(this.userid);

    let uid = Number(this.userid);

    this.uploadService.getUserMedia(uid).subscribe(
      src => {
        console.log(src);
        this.media = src;
        /* this.myMedia=JSON.stringify(src);
    console.log(this.myMedia) */
      },
      error => console.log(error),
      () => {
        console.log("completed");
      }
    );
  }
getId(data){
  console.log(data)
  sessionStorage.setItem("intentid",data)
  
}


}

