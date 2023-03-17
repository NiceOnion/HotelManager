package HotelManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(AccountRepository accountRepository, ReservationRepository reservationRepository) {

        return args -> {
            accountRepository.save(new Account("Bilbo Baggins", "Beans", "burglar"));
            accountRepository.save(new Account("Frodo Baggins", "Frenchtoast" , "thief"));

            accountRepository.findAll().forEach(Account -> log.info("Preloaded " + Account));

            reservationRepository.save(new Reservation("Room B1", Status.IN_PROGRESS));
            reservationRepository.save(new Reservation("Room C4", Status.BOOKED));

            reservationRepository.findAll().forEach(reservation -> {log.info("Preloaded " + reservation);});
        };
    }
}