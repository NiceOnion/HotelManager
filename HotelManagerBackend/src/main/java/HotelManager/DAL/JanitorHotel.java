package HotelManager.DAL;

import jakarta.persistence.*;

@Entity
@Table(name = "janitor_hotel")
public class JanitorHotel {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long ID;

    @ManyToOne
    @JoinColumn(name = "janitor_id")
    private Janitor janitor;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public Janitor getJanitor() {
        return janitor;
    }

    public void setJanitor(Janitor janitor) {
        this.janitor = janitor;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }
}
