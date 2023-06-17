import {Component} from '@angular/core';
import {Hotel} from "../DataObjects/Hotel";
import {HotelService} from "../Services/hotel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-room-details',
    templateUrl: './hotel-details.component.html',
    styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
    hotel: Hotel | undefined

    constructor(private hotelService: HotelService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const HotelIdFromRoute = routeParams.get('hotelID');
        console.log(HotelIdFromRoute);
        if (typeof HotelIdFromRoute === "string") {
            this.hotelService.GetOneHotel(parseInt(HotelIdFromRoute)).subscribe((response: any) => {
                // Handle success or any additional logic after the janitor is deleted
                console.log('hotel found successfully', response);
                this.hotel = response;
            }, (error) => {
                // Handle error if the janitor deletion fails
                console.error('Error finding hotel:', error);
            });
        }
    }

    deleteHotel(hotel: Hotel): void{
        this.hotelService.Delete(hotel).subscribe((response: any) => {
            // Handle success or any additional logic after the janitor is deleted
            console.log('hotel deleted successfully', response);
        }, (error) => {
            // Handle error if the janitor deletion fails
            console.error('Error deleting hotel:', error);
        });
    }
}
