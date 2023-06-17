import { Component } from '@angular/core';
import {AccountService} from "../Services/account.service";
import {account} from "../DataObjects/account";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-janitor-details',
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
    if (typeof accountIdFromRoute === "string") {
      this.accountService.getOneAccount(parseInt(accountIdFromRoute, 10)).subscribe((response: any) => {
        // Handle success or any additional logic after the janitor is deleted
        console.log('Account deleted successfully', response);
        this.account = response;
      }, (error) => {
        // Handle error if the janitor deletion fails
        console.error('Error deleting janitor:', error);
      });
    }
  }

  deleteAccount(account: account): void {
    this.accountService.deleteAccount(account.id).subscribe((response: any) => {
      // Handle success or any additional logic after the janitor is deleted
      console.log('Account deleted successfully', response);
    }, (error) => {
      // Handle error if the janitor deletion fails
      console.error('Error deleting janitor:', error);
    });
  }

}
