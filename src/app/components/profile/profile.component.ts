import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isOpenModal = false;
  constructor() {}

  ngOnInit(): void {}

  clickOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
}
