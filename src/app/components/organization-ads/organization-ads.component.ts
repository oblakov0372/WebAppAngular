import {
  Component,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Ad } from 'src/app/models/IAd';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-organization-ads',
  templateUrl: './organization-ads.component.html',
  styleUrls: ['./organization-ads.component.scss'],
})
export class OrganizationAdsComponent implements OnInit {
  ads!: Ad[];
  constructor(
    private authService: AuthService,
    private httpService: HttpService
  ) {}
  ngOnInit(): void {
    this.httpService.getAds().subscribe({
      next: (data: Ad[]) =>
        (this.ads = data.filter((ad) => ad.organization === 2)),
    });
  }
}
