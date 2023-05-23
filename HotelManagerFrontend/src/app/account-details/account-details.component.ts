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
    const productIdFromRoute = this.route.params.subscribe(params => {params['id'];});
    console.log(productIdFromRoute);
    this.accountservice.getOneAccount(Number(this.route.params.subscribe(params => {params['id'];}))).subscribe(data => this.account = data)
  }
}
