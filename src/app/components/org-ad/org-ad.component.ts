import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ad, Status } from 'src/app/models/IAd';
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

  ngOnInit(): void {
    this.editForm = new FormGroup({
      title: new FormControl(`${this.ad.title}`),
      description: new FormControl(`${this.ad.description}`),
      type: new FormControl(`${this.ad.type}`),
      category: new FormControl(`${this.ad.category}`),
    });
  }
  acceptCandidate(_id: number) {
    this.ad.appliedUsers = this.ad.appliedUsers.filter(
      (user) => user.id !== _id
    );
    this.ad.appliedUsers.push({ id: _id, status: Status.confirmed });
    this.adsService.editAd(this.ad);
  }

  rejectCandidate(_id: number) {
    this.ad.appliedUsers = this.ad.appliedUsers.filter(
      (user) => user.id !== _id
    );
    this.ad.appliedUsers.push({ id: _id, status: Status.rejected });
    this.adsService.editAd(this.ad);
  }

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
  }
  onClickOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
}
