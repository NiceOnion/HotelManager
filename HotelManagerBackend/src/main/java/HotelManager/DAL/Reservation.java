package HotelManager.DAL;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "CustomerReservation")
public class Reservation {



    private @Id @GeneratedValue Long ID;

    private String description;
    private Status status;
    private Long accountId;
    private Long roomId;

    public Reservation() {}

    public Reservation (String description, Status status){
        this.description = description;
        this.status = status;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o){
        if(this == o){
            return true;
        }
        if(!(o instanceof Reservation)){
            return false;
        }
        Reservation reservation = (Reservation) o;
        return Objects.equals(this.ID, reservation.ID) && Objects.equals(this.description, reservation.description) && this.status == reservation.status;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.ID, this.description, this.status);
    }

    @Override
    public String toString() {
        return "Reservation{" + "ID=" + this.ID + ", description='" + this.description + '\'' + ", status=" + this.status + '}';
    }
}
