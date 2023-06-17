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
      this.roomService.GetOne(parseInt(roomIdFromRoute)).subscribe( data =>{
        this.room = data;
      });
    }
  }

  DeleteRoom(room : Room): void{
    this.roomService.DeleteRoom(room).subscribe(() => {
      // Handle success or any additional logic after the account is deleted
      console.log('Account deleted successfully');
    }, (error) => {
      // Handle error if the account deletion fails
      console.error('Error deleting account:', error);
    });
  }
}
