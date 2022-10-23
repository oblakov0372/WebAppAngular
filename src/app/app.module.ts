import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdsComponent } from './components/ads/ads.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { AdComponent } from './components/ad/ad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationAdsComponent } from './components/organization-ads/organization-ads.component';
import { OrgAdComponent } from './components/org-ad/org-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdsComponent,
    ProfileComponent,
    AddAdsComponent,
    NotFoundComponent,
    HeaderComponent,
    AdComponent,
    OrganizationAdsComponent,
    OrgAdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
