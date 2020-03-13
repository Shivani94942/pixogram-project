import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerSuccess = false;

  registerForm: FormGroup;
  fname:String
  lname:String
  username: String
  dob: String
  email: String
  password:String
  confirmpassword:String
  profilepic:string
  submitted:boolean=false
  file: File
  

  //firebase profile pic attributes
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  getDownloadURL: Observable<string>;
 

  constructor(private fb: FormBuilder, private userService: UserService,private afStorage: AngularFireStorage,private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'fname': [null, [Validators.required, Validators.minLength(3)]],
      'lname': [null, [Validators.required, Validators.minLength(3)]],
      'username': [null, [Validators.required, Validators.minLength(3)]],
      'dob': [null, [Validators.required, Validators.minLength(3)]],
      'email': [null, [Validators.required, Validators.minLength(3)]],
      'password': [null, [Validators.required, Validators.minLength(8),Validators.maxLength(12), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]],
      'confirmpassword':[null, [Validators.required]],
      'profilepic':[null]
    },
    { 
      validators: this.password1.bind(this)
    }
    );
  }

  onRegister() {

    let authval = sessionStorage.getItem("auth");
    if (authval == null) {
      this.router.navigate(["/login"]);
    }
    
    this.submitted = true;
    let user = new UserModel(this.fname, this.lname, this.username, this.password, this.email,this.profilepic);
    /* ,this.dob */
    console.log("reg comp")
    console.log(user)

    this.userService.createUser(user).subscribe(
      //x=>this.registerForm=x); 
      data => console.log(user), error => console.log(error));
    this.registerSuccess = true;

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

  fileChange(event: any) {

    //firebase for profile pic
    const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(id);
  this.task = this.ref.put(event.target.files[0]);
  // this.getDownloadURL = this.ref.getDownloadURL();
  // console.log(this.getDownloadURL);
  this.task.snapshotChanges().pipe(
    finalize(() => {
      this.ref.getDownloadURL().subscribe(url => {
        console.log(url); // <-- do what ever you want with the url..
       this.profilepic=url;
       console.log(this.profilepic)
       

      });
    })
  ).subscribe();



}
}
      
    




  
