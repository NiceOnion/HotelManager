
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { AccountListComponent } from './app/account-list/account-list.component';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './app/account-details/account-details.component';
import { AccountNewComponent } from './app/account-new/account-new.component';
import { AccountUpdateComponent } from './app/account-update/account-update.component';
import { HotelListComponent } from './app/hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './app/hotel-details/hotel-details.component';
import { HotelNewComponent } from './app/hotel-new/hotel-new.component';
import { HotelUpdateComponent } from './app/hotel-update/hotel-update.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: DashboardComponent},
            {path: 'Account', component: AccountListComponent},
            {path: 'Account/Post', component: AccountNewComponent},
            {path: 'Account/:accountID', component: AccountDetailsComponent},
            {path: 'Account/:accountID/Update', component: AccountUpdateComponent},
            {path: 'Hotel', component: HotelListComponent},
            {path: 'Hotel/Post', component: HotelNewComponent},
            {path: 'Hotel/:HotelID', component: HotelDetailsComponent},
            {path: 'Hotel/:HotelID/Update', component: HotelUpdateComponent},


        ]),
        FormsModule
    ],
    declarations: [
        AccountListComponent,
        AppComponent,
        AccountDetailsComponent,
        AccountNewComponent,
        AccountUpdateComponent,
        HotelListComponent,
        HotelDetailsComponent,
        HotelNewComponent,
        HotelUpdateComponent,
        DashboardComponent,
  ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
