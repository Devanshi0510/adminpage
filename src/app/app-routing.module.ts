import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"sign-in",
    component: SignInComponent
  },
  {
    path:"sign-up",
    component: SignUpComponent
  },
  {
    path:"blank",
    component: BlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
