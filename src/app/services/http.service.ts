import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Category, Type } from '../models/IAd';
import { map } from 'rxjs/operators';
import { IUser } from '../models/IUser';
import { User } from '../models/User';
import { Organization } from '../models/Organization';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getAds() {
    return this.http.get<Ad[]>(
      'https://634a821c5df952851412e642.mockapi.io/ad'
    );
  }
  getUsersData(): Observable<User[]> {
    return this.http.get<User[]>(
      'https://634a821c5df952851412e642.mockapi.io/user'
    );
  }
  getOrganizationsData(): Observable<Organization[]> {
    return this.http.get<Organization[]>(
      'https://634a821c5df952851412e642.mockapi.io/organization'
    );
  }
  deleteAd(id: number): Observable<Ad> {
    return this.http.delete<Ad>(
      `https://634a821c5df952851412e642.mockapi.io/ad/${id}`
    );
  }
  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(
      `https://634a821c5df952851412e642.mockapi.io/user/${id}`
    );
  }
  deleteOrganization(id: number): Observable<IUser> {
    return this.http.delete<IUser>(
      `https://634a821c5df952851412e642.mockapi.io/organization/${id}`
    );
  }
  addAd(ad: Ad): Observable<Ad> {
    return this.http.post<Ad>(
      'https://634a821c5df952851412e642.mockapi.io/ad',
      ad
    );
  }
  editAd(ad: Ad): Observable<Ad> {
    return this.http.put<Ad>(
      `https://634a821c5df952851412e642.mockapi.io/ad/${ad.id}`,
      ad
    );
  }
  editUser(user: IUser) {
    return this.http.put<IUser>(
      `https://634a821c5df952851412e642.mockapi.io/user/${user.id}`,
      user
    );
  }
  editOrganization(organization: IUser) {
    return this.http.put<IUser>(
      `https://634a821c5df952851412e642.mockapi.io/organization/${organization.id}`,
      organization
    );
  }
}
