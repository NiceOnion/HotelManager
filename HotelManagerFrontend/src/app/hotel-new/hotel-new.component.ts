import { Component } from '@angular/core';
import {Hotel} from "../DataObjects/Hotel";
import {HotelService} from "../Services/hotel.service";
import {Room} from "../DataObjects/Room";

@Component({
  selector: 'app-room-new',
  templateUrl: './hotel-new.component.html',
  styleUrls: ['./hotel-new.component.css']
})
export class HotelNewComponent {

  constructor(public hotelService : HotelService) {
  }
  hotel : Hotel = {
    id: 0,
    name: "",
    rooms: new Array<Room>(),
    availableRooms: 0,
    reservedRooms: 0
  }

  onSubmit(){
    this.hotelService.PostHotel(this.hotel)
  }

}
