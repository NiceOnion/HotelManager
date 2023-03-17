package HotelManager;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class AccountModelAssembler implements RepresentationModelAssembler<Account, EntityModel<Account>> {

    @Override
    public EntityModel<Account> toModel(Account employee) {

        return EntityModel.of(employee, //
                linkTo(methodOn(AccountController.class).one(employee.getID())).withSelfRel(),
                linkTo(methodOn(AccountController.class).all()).withRel("Accounts"));
    }
}
