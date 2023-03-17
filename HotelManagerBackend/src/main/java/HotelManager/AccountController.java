package HotelManager;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@RequestMapping("Accounts")
public class AccountController {

    private final AccountRepository repository;
    private final AccountModelAssembler assembler;

    AccountController(AccountRepository repository, AccountModelAssembler assembler){
        this.repository = repository;
        this.assembler = assembler;
    }



    @GetMapping("All")
    CollectionModel<EntityModel<Account>> all() {

        List<EntityModel<Account>> accounts = repository.findAll().stream()//
                .map(assembler::toModel)//
                .collect(Collectors.toList());

        return CollectionModel.of(accounts, linkTo(methodOn(AccountController.class).all()).withSelfRel());
    }

    @PostMapping("New")
    Account newAccount(@RequestBody Account newAccount) {
        return repository.save(newAccount);
    }

    @GetMapping("One/{id}")
    EntityModel<Account> one(@PathVariable Long id) {

        Account account = repository.findById(id) //
                .orElseThrow(() -> new AccountNotFoundException(id));

        return assembler.toModel(account);
    }

    @PutMapping("Replace/{id}")
    Account replaceAccount(@RequestBody Account newEmployee, @PathVariable Long id) {

        return repository.findById(id)
                .map(employee -> {
                    employee.setUsername(newEmployee.getUsername());
                    employee.setRole(newEmployee.getRole());
                    return repository.save(employee);
                })
                .orElseGet(() -> {
                    newEmployee.setID(id);
                    return repository.save(newEmployee);
                });
    }

    @DeleteMapping("Delete/{id}")
    void deleteAccount(@PathVariable Long id) {
        repository.deleteById(id);
    }
}

