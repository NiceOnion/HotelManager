import {Component} from '@angular/core';
import {Hotel} from "../DataObjects/Hotel";
import {HotelService} from "../Services/hotel.service"

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

    hotels: Hotel[] = [];

    constructor(public hotelService: HotelService) {
    }

    ngOnInit(): void {
        this.hotelService.GetAllHotels().subscribe(data => {
            this.hotels = data;
        });
    }
}
