import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mediadetail',
  templateUrl: './mediadetail.component.html',
  styleUrls: ['./mediadetail.component.css']
})
export class MediadetailComponent implements OnInit {

  media:any=[]
  constructor(private uploadService: UploadService, private router:Router) { }

  ngOnInit(): void {

    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }

    let tempid=sessionStorage.getItem("intentid")
    console.log(tempid+ "mediadetails")

  
    let uid = Number(tempid);

    this.uploadService.getOneUserMedia(uid).subscribe(
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

}
