package HotelManager;

public class AccountNotFoundException extends RuntimeException {

    AccountNotFoundException(Long id) {
        super("Could not find Account with ID: " + id);
    }
}