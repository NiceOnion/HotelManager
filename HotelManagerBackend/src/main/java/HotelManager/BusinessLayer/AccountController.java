package HotelManager.BusinessLayer;

import HotelManager.BusinessLayer.ErrorHandling.AccountNotFoundException;
import HotelManager.DAL.Account;
import HotelManager.DAL.AccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;


@RestController

@CrossOrigin
@RequestMapping("Account")
public class AccountController {

    private static final Logger log = LoggerFactory.getLogger(AccountController.class);
    private final AccountRepository repository;
    private final AccountModelAssembler assembler;

    AccountController(AccountRepository repository, AccountModelAssembler assembler){
        this.repository = repository;
        this.assembler = assembler;
    }

    @GetMapping(path = "All", produces = MediaType.APPLICATION_JSON_VALUE)
    List<EntityModel<Account>> all(){
        List<EntityModel<Account>> accountmodels = new ArrayList<>();
        for (Account account : repository.findAll()) {
            accountmodels.add(assembler.toModel(account));
        }
        return accountmodels;
    }

    @PostMapping
    public String newAccount(@RequestBody Account newAccount) {
        log.info("Now saving: " + newAccount);
        repository.save(newAccount);
        log.info("Saved!");
        return "Saved";
    }

    @GetMapping("One/{id}")
    EntityModel<Account> one(@PathVariable Integer id) {
        Account account = repository.findById(id) //
                .orElseThrow(() -> new AccountNotFoundException(id));

        return assembler.toModel(account);
    }

    @PutMapping("{id}")
    Account replaceAccount(@RequestBody Account newEmployee, @PathVariable Integer id) {

        return repository.findById(id)
                .map(employee -> {
                    employee.setUsername(newEmployee.getUsername());
                    employee.setRole(newEmployee.getRole());
                    return repository.save(employee);
                })
                .orElseGet(() -> {
                    newEmployee.setId(id);
                    return repository.save(newEmployee);
                });
    }

    @DeleteMapping("{id}")
    void deleteAccount(@PathVariable Integer id) {
        repository.deleteById(id);
    }
}

