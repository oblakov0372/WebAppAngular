import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Ad } from 'src/app/models/IAd';
import { AdsService } from 'src/app/services/ads.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-organization-ads',
  templateUrl: './organization-ads.component.html',
  styleUrls: ['./organization-ads.component.scss'],
})
export class OrganizationAdsComponent implements OnInit {
  constructor(
    public adsService: AdsService,
    private httpService: HttpService
  ) {}
  ngOnInit(): void {
    this.adsService.getOrgAds();
  }
}
