import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
decoded:any
  constructor( private  router:Router) { }

  ngOnInit() {
  }
  isLogedIn(){
    let user:any= sessionStorage.getItem("token")
   if (user) {
    this.decoded=jwtDecode(user)
   }
   //(!!:if not not ,exp:if not not user = true or false )
   return !!this.decoded
  }
logOut(){
  sessionStorage.removeItem("token")
  this.router.navigate(['/'])
}
}
