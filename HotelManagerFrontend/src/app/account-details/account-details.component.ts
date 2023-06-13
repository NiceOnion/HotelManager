import { Component } from '@angular/core';
import {AccountService} from "../Services/account.service";
import {account} from "../DataObjects/Accounts";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  account : account | undefined;

  constructor(private route: ActivatedRoute, public accountservice : AccountService) {}

  ngOnInit():void{
    this.route.params.subscribe(params => {
      const accountId = Number(params['id']);
      this.accountservice.getOneAccount(accountId).subscribe(data => this.account = data);
    })
  }
}
