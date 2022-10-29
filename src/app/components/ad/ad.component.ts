import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad, Status } from 'src/app/models/IAd';
import { AdsService } from 'src/app/services/ads.service';
import { AuthService, Roles } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {
  @Input() ad!: Ad;
  isClickLike = false;
  isEngage = false;
  userStatus!: Status | undefined;
  constructor(
    private router: Router,
    public authService: AuthService,
    private adsService: AdsService
  ) {}
  onClickLike() {
    if (this.authService.isLoggedIn) {
      this.isClickLike = !this.isClickLike;

      this.isClickLike
        ? this.ad.likes.push(this.authService.loggedInUser.id)
        : (this.ad.likes = this.ad.likes.filter(
            (n) => n !== this.authService.loggedInUser.id
          ));
      this.adsService.updateAd(this.ad);
    } else {
      if (confirm('You must log in')) {
        this.router.navigate(['login']);
      }
    }
  }
  onClickEngage() {
    this.isEngage = !this.isEngage;
    this.ad.appliedUsers.push({
      id: this.authService.loggedInUser.id,
      status: Status.notViewed,
    });
    this.adsService.updateAd(this.ad);
    this.userStatus = Status.notViewed;
  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.userStatus = this.ad.appliedUsers.find(
        (user) => user.id === this.authService.loggedInUser.id
      )?.status;
      // Like
      if (this.ad.likes.includes(this.authService.loggedInUser.id)) {
        this.isClickLike = true;
      } else {
        this.isClickLike = false;
      }
      // Engage
      if (
        this.ad.appliedUsers.filter(
          (user) => user.id === this.authService.loggedInUser.id
        ).length !== 0
      ) {
        this.isEngage = true;
      } else {
        this.isEngage = false;
      }
    }
  }
}
