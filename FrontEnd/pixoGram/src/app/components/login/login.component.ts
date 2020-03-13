import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    let authval = sessionStorage.getItem("auth");
    if(authval == "true")
    {
      this.router.navigate(['/newsfeed']);
    }
    
  }

  loginForm: FormGroup;
  userName1: string = "";
  password: string = "";
  post: any;
  invalidLogin = false;
  users:UserModel[];
  loginuser:LoginModel;

  constructor(private fb: FormBuilder,private router: Router,private userService: UserService) {
  //  this.userService.getUsers().subscribe(response => this.users = response);
    this.loginForm = fb.group({
      'userName1': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],

    });
  }

  onlogin(data) {

    console.log(data.userName1)

  
    this.userService.getLoginByName(data.userName1).subscribe((login) => {console.log(login)
    this.loginuser=JSON.parse(JSON.stringify(login))
    console.log(this.loginuser)

    if(this.loginuser.password==data.password){
      console.log("login successfull")
      
      sessionStorage.setItem("auth","true");
      sessionStorage.setItem("userpic",this.loginuser.profilepic);
      sessionStorage.setItem("userid",this.loginuser.id);
      sessionStorage.setItem("username",this.loginuser.username);
      this.router.navigate(['/newsfeed']);
    }
  
    },
    error => console.log(error),() => { console.log("completed") }
    );
     
  }


}
