package HotelManager.BusinessLayer.ErrorHandling;

public class ReservationNotFoundException extends RuntimeException {

    public ReservationNotFoundException(Long id) {
        super("Could not find Reservation with ID: " + id);
    }
}