import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { NgChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    CardComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
