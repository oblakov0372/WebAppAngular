import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { HttpClient } from '@angular/common/http';
// export enum Roles {
//   user = 'user',
//   organization = 'organization',
// }
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // role!: Roles;
  // isLoggedIn = false;
  // loggedInUser!: IUser;
  constructor() {}
  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }
  // getToken() {
  //   return localStorage.getItem('token');
  // }
  // isLogged() {
  //   return this.getToken() !== null;
  // }
  // login(userInfo: {
  //   email: string;
  //   password: string;
  //   loginRole: string;
  // }): boolean {
  //   if (userInfo.loginRole == Roles.user) {
  //     this.loginUser(userInfo);
  //   } else if (userInfo.loginRole == Roles.organization) {
  //     this.loginOrganization(userInfo);
  //   }
  //   return this.isLoggedIn;
  // }
  // loginUser(userInfo: {
  //   email: string;
  //   password: string;
  // }): Observable<string | boolean> {}
  // loginOrganization(organizationInfo: { email: string; password: string }) {}

  // getData() {
  //   return this.http.get('assets/api.json');
  // }
}
