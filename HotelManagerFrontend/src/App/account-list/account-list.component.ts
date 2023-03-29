import {Component, OnInit} from '@angular/core';

import {Accounts} from "../DataObjects/Accounts";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent{
  accounts = Accounts;

}
