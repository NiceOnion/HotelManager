package HotelManager.DAL;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import net.minidev.json.annotate.JsonIgnore;

import java.util.List;

@Entity
public class Janitor {


    @Id
    @GeneratedValue
    Long ID;
    String name;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "janitor_hotel",
            joinColumns = @JoinColumn(name = "janitor_id"),
            inverseJoinColumns = @JoinColumn(name = "hotel_id"))
    @JsonIgnoreProperties("janitors")
    private List<Hotel> hotels;



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
    public List<Hotel> getHotels() {
        return hotels;
    }
    public void setHotels(List<Hotel> hotels) {
        this.hotels = hotels;
    }
}
