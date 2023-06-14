import {Component, OnInit} from '@angular/core';
import {Hotel} from "../DataObjects/Hotel";
import {HotelService} from "../Services/hotel.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit{
  hotels: Hotel[]= [];

  constructor(public hotelservice : HotelService) {
  }

  ngOnInit() : void {
    this.hotelservice.GetAllHotels().subscribe(data =>{
      this.hotels = data;
    });
  }
}
