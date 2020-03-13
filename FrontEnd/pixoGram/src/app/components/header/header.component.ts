import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }
  userpic:string ;
  ngOnInit(): void {
  this.userpic = sessionStorage.getItem("userpic");
  console.log(this.userpic);

  }

}
