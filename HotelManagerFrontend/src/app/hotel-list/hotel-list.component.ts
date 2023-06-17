import {Component} from '@angular/core';
import {Hotel} from "../DataObjects/Hotel";
import {HotelService} from "../Services/hotel.service"

@Component({
    selector: 'app-room-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

    hotels: Hotel[] = [];

    constructor(public hotelService: HotelService) {
    }

    ngOnInit(): void {
        this.hotelService.GetAllHotels().subscribe((response: any) => {
            // Handle success or any additional logic after the janitor is deleted
            console.log('Hotels found successfully', response);
            this.hotels = response;
        }, (error) => {
            // Handle error if the janitor deletion fails
            console.error('Error finding hotels:', error);
        });
    }
}
