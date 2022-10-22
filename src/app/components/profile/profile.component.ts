import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  changeForm!: FormGroup;
  loggedUser!: IUser;
  isOpenModal = false;
  constructor(private authService: AuthService, private router: Router) {
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
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  deleteAcount() {
    this.authService.deleteAcount(this.loggedUser);
  }

  clickOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
}
