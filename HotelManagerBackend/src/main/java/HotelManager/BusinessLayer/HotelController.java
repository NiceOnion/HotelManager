package HotelManager.BusinessLayer;

import HotelManager.BusinessLayer.ErrorHandling.HotelNotFoundException;
import HotelManager.DAL.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("Hotel")
public class HotelController {

    private final HotelRepository hotelRepository;
    private final RoomRepository roomRepository;
    private final JanitorRepository janitorRepository;

    HotelController(HotelRepository hRepo, RoomRepository rRepo, JanitorRepository jRepo){
        this.hotelRepository = hRepo;
        this.roomRepository = rRepo;
        this.janitorRepository = jRepo;
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

    @PostMapping("New")
    public Hotel newHotel(@RequestBody Hotel nHotel){
        return hotelRepository.save(nHotel);
    }

    @PutMapping
    public void putHotel(@RequestBody Hotel nHotel){
        hotelRepository.save(nHotel);
    }

    @DeleteMapping("{id}")
    public void deleteHotel(@PathVariable Long id){
        Hotel hotel = hotelRepository.findById(id).get();
        for (Room room: hotel.getRooms())
        {
            roomRepository.deleteById(room.getId());
        }
        for(Janitor janitor: hotel.getJanitors()){
            janitor.getHotels().remove(hotel);
            janitorRepository.save(janitor);
        }
        hotelRepository.deleteById(id);
    }


}
