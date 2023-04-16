import {Component, OnInit} from '@angular/core';


import {Accounts} from "../DataObjects/Accounts";
import {AccountService} from "../Services/account.service";

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
