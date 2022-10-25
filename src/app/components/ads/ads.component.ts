import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from 'src/app/models/IAd';
import { IUser } from 'src/app/models/IUser';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  ads: Ad[] = [];
  constructor(private httpService: HttpService, private http: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .getAds()
      .subscribe({ next: (data: any) => (this.ads = data) });
  }
}
