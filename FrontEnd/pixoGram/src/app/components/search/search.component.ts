import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { LoginModel } from 'src/app/models/login.model';
import { FollowModel } from 'src/app/models/follow.model';
import { Router } from '@angular/router';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {

  user:LoginModel
  fllw:FollowModel
  searchResult=false
  noResult=true

  constructor(private userService: UserService,private router:Router) {}
  picurl:string;

  ngOnInit(): void {
    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }
  }

  searchUser(data) {
    console.log(data);
    this.userService.getUserByName(data).subscribe(
      name => {
        console.log(name);
        this.user=JSON.parse(JSON.stringify(name));

        this.searchResult=true
        this.noResult=false
        console.log(this.user)
      },
      error => console.log(error),
      () => {
        console.log("completed");
      }
    );
  }

  follow(data){
    console.log("following")
    console.log(data)
    let myuid = sessionStorage.getItem("userid");
    console.log(myuid);
    this.fllw = new FollowModel(Number(myuid),data);
    this.userService.follow(this.fllw).subscribe((flw)=>
    console.log(flw)
    )

  }

  logout(){
    sessionStorage.clear();
    console.log("logout")
  }



}
