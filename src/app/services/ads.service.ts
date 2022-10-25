import { Injectable } from '@angular/core';
import { Ad } from '../models/IAd';
import { Organization } from '../models/Organization';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  orgAds: Ad[] = [];
  logOrganization!: Organization[];
  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}
  getOrgAds() {
    this.httpService
      .getAds()
      .subscribe(
        (data) =>
          (this.orgAds = data.filter(
            (ad) => ad.organization === this.authService.loggedInUser.id
          ))
      );
  }
  deleteAd(id: number) {
    this.httpService.deleteAd(id).subscribe(() => {
      this.orgAds = this.orgAds.filter((ad) => ad.id !== id);
    });
  }
}
