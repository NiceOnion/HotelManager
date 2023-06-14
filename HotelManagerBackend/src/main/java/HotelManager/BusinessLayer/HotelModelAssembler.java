package HotelManager.BusinessLayer;

import HotelManager.DAL.Hotel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class HotelModelAssembler implements RepresentationModelAssembler <Hotel, EntityModel<Hotel>> {
    @Override
    public EntityModel<Hotel> toModel(Hotel hotel) {
        return EntityModel.of(hotel,
                    linkTo(methodOn(HotelController.class).one(hotel.getID())).withSelfRel(),
                    linkTo(methodOn(HotelController.class).all()).withRel("Hotels"));
    }
}
