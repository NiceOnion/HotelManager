import {Component, OnInit} from '@angular/core';


import {account} from "../DataObjects/account";
import {AccountService} from "../Services/account.service";

@Component({
  selector: 'app-janitor-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{
  accounts: account[] = [];

  constructor(public accountService :AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe((response: any) => {
      // Handle success or any additional logic after the janitor is deleted
      this.accounts = response;
    }, (error) => {
      // Handle error if the janitor deletion fails
      console.error('Error getting janitor list:', error);
    });

    };
  }
