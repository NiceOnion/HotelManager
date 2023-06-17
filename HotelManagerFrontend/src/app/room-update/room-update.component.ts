import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Room} from "../DataObjects/Room";
import {RoomService} from "../Services/room.service";

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent {


  room : Room | undefined;
  constructor(private route: ActivatedRoute, public roomService : RoomService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const roomIdFromRoute = routeParams.get('hotelID')
    if (typeof roomIdFromRoute === "string") {
      this.roomService.GetOne(parseInt(roomIdFromRoute, 10)).subscribe(data => {
        this.room = data;
      });
    }
  }

  onSubmit(): void{
    this.roomService.PutRoom(this.room).subscribe((response) => {
      console.log(response)
    });
  }
}
