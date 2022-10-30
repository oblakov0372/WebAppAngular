import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrganizationAdsComponent } from './components/organization-ads/organization-ads.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdsGuard } from './guards/ads.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'organization-ads',
    component: OrganizationAdsComponent,
    canActivate: [AdsGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'ads', component: AdsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
