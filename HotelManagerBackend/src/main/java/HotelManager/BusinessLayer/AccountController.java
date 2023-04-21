package HotelManager.BusinessLayer;

import HotelManager.BusinessLayer.ErrorHandling.AccountNotFoundException;
import HotelManager.DAL.Account;
import HotelManager.DAL.AccountRepository;
import jakarta.persistence.Convert;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;


@RestController

@CrossOrigin
@RequestMapping("Accounts")
public class AccountController {

    private final AccountRepository repository;
    private final AccountModelAssembler assembler;

    AccountController(AccountRepository repository, AccountModelAssembler assembler){
        this.repository = repository;
        this.assembler = assembler;
    }

    @GetMapping(path = "All", produces = MediaType.APPLICATION_JSON_VALUE)
    List<Account> all(){
        return repository.findAll();
    }

    @PostMapping("New")
    Account newAccount(@RequestBody Account newAccount) {
        return repository.save(newAccount);
    }

    @GetMapping("One/{id}")
    EntityModel<Account> one(@PathVariable String id) {
        long RequestedID = Long.parseLong(id);
        Account account = repository.findById(RequestedID) //
                .orElseThrow(() -> new AccountNotFoundException(RequestedID));

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

