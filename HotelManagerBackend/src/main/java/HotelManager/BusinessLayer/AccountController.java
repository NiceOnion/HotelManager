package HotelManager.BusinessLayer;

import HotelManager.DAL.Account;
import HotelManager.DAL.AccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("Account")
public class AccountController {

    private static final Logger log = LoggerFactory.getLogger(AccountController.class);
    private final AccountRepository repository;

    @Autowired
    public AccountController(AccountRepository repository){
        this.repository = repository;
    }
    @GetMapping(path = "All", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Account> all(){
        return repository.findAll();
    }
    @PostMapping({"id"})
    public Account newAccount(@RequestBody Account newAccount) {
        System.out.println("An Account has reached the server! ");
        return repository.save(newAccount);
    }
    @GetMapping("One/{id}")
    public Account one(@PathVariable String id) {
        return repository.findById(Integer.parseInt(id)).orElse(null);
    }
    @PutMapping("{id}")
    public Account updateAccount(@RequestBody Account account, @PathVariable Integer id) {
        account.setId(id);
        return repository.save(account);
    }
    @DeleteMapping("{id}")
    public void deleteAccount(@PathVariable Integer id) {
        repository.deleteById(id);
    }
}

