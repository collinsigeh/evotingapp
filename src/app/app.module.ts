import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VinVerificationPageComponent } from './components/vin-verification-page/vin-verification-page.component';
import { FingerprintVerificationPageComponent } from './components/fingerprint-verification-page/fingerprint-verification-page.component';
import { ElectableOfficesPageComponent } from './components/electable-offices-page/electable-offices-page.component';
import { VotePageComponent } from './components/vote-page/vote-page.component';
import { VoteConfirmationPageComponent } from './components/vote-confirmation-page/vote-confirmation-page.component';
import { ElectionListPageComponent } from './components/election-list-page/election-list-page.component';
import { ElectionResultPageComponent } from './components/election-result-page/election-result-page.component';
import { HowToVotePageComponent } from './components/how-to-vote-page/how-to-vote-page.component';
import { HowToMonitorElectionsPageComponent } from './components/how-to-monitor-elections-page/how-to-monitor-elections-page.component';

const routes: Routes = [
  { path: 'how-to-monitor-elections', component: HowToMonitorElectionsPageComponent},
  { path: 'how-to-vote', component: HowToVotePageComponent},
  { path: 'election-result', component: ElectionResultPageComponent},
  { path: 'elections', component: ElectionListPageComponent},
  { path: 'vote-confirmation', component: VoteConfirmationPageComponent},
  { path: 'vote', component: VotePageComponent},
  { path: 'electable-offices', component: ElectableOfficesPageComponent},
  { path: 'fingerprint-verification', component: FingerprintVerificationPageComponent},
  { path: 'vin-verification', component: VinVerificationPageComponent},
  { path: '', component: HomePageComponent}
]

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
    ElectionResultPageComponent,
    HowToVotePageComponent,
    HowToMonitorElectionsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
