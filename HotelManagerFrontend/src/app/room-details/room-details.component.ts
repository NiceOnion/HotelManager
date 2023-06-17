import { Component } from '@angular/core';
import {Room} from "../DataObjects/Room";
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../Services/room.service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent {
  room : Room | undefined

  constructor(private route: ActivatedRoute, public roomService: RoomService) {
  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const roomIdFromRoute = routeParams.get('roomID');
    if(typeof roomIdFromRoute === "string"){
      this.roomService.GetOne(parseInt(roomIdFromRoute)).subscribe((response: any) => {
        // Handle success or any additional logic after the janitor is deleted
        console.log('Account getting room', response);
        this.room = response;
      }, (error) => {
        // Handle error if the janitor deletion fails
        console.error('Error finding room:', error);
      });
    }
  }

  DeleteRoom(room : Room): void{
    this.roomService.DeleteRoom(room).subscribe(() => {
      // Handle success or any additional logic after the janitor is deleted
      console.log('Room deleted successfully');
    }, (error) => {
      // Handle error if the janitor deletion fails
      console.error('Error deleting room:', error);
    });
  }
}
