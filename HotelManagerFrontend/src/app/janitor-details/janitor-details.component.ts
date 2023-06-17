import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JanitorService} from "../Services/janitor.service";
import {Janitor} from "../DataObjects/Janitor";

@Component({
  selector: 'app-janitor-details',
  templateUrl: './janitor-details.component.html',
  styleUrls: ['./janitor-details.component.css']
})
export class JanitorDetailsComponent {
  janitor : Janitor | undefined
  constructor(private route: ActivatedRoute, public janitorService : JanitorService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const janitorIdFromRoute = routeParams.get('janitorID')
    if (typeof janitorIdFromRoute === "string") {
      this.janitorService.GetOne(parseInt(janitorIdFromRoute, 10)).subscribe((response: any) => {
        // Handle success or any additional logic after the janitor is deleted
        console.log('Janitor gotten successfully', response);
        this.janitor = response;
      }, (error) => {
        // Handle error if the janitor deletion fails
        console.error('Error finding janitor:', error);
      });
    }
  }

  deleteAccount(janitor: Janitor): void {
    this.janitorService.Delete(janitor).subscribe(() => {
      // Handle success or any additional logic after the janitor is deleted
      console.log('Janitor unregistered successfully');
    }, (error) => {
      // Handle error if the janitor deletion fails
      console.error('Error unregistering janitor:', error);
    });
  }
}
