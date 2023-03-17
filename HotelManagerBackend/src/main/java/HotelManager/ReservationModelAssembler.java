package HotelManager;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class ReservationModelAssembler implements RepresentationModelAssembler<Reservation, EntityModel<Reservation>> {
    @Override
    public EntityModel<Reservation> toModel(Reservation reservation){

        //Unconditional link
        EntityModel<Reservation> reservationModel = EntityModel.of(reservation,
                linkTo(methodOn(ReservationController.class).One(reservation.getID())).withSelfRel(),
                linkTo(methodOn(ReservationController.class).All()).withRel("Reservations"));

        //Conditional links depending on state
        if(reservation.getStatus() == Status.IN_PROGRESS){
            reservationModel.add(linkTo(methodOn(ReservationController.class).cancel(reservation.getID())).withRel("cancel"));
            reservationModel.add(linkTo(methodOn(ReservationController.class).complete(reservation.getID())).withRel("complete"));
        }

        return reservationModel;
    }
}
