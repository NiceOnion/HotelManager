package HotelManager.DAL;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Hotel {
    private @Id @GeneratedValue Long ID;
    private String name;
    private int rooms;
    private int availableRooms;
    private int reservedRooms;

    public Hotel(){}

    public Hotel(String name, int rooms, int availableRooms, int reservedRooms){
        this.name = name;
        this.rooms = rooms;
        this.availableRooms = availableRooms;
        this.reservedRooms = reservedRooms;
    }

    public Long getID() {
        return ID;
    }
    public void setID(Long ID) {
        this.ID = ID;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getRooms() {
        return rooms;
    }
    public void setRooms(int rooms) {
        this.rooms = rooms;
    }
    public int getAvailableRooms() {
        return availableRooms;
    }
    public void setAvailableRooms(int availableRooms) {
        this.availableRooms = availableRooms;
    }
    public int getReservedRooms() {
        return reservedRooms;
    }
    public void setReservedRooms(int reservedRooms) {
        this.reservedRooms = reservedRooms;
    }
}
