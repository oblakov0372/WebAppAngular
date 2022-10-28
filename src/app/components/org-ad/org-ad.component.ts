import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  isOpenModal = false;
  isDeleted = false;
  isOpenAppliedUsers = false;
  editForm!: FormGroup;
  constructor(private adsService: AdsService) {}
  deleteAd() {
    this.adsService.deleteAd(this.ad.id);
    this.isDeleted = true;
  }
  editAd() {
    this.isOpenModal = false;
    let editedAd: Ad = {
      id: this.ad.id,
      title: this.editForm.value.title,
      description: this.editForm.value.description,
      type: this.editForm.value.type,
      category: this.editForm.value.category,
      likes: this.ad.likes,
      appliedUsers: this.ad.appliedUsers,
      organization: this.ad.organization,
    };
    console.log(editedAd);
    this.adsService.editAd(editedAd);
    this.ad = editedAd;
  }
  onClickAppliedUsers() {
    this.isOpenAppliedUsers = !this.isOpenAppliedUsers;
    console.log(123);
  }
  onClickOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      title: new FormControl(`${this.ad.title}`),
      description: new FormControl(`${this.ad.description}`),
      type: new FormControl(`${this.ad.type}`),
      category: new FormControl(`${this.ad.category}`),
    });
  }
}
