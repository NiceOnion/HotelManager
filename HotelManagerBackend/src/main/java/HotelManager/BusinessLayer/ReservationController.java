package HotelManager.BusinessLayer;

import HotelManager.BusinessLayer.ErrorHandling.ReservationNotFoundException;
import HotelManager.DAL.Reservation;
import HotelManager.DAL.ReservationRepository;
import HotelManager.DAL.Status;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@Controller
@CrossOrigin
@RequestMapping("Reservations")
public class ReservationController {

    private final ReservationRepository repository;

    ReservationController(ReservationRepository repository) {
        this.repository = repository;
    }

    @GetMapping("All")
    public List<Reservation> all(){
        return repository.findAll();
    }

    @GetMapping("One/{id}")
    Reservation One(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new ReservationNotFoundException(id));
    }

    @PostMapping("New")
    Reservation New(@RequestBody Reservation reservation) {
        return repository.save(reservation);
    }

    @DeleteMapping("{id}")
    public void cancel(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PutMapping("{id}/Complete")
    Reservation complete(@PathVariable Long id) {

        Reservation reservation = repository.findById(id).orElseThrow(() -> new ReservationNotFoundException(id));

        if (reservation.getStatus() == Status.IN_PROGRESS) {
            reservation.setStatus(Status.BOOKED);
            return (repository.save(reservation));
        }
        return null;
    }

    @PutMapping
    public Reservation putReservation(@RequestBody Reservation reservation){
        return repository.save(reservation);
    }
}
