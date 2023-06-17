import {Room} from "./Room";

export interface Hotel{
    id: Number
    name: String
    rooms: Room[]
    availableRooms: Number
    reservedRooms: Number
}