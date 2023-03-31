import {Component, OnInit} from '@angular/core';
import {AccountService} from "../Services/account.service";

import {Accounts} from "../DataObjects/Accounts";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{
  accounts: any[] = [];

  constructor(public accountservice :AccountService) {
  }

  ngOnInit(): void {
    this.accountservice.getAllAccounts().subscribe(data =>{
      this.accounts = data;
    });
  }
}
