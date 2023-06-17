import {Component} from '@angular/core';
import {Room} from "../DataObjects/Room";
import {RoomService} from "../Services/room.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-room-new',
    templateUrl: './room-new.component.html',
    styleUrls: ['./room-new.component.css']
})
export class RoomNewComponent {
    room: Room = {
        id: 0,
        hotelId: 0,
        roomNumber: 0,
        description: "",
    }

    constructor(private roomService: RoomService, private route: ActivatedRoute) {
    }

    onSubmit() {
        const routeParams = this.route.snapshot.paramMap;
        const hotelIdFromRoute = routeParams.get('hotelID')
        if (typeof hotelIdFromRoute === "string") {
            this.roomService.PostRoom(this.room, parseInt(hotelIdFromRoute, 10)).subscribe((response) => {
                    console.log("fine", response);
                },
                (error) => {
                    console.error('error', error)
                });
        }
    }
}
