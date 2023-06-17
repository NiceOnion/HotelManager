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

    @PostMapping
    public Janitor Post(@RequestBody Janitor janitor){
        return janitorRepository.save(janitor);
    }

    @PostMapping("{janitorID}/Hotels/{hotelID}")
    public ResponseEntity<String> HireJanitor(@PathVariable Long janitorID, @PathVariable Long hotelID){
        Janitor janitor = janitorRepository.findById(janitorID).orElse(null);
        Hotel hotel = hotelRepository.findById(hotelID).orElse(null);

        if(janitor != null && hotel != null){
            janitor.getHotels().add(hotel);
            janitorRepository.save(janitor);
            return ResponseEntity.ok("Janitor " + janitor.getName() + " is now hired!");
        }

        return ResponseEntity.badRequest().body("Something went wrong: Invalid Janitor/Hotel ID");
    }

    @PutMapping
    public Janitor Put(@RequestBody Janitor janitor){
        return janitorRepository.save(janitor);
    }

    @DeleteMapping()
    public void Delete(@RequestBody Janitor janitor){
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
