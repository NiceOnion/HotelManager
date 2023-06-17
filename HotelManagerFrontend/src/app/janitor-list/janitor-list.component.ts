import { Component } from '@angular/core';
import {Janitor} from "../DataObjects/Janitor";
import {JanitorService} from "../Services/janitor.service";

@Component({
  selector: 'app-janitor-list',
  templateUrl: './janitor-list.component.html',
  styleUrls: ['./janitor-list.component.css']
})
export class JanitorListComponent {
  janitors: Janitor[] = [];

  constructor(public janitorService :JanitorService) {
  }

  ngOnInit(): void {
    this.janitorService.GetAll().subscribe(
        (response) => {
          console.log("Janitors gotten");
          this.janitors = response;
        },
        (error) => {
          console.error('Error getting janitor: ', error)
        });
  }
}
