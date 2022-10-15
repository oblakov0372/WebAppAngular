import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/IAd';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {
  obj!: Ad;
  isClickLike = false;
  likes: number = 0;
  constructor() {}
  onClickLike() {
    this.isClickLike = !this.isClickLike;
    this.isClickLike ? (this.likes += 1) : (this.likes -= 1);
  }
  ngOnInit(): void {}
}
