package HotelManager;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.MediaTypes;
import org.springframework.hateoas.mediatype.problem.Problem;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Controller
@RequestMapping("Reservations")
public class ReservationController {

    private final ReservationRepository repository;
    private final ReservationModelAssembler assembler;

    ReservationController(ReservationRepository repository, ReservationModelAssembler assembler) {
        this.repository = repository;
        this.assembler = assembler;
    }

    @GetMapping("All")
    CollectionModel<EntityModel<Reservation>> All() {
        List<EntityModel<Reservation>> reservations = repository.findAll().stream()
                .map(assembler::toModel).collect(Collectors.toList());
        return CollectionModel.of(reservations, linkTo(methodOn(ReservationController.class).All()).withSelfRel());
    }

    @GetMapping("One/{id}")
    EntityModel<Reservation> One(@PathVariable Long id) {
        Reservation reservation = repository.findById(id).orElseThrow(() -> new ReservationNotFoundException(id));

        return assembler.toModel(reservation);
    }

    @GetMapping("New")
    ResponseEntity<EntityModel<Reservation>> New(@RequestBody Reservation reservation) {
        reservation.setStatus(Status.IN_PROGRESS);
        Reservation newReservation = repository.save(reservation);

        return ResponseEntity.created(linkTo(methodOn(ReservationController.class).One(newReservation.getID())).toUri()).body(assembler.toModel(newReservation));
    }

    @DeleteMapping("Cancel")
    ResponseEntity<?> cancel(@PathVariable Long id) {
        Reservation reservation = repository.findById(id).orElseThrow(() -> new ReservationNotFoundException(id));

        if (reservation.getStatus() == Status.IN_PROGRESS) {
            reservation.setStatus(Status.CANCELLED);
            return ResponseEntity.ok(assembler.toModel(repository.save(reservation)));
        }
        return lockedStatus(reservation);
    }

    @PutMapping("/One/{id}/complete")
    ResponseEntity<?> complete(@PathVariable Long id) {

        Reservation reservation = repository.findById(id).orElseThrow(() -> new ReservationNotFoundException(id));

        if (reservation.getStatus() == Status.IN_PROGRESS) {
            reservation.setStatus(Status.BOOKED);
            return ResponseEntity.ok(assembler.toModel(repository.save(reservation)));
        }
    return lockedStatus(reservation);
    }

    ResponseEntity<?> lockedStatus(Reservation reservation) {
        return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED) //
                .header(HttpHeaders.CONTENT_TYPE, MediaTypes.HTTP_PROBLEM_DETAILS_JSON_VALUE)
                .body(Problem.create().withTitle("Method not allowed").withDetail("You can't cancel reservations  with a " + reservation.getStatus() + " status"));
    }
}
