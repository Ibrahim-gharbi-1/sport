import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:3000/users"
  constructor(private httpClient: HttpClient) { }
  getAllUsers() {
    return this.httpClient.get<{ T: any }>(this.userUrl)
  }
  addUser(userObj: any, photo: File) {
    let fData = new FormData();
    fData.append("firstName", userObj.firstName)
    fData.append("lastName", userObj.lastName)
    fData.append("email", userObj.email)
    fData.append("password", userObj.password)
    fData.append("role", userObj.role)
    fData.append("img", photo)
    return this.httpClient.post<{ isAdded: any }>(this.userUrl, fData)
  }
  login(userObj: any) {
    return this.httpClient.post<{ msg: string, user: any }>(this.userUrl + "/login", userObj)
  }
}
