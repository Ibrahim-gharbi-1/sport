import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  path!: string
  photo: any;
  constructor(private formBuilder: FormBuilder, private mService: UserService, private router: Router
  ) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPassword: ['']
    })


  }
  signupForm!: FormGroup
  mess!: string
  signup() {
    if (this.path == '/signupAdmin') {
      this.signupForm.value.role = 'admin'
    }
    else {
      this.signupForm.value.role = 'client'
    }
    console.log("here user", this.signupForm.value)
    this.mService.addUser(this.signupForm.value, this.photo).subscribe(
      (response) => {

        if (response.isAdded == true) {
          this.router.navigate(["/login"])
          this.mess = "added seccsusfuly"
        }
        else {
          this.mess = "failed"
        }
        console.log(this.mess)
      }
    );
  }
  selectFile(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.photo = inputElement.files[0];
      console.log(this.photo)
    }
   
  }
}
