import { Component } from '@angular/core';
import {Janitor} from "../DataObjects/Janitor";
import {JanitorService} from "../Services/janitor.service";

@Component({
  selector: 'app-janitor-new',
  templateUrl: './janitor-new.component.html',
  styleUrls: ['./janitor-new.component.css']
})
export class JanitorNewComponent {
  janitor : Janitor = {
    id: 0,
    name: '',
    hotels : []
  }

  constructor(public janitorService : JanitorService) {
  }

  onSubmit(): void{
    this.janitorService.Post(this.janitor).subscribe(
        (response) => {
          console.log("Janitor registered" + response);
        },
        (error) => {
          console.error('Error registering janitor: ', error)
        }
    );
  }
}
