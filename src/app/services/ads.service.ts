import { Injectable } from '@angular/core';
import { Ad, Category, Status, Type } from '../models/IAd';
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
  addAd(title: string, description: string, type: Type, category: Category) {
    let ad: Ad = {
      id: 0,
      title,
      description,
      type,
      category,
      likes: [],
      appliedUsers: [],
      organization: this.authService.loggedInUser.id,
    };
    this.httpService.addAd(ad).subscribe(() => this.getOrgAds());
  }
  deleteAd(id: number) {
    this.httpService.deleteAd(id).subscribe((deletedAd) => {
      this.orgAds = this.orgAds.filter((ad) => ad.id !== deletedAd.id);
    });
  }
  editAd(ad: Ad) {
    console.log(this.orgAds);
    this.httpService.editAd(ad).subscribe((_ad) => {
      console.log(_ad);
    });
    console.log(this.orgAds);
  }

  updateAd(ad: Ad) {
    this.httpService.editAd(ad).subscribe(() => {
      console.log(ad);
    });
  }
}
