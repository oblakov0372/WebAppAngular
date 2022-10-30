import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Status } from 'src/app/models/IAd';
import { IUser } from 'src/app/models/IUser';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  sortValues = ['All ads', 'Participate ads'];
  sortIsVisible = false;
  activedSort = 'All ads';
  ads: Ad[] = [];
  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}
  onClickSort() {
    this.sortIsVisible = !this.sortIsVisible;
  }
  changeActivedSort(item: string) {
    this.activedSort = item;
    this.sortIsVisible = false;
    if (this.activedSort === this.sortValues[1]) {
      this.ads = this.ads.filter((ad) =>
        ad.appliedUsers.find(
          (user) => user.id === this.authService.loggedInUser.id
        )
      );
    } else {
      this.httpService.getAds().subscribe((ads) => {
        this.ads = ads;
      });
    }
  }
  ngOnInit(): void {
    this.httpService.getAds().subscribe((ads) => {
      this.ads = ads;
    });
  }
}
