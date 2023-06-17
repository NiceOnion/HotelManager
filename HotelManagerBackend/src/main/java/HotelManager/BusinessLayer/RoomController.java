package HotelManager.BusinessLayer;

import HotelManager.DAL.Hotel;
import HotelManager.DAL.HotelRepository;
import HotelManager.DAL.Room;
import HotelManager.DAL.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("Room")
public class RoomController {

    private final RoomRepository roomRepository;
    private final HotelRepository hotelRepository;

    @Autowired
    public RoomController(RoomRepository roomRepository, HotelRepository hotelRepository) {
        this.roomRepository = roomRepository;
        this.hotelRepository = hotelRepository;
    }

    @GetMapping(path = "All", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Room> all() {
        return roomRepository.findAll();
    }

    @PostMapping("{hotelId}")
    public Room createRoom(@PathVariable Long hotelId, @RequestBody Room newRoom) {
        Hotel optionalHotel = hotelRepository.findById(hotelId).get();
        newRoom.setHotel(optionalHotel);
        return roomRepository.save(newRoom);
    }

    @GetMapping("One/{id}")
    public Room one(@PathVariable Long id) {
        return roomRepository.findById(id).orElse(null);
    }

    @PutMapping("{id}")
    public Room updateRoom(@RequestBody Room room, @PathVariable Long id) {
        room.setId(id);
        return roomRepository.save(room);
    }

    @DeleteMapping("{id}")
    public void deleteRoom(@PathVariable Long id) {
        hotelRepository.findById(roomRepository.findById(id).get().getHotel().getID())
                .get().getRooms().remove(roomRepository.findById(id).get());// Get hotel, and remove the instance of this room
        roomRepository.deleteById(id);
    }
}
