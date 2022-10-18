import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from '../models/IAd';
import { map } from 'rxjs/operators';
import { IUser } from '../models/IUser';
import { User } from '../models/User';
import { Organization } from '../models/Organization';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('assets/api.json');
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
}
