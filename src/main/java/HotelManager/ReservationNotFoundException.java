package HotelManager;

public class ReservationNotFoundException extends RuntimeException {

    ReservationNotFoundException(Long id) {
        super("Could not find Reservation with ID: " + id);
    }
}