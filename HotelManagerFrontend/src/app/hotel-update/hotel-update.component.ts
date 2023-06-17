import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hotel} from "../DataObjects/Hotel";
import {HotelService} from "../Services/hotel.service";

@Component({
  selector: 'app-room-update',
  templateUrl: './hotel-update.component.html',
  styleUrls: ['./hotel-update.component.css']
})
export class HotelUpdateComponent {
  hotel : Hotel | undefined;
  constructor(private route: ActivatedRoute, public hotelService : HotelService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const hotelIdFromRoute = routeParams.get('hotelID')
    if (typeof hotelIdFromRoute === "string") {
      this.hotelService.GetOneHotel(parseInt(hotelIdFromRoute, 10)).subscribe(data => {
        this.hotel = data;
      });
    }
  }

  onSubmit(): void{
    this.hotelService.PutHotel(this.hotel).subscribe((response) => {
      console.log(response)
    });
  }
}
