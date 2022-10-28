import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  isOpenModal: boolean = false;
  createForm!: FormGroup;
  constructor(public adsService: AdsService) {}
  ngOnInit(): void {
    this.adsService.getOrgAds();
    this.createForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl('remote'),
      category: new FormControl('Office administration'),
    });
  }
  onClickOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
  createAd() {
    this.adsService.addAd(
      this.createForm.value.title,
      this.createForm.value.description,
      this.createForm.value.type,
      this.createForm.value.category
    );
    this.isOpenModal = false;
  }
}
