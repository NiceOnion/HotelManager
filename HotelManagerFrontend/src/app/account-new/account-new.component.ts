import { Component } from '@angular/core';
import {account} from "../DataObjects/account";
import {AccountService} from "../Services/account.service";

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent {
  account : account = {
    id: 0,
    username: '',
    password: '',
    role: ''
  }

  constructor(public accountService : AccountService) {
  }

  onSubmit(): void{
    this.accountService.postAccount(this.account);
  }
}
