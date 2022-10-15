import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad } from '../models/IAd';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('assets/api.json');
  }
}
