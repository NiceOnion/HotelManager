import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {account} from "../DataObjects/account";
import {AccountService} from "../Services/account.service";

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent {


  account : account | undefined;
  constructor(private route: ActivatedRoute, public accountService : AccountService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = routeParams.get('accountID')
    if (typeof accountIdFromRoute === "string") {
      this.accountService.getOneAccount(parseInt(accountIdFromRoute, 10)).subscribe(data => {
        this.account = data;
      });
    }
  }

  onSubmit(): void{

    this.accountService.putAccount(this.account).subscribe((response) => {
      console.log(response)
    });
  }

}
