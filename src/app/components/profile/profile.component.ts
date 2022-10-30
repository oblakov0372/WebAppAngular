import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  changeForm!: FormGroup;
  loggedUser!: IUser;
  isOpenModal = false;
  constructor(private authService: AuthService) {
    this.loggedUser = authService.loggedInUser;
  }
  changeData() {
    this.authService.changeData(
      this.changeForm.value.name,
      this.changeForm.value.password
    );
    this.isOpenModal = false;
  }
  ngOnInit(): void {
    this.changeForm = new FormGroup({
      name: new FormControl(this.loggedUser.name, [Validators.required]),
      password: new FormControl(this.loggedUser.password, [
        Validators.required,
      ]),
    });
  }

  deleteAcount() {
    if (confirm('Are uoy sure?')) {
      this.authService.deleteAcount(this.loggedUser.id);
    }
  }

  clickOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
}
