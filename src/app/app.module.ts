// Importing Module
import { NgModule } from '@angular/core';
// Inbuild modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { UpdateUserProfileComponent } from './Modules/dashboard/update-user-profile/update-user-profile.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { HeaderComponent } from './Common/Components/header/header.component';
import { UserCurrentSubscriptionComponent } from './Modules/dashboard/user-current-subscription/user-current-subscription.component';
import { RechargeComponent } from './Modules/dashboard/recharge/recharge.component';
import { DTHComponent } from './Modules/dth/dth.component';
import { DthCardComponent } from './Common/Components/dth-card/dth-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateUserProfileComponent,
    DashboardComponent,
    HeaderComponent,
    UserCurrentSubscriptionComponent,
    RechargeComponent,
    DTHComponent,
    DthCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
