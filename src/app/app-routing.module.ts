import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserProfileComponent } from './Modules/dashboard/update-user-profile/update-user-profile.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { UserCurrentSubscriptionComponent } from './Modules/dashboard/user-current-subscription/user-current-subscription.component';
import { RechargeComponent } from './Modules/dashboard/recharge/recharge.component';
import { DTHComponent } from './Modules/dth/dth.component';
const routes: Routes = [{
  path: '',
  redirectTo: 'DTH',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: DashboardComponent,
  children: [{
    path: 'update/:id', component: UpdateUserProfileComponent,
    pathMatch: 'full'
  }, {
    path: 'subscription/:id', component: UserCurrentSubscriptionComponent,
    pathMatch: 'full'
  }, {
    path: 'recharge', component: RechargeComponent,
    pathMatch: 'full'
  }]
}, {
  path: 'DTH',
  component: DTHComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
