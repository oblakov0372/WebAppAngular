import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ad } from 'src/app/models/IAd';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-org-ad',
  templateUrl: './org-ad.component.html',
  styleUrls: ['./org-ad.component.scss'],
})
export class OrgAdComponent implements OnInit {
  @Input() ad!: Ad;
  constructor(private authService: AuthService) {}
  deleteAd() {
    this.ad.id = -1;
  }
  ngOnInit(): void {}
}
