package HotelManager.BusinessLayer;

import HotelManager.BusinessLayer.ErrorHandling.HotelNotFoundException;
import HotelManager.DAL.Hotel;
import HotelManager.DAL.HotelRepository;
import HotelManager.DAL.Room;
import HotelManager.DAL.RoomRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("Hotel")
public class HotelController {

    private final HotelRepository hotelRepository;
    private final RoomRepository roomRepository;

    HotelController(HotelRepository hRepo, RoomRepository rRepo){
        this.hotelRepository = hRepo;
        this.roomRepository = rRepo;
    }

    @GetMapping(path = "All", produces = MediaType.APPLICATION_JSON_VALUE)
    List<Hotel> all() {
        return hotelRepository.findAll();
    }

    @GetMapping(path = "One/{id}")
    Hotel one(@PathVariable Long id){
        List<Room> Rooms = roomRepository.findByHotelID(id);
        return hotelRepository.findById(id).orElseThrow(() -> new HotelNotFoundException(id));
    }

    @PostMapping
    public Hotel newHotel(@RequestBody Hotel nHotel){
        return hotelRepository.save(nHotel);
    }

    @PutMapping
    public void putHotel(@RequestBody Hotel nHotel){
        hotelRepository.save(nHotel);
    }

    @DeleteMapping("{id}")
    public void deleteHotel(@PathVariable Long id){
        hotelRepository.deleteById(id);
    }


}
