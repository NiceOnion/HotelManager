package HotelManager.BusinessLayer.ErrorHandling;

public class HotelNotFoundException extends RuntimeException{

    public HotelNotFoundException(Long id){
        super("Hotel not found with ID: " + id);
    }
}
