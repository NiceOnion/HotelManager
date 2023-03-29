
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { AccommodationListComponent } from './App/accomodation-list/accommodation-list.component';
import { AccountListComponent } from './App/account-list/account-list.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: AccommodationListComponent},
        ])
    ],
    declarations: [
        AccommodationListComponent,
        AccountListComponent,
        AppComponent
  ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
