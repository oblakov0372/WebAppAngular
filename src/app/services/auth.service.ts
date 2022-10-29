import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../models/IAd';
import { IUser } from '../models/IUser';
import { AdsService } from './ads.service';
import { HttpService } from './http.service';
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
  constructor(
    private httpService: HttpService,
    private router: Router,
    private adsServices: AdsService
  ) {}
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
      } else {
        alert('Пароль не верный');
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
        this.router.navigate(['organization-ads']);
      } else {
        alert('Пароль не верный');
      }
    });
  }
  logout() {
    this.loggedInUser = Object();
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  changeData(name: string, password: string) {
    this.loggedInUser.name = name;
    this.loggedInUser.password = password;
  }
  deleteAcount(id: number) {
    if (this.role === Roles.organization) {
      this.adsServices.getOrgAds();
      let ads: Ad[] = this.adsServices.orgAds;
      ads.forEach((ad) => {
        this.adsServices.deleteAd(ad.id);
      });
      this.httpService.deleteOrganization(id).subscribe(() => {
        this.logout();
      });
    } else {
      this.httpService.deleteUser(id).subscribe(() => {
        this.logout();
      });
    }
  }
}
