package HotelManager.BusinessLayer;


import HotelManager.DAL.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("Janitor")
public class JanitorController {

    @Autowired
    private JanitorRepository janitorRepository;
    @Autowired
    private HotelRepository hotelRepository;

    @GetMapping("All")
    public List<Janitor> GetAll(){
        return janitorRepository.findAll();
    }

    @GetMapping("One/{janitorID}")
    public Janitor GetOne(@PathVariable Long janitorID){
        return janitorRepository.findById(janitorID).orElse(null);
    }

    @GetMapping("One/{janitorID}/Hotels")
    public List<Hotel> GetHotelByJanitor(@PathVariable Long janitorID){
        Janitor janitor = janitorRepository.findById(janitorID).orElse(null);
        if(janitor != null) return janitor.getHotels();
        return null;
    }

    @PostMapping("New")
    public Janitor Post(@RequestBody Janitor janitor){
        return janitorRepository.save(janitor);
    }

    @PostMapping("{janitorID}/Hotels/{hotelID}")
    public String HireJanitor(@PathVariable Long janitorID, @PathVariable Long hotelID){
        Janitor janitor = janitorRepository.findById(janitorID).orElse(null);
        Hotel hotel = hotelRepository.findById(hotelID).orElse(null);
        if(janitor != null && hotel != null){
            janitor.getHotels().add(hotel);
            janitorRepository.save(janitor);
            return ("Janitor " + janitor.getName() + " is now hired!");
        }

        return ("Something went wrong: Invalid Janitor/Hotel ID");
    }

    @PutMapping("{id}")
    public Janitor Put(@RequestBody Janitor janitor){
        return janitorRepository.save(janitor);
    }

    @DeleteMapping("{janitorID}")
    public void Delete(@PathVariable Long janitorID){
        Janitor janitor = janitorRepository.findById(janitorID).get();
        List<Hotel> hotels = janitor.getHotels();
        for ( Hotel hotel : hotels)
        {
            hotel.getJanitors().remove(janitor);
            hotelRepository.save(hotel);
        }
        janitorRepository.delete(janitor);
    }

    @DeleteMapping("/{janitorID}/Hotels/{hotelID}")
    public ResponseEntity<String> removeStudentFromCourse(@PathVariable Long janitorID, @PathVariable Long hotelID) {
        Janitor janitor = janitorRepository.findById(janitorID).orElse(null);
        Hotel hotel = hotelRepository.findById(hotelID).orElse(null);

        if (janitor != null && hotel != null) {
            janitor.getHotels().remove(hotel);
            janitorRepository.save(janitor);
            return ResponseEntity.ok("Janitor succesfully fired.");
        }

        return ResponseEntity.badRequest().body("Invalid janitor or hotel ID.");
    }



}
