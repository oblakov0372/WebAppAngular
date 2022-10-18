import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../models/IUser';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { User } from '../models/User';
export enum Roles {
  user = 'user',
  organization = 'organization',
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role!: Roles;
  isLoggedIn = false;
  loggedInUser!: IUser;
  constructor(private httpService: HttpService, private router: Router) {}
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  login(email: string, password: string, role: string): boolean {
    if (role === Roles.user) {
      this.loginUser(email, password);
    } else {
      this.loginOrganization(email, password);
    }
    return this.isLoggedIn;
  }

  loginUser(email: string, password: string) {
    this.httpService.getUsersData().subscribe((users) => {
      let searchUsers = users.filter(
        (user) => user.email === email && user.password === password
      );
      if (searchUsers.length !== 0) {
        this.loggedInUser = searchUsers[0];
        this.role = Roles.user;
        this.isLoggedIn = true;
        this.setToken(`dkqwd223${Roles.user}dqwd213`);
        this.router.navigate(['ads']);
      }
    });
  }

  loginOrganization(email: string, password: string) {
    this.httpService.getOrganizationsData().subscribe((organizations) => {
      let searchOrganizations = organizations.filter(
        (organization) =>
          organization.email === email && organization.password === password
      );
      if (searchOrganizations.length !== 0) {
        this.loggedInUser = searchOrganizations[0];
        this.role = Roles.organization;
        this.isLoggedIn = true;
        this.setToken(`dkqwd223${Roles.organization}dqwd213`);
      }
    });
  }
  logout() {
    this.isLoggedIn = false;
    this.setToken('');
  }
}
