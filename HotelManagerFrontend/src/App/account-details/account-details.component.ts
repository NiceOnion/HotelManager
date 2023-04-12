import { Component, OnInit } from '@angular/core';
import {AccountService} from "../Services/account.service";
import {account, Accounts} from "../DataObjects/Accounts";
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
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    console.log(productIdFromRoute); // add this line to check the value of productIdFromRoute
    this.accountservice.getOneAccount(productIdFromRoute).subscribe(data => this.account = data)
  }
}
