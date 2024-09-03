import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  user: any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  mess!: any
  login() {
    console.log("here:", this.user)
    this.userService.login(this.user).subscribe(
      (data) => {
        if (data.msg == "welcome") {
          let decoded:any=jwtDecode(data.user)
          sessionStorage.setItem("token",data.user)
          if (decoded.role == "admin") {
            this.router.navigate(["admin"])
          }
          else {
            this.router.navigate([""])
          }
        }
        else {
          this.mess = data.msg
        }
      }
    );

  }
}
