import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ad } from 'src/app/models/IAd';
import { AdsService } from 'src/app/services/ads.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-org-ad',
  templateUrl: './org-ad.component.html',
  styleUrls: ['./org-ad.component.scss'],
})
export class OrgAdComponent implements OnInit {
  @Input() ad!: Ad;
  constructor(private adsService: AdsService) {}
  deleteAd() {
    this.adsService.deleteAd(this.ad.id);
  }
  ngOnInit(): void {}
}
