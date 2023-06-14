import { Component } from '@angular/core';
import {AccountService} from "../Services/account.service";
import {account} from "../DataObjects/account";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  account : account | undefined;
  constructor(private route: ActivatedRoute, public accountService : AccountService) {
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = routeParams.get('accountID')
    console.log(accountIdFromRoute);
    if (typeof accountIdFromRoute === "string") {
      this.accountService.getOneAccount(parseInt(accountIdFromRoute, 10)).subscribe(data => {

        this.account = data;
      });
    }
  }

  deleteAccount(account: account): void {
    //this.accountService.deleteAccount(account.ID).subscribe(data => {this.response = data})
  }
}
