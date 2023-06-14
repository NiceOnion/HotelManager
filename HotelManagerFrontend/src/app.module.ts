
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { AccommodationListComponent } from './app/accomodation-list/accommodation-list.component';
import { AccountListComponent } from './app/account-list/account-list.component';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './app/account-details/account-details.component';
import { HotelComponent } from './app/hotel/hotel.component';
import { AccountNewComponent } from './app/account-new/account-new.component';
import { AccountUpdateComponent } from './app/account-update/account-update.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: AccountListComponent},
            {path: 'Account/Put', component: AccountNewComponent},
            {path: 'Account/:accountID', component: AccountDetailsComponent},
            {path: 'Account/:accountID/Update', component: AccountUpdateComponent}
        ]),
        FormsModule
    ],
    declarations: [
        AccommodationListComponent,
        AccountListComponent,
        AppComponent,
        AccountDetailsComponent,
        HotelComponent,
        AccountNewComponent,
        AccountUpdateComponent,
  ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
