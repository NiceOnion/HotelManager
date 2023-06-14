import {Component, OnInit} from '@angular/core';


import {account} from "../DataObjects/account";
import {AccountService} from "../Services/account.service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{
  accounts: account[] = [];

  constructor(public accountService :AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(data =>{
      console.log(data);
      this.accounts = data;
      console.log(this.accounts[1].id);
    });
  }
}
