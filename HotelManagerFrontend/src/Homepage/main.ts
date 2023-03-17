import 'zone.js/dist/zone';
import {Accounts} from "./Accounts"
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './index.component.html',
  styleUrls: ['./global_styles.css']
})

export class main {
  Accounts = Accounts;

  share() {
    window.alert('The accounts have been shared!')
  }
}

bootstrapApplication(main);
