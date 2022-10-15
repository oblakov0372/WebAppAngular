import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/IAd';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {
  @Input() ad!: Ad;
  isClickLike = false;
  constructor(private httpSetvice: HttpService) {}
  onClickLike() {
    this.isClickLike = !this.isClickLike;
    this.isClickLike ? (this.ad.likes += 1) : (this.ad.likes -= 1);
  }
  ngOnInit(): void {}
}
