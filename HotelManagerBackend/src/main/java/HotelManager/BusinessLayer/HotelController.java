package HotelManager.BusinessLayer;

import HotelManager.BusinessLayer.ErrorHandling.HotelNotFoundException;
import HotelManager.DAL.Hotel;
import HotelManager.DAL.HotelRepository;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("Hotel")
public class HotelController {

    private final HotelRepository repository;
    private final HotelModelAssembler assembler;

    HotelController(HotelRepository repo, HotelModelAssembler assembler){
        this.repository = repo;
        this.assembler = assembler;
    }

    @GetMapping(path = "All", produces = MediaType.APPLICATION_JSON_VALUE)
    List<Hotel> all() {
        return repository.findAll();
    }

    @GetMapping(path = "One/{id}")
    EntityModel<Hotel> one(@PathVariable Long id){
        Hotel hotel = repository.findById(id).orElseThrow(() -> new HotelNotFoundException(id));
        return assembler.toModel(hotel);
    }
}
