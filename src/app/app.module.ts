import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VinVerificationPageComponent } from './components/vin-verification-page/vin-verification-page.component';
import { FingerprintVerificationPageComponent } from './components/fingerprint-verification-page/fingerprint-verification-page.component';
import { ElectableOfficesPageComponent } from './components/electable-offices-page/electable-offices-page.component';
import { VotePageComponent } from './components/vote-page/vote-page.component';
import { VoteConfirmationPageComponent } from './components/vote-confirmation-page/vote-confirmation-page.component';
import { ElectionListPageComponent } from './components/election-list-page/election-list-page.component';
import { ElectionResultPageComponent } from './componnets/election-result-page/election-result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VinVerificationPageComponent,
    FingerprintVerificationPageComponent,
    ElectableOfficesPageComponent,
    VotePageComponent,
    VoteConfirmationPageComponent,
    ElectionListPageComponent,
    ElectionResultPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
