import { Component } from '@angular/core';
import {Room} from "../DataObjects/Room";
import {RoomService} from "../Services/room.service";

@Component({
  selector: 'app-room-new',
  templateUrl: './room-new.component.html',
  styleUrls: ['./room-new.component.css']
})
export class RoomNewComponent {
  room : Room = {
    id : 0,
    hotelId : 0,
    roomNumber : 0,
    description : "",
}

constructor(private roomService: RoomService) {
}
  onSubmit(){
    this.roomService.PostRoom(this.room);
  }
}
