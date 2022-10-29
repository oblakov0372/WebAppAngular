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
    if (this.authService.isLoggedIn) {
      this.isEngage = !this.isEngage;
    } else {
      if (confirm('You must log in')) {
        this.router.navigate(['login']);
      }
    }
  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      if (this.ad.likes.includes(this.authService.loggedInUser.id)) {
        this.isClickLike = true;
      } else {
        this.isClickLike = false;
      }
    }
  }
}
