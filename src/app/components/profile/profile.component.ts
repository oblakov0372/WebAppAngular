import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  loggedUser!: User;
  isOpenModal = false;
  constructor() {}

  ngOnInit(): void {}

  clickOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
}
