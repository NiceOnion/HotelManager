package HotelManager.DAL;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import net.minidev.json.annotate.JsonIgnore;
import org.hibernate.annotations.Cascade;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Hotel {
    private @Id @GeneratedValue Long ID;
    private String name;

    @OneToMany(mappedBy = "hotel")
    @JsonIgnoreProperties("hotel")
    private List<Room> rooms;

    @ManyToMany(mappedBy = "hotels")
    @JsonIgnoreProperties("hotels")
    private List<Janitor> janitors;

    public Hotel(){}

    public Hotel(String name){
        this.name = name;
    }

    public void addRoom(Room room){
        room.setHotel(this);
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
    public List<Janitor> getJanitors() {
        return janitors;
    }
    public void setJanitors(List<Janitor> janitors) {
        this.janitors = janitors;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }
}
