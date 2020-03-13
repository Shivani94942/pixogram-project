import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UpdateModel } from 'src/app/models/update.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  logout(){
    sessionStorage.clear();
    console.log("logout")
  }

  registerSuccess = false;

  updateForm: FormGroup;
  username: String
  email: String
  password:String
  confirmpassword:String
  submitted:boolean=false


  constructor(private fb: FormBuilder, private userService: UserService,private router: Router) {}

  ngOnInit(): void {

    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }


    this.updateForm = this.fb.group({
      'username': [null, [Validators.required, Validators.minLength(3)]],
      'email': [null, [Validators.required, Validators.minLength(3)]],
      'password': [null, [Validators.required, Validators.minLength(8),Validators.maxLength(12), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]],
      'confirmpassword':[null, [Validators.required]],
    },
    { 
      validators: this.password1.bind(this)
    }
    );
  }

  onUpdate() {

   /*  let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    } */
    
    this.submitted = true;
    let user = new UpdateModel(this.username, this.password, this.email);
    /* ,this.dob */
    console.log("reg comp")
    console.log(user)
    let userid=sessionStorage.getItem("userid")

    this.userService.updateUser(user,Number(userid)).subscribe(
      //x=>this.registerForm=x); 
      data => console.log(user), error => console.log(error));
    this.registerSuccess = true;

    sessionStorage.clear();

    //registration success
    this.router.navigate(['/login']);

  }
  
/*   upload() {
    console.log("registered")
  } */

  password1(registerForm: FormGroup) {
    const { value: password } = registerForm.get('password');
    const { value: confirmPassword } = registerForm.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  
}
      
    




  
