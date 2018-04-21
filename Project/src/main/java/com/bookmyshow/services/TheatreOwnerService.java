package com.bookmyshow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyshow.models.Theatre;
import com.bookmyshow.models.TheatreOwner;
import com.bookmyshow.repositories.TheatreOwnerRepository;
import com.bookmyshow.repositories.TheatreRepository;

@RestController
public class TheatreOwnerService {
    @Autowired
    TheatreOwnerRepository theatreOwnerRepository;

    @Autowired
    TheatreRepository theatreRepository;

    @GetMapping("/api/theatreOwner")
    public Iterable<TheatreOwner> findAllThareOwners(@RequestParam(name = "username", required = false) String username,
                                               @RequestParam(name = "password", required = false) String password) {
        if (username != null && password != null) {
            return theatreOwnerRepository.findTheatreOwnerByCredentials(username, password);
        } else if (username != null) {
            return theatreOwnerRepository.findTheatreOwnerByUsername(username);
        }
        return theatreOwnerRepository.findAll();
    }

    @PostMapping("/api/theatreOwner")
    public TheatreOwner createThatreOwner(@RequestBody TheatreOwner theatreOwner) {
        return theatreOwnerRepository.save(theatreOwner);
    }

    @GetMapping("/api/theatreOwner/{theatreOwnerId}")
    public Optional<TheatreOwner> findTheatreOwnerById(@PathVariable("theatreOwnerId") int id) {
        return theatreOwnerRepository.findById(id);
    }

    @GetMapping("/api/theatreOwner/{theatreOwnerId}/getTheatres")
    public List<Theatre> getAllTheatres(@PathVariable("theatreOwnerId") int id) {
        Optional<TheatreOwner> theatreOwner = theatreOwnerRepository.findById(id);
        return theatreOwner.get().getTheatres();

    }

    @DeleteMapping("/api/theatreOwner/{theatreOwnerId}")
    public void deleteTheatreOwner(@PathVariable("theatreOwnerId") int id) {
        theatreOwnerRepository.deleteById(id);
    }

    @PutMapping("/api/theatreOwner/{theatreOwnerId}")
    public TheatreOwner updateTheatreOwner(@PathVariable("theatreOwnerId") int id, @RequestBody TheatreOwner newTheatreOwner) {
        newTheatreOwner.setId(id);
        return theatreOwnerRepository.save(newTheatreOwner);
    }

    @PutMapping("/api/theatreOwner/{toId}/theatre/{tId}")
    public void theatreOwned(@PathVariable("toId") int toId, @PathVariable("tId") int tId) {
        Optional<TheatreOwner> theatreOwner = theatreOwnerRepository.findById(toId);
        Optional<Theatre> theatre   = theatreRepository.findById(tId);
        theatreOwner.get().setTheatres(theatre.get());
        theatreOwner.get().setNoOfTheatres(theatreOwner.get().getNoOfTheatres()+ 1);
        theatreOwnerRepository.save(theatreOwner.get());
    }

    @DeleteMapping("/api/theatreOwner/{theatreOwnerId}/theatre/{theatreId}")
    public void deleteTheatreForTheatreOwner(@PathVariable("theatreOwnerId") int theatreOwnerId,@PathVariable("theatreId") int theatreId) {
        Optional<TheatreOwner> theatreOwner = theatreOwnerRepository.findById(theatreOwnerId);
        Optional<Theatre> theatre   = theatreRepository.findById(theatreId);
        List<Theatre> theatres= theatreOwner.get().getTheatres();
        for (Theatre th: theatres) {
            if(th.getId()== theatreId){
                theatres.remove(theatre);
            }
        }
        theatreOwner.get().setNoOfTheatres(theatreOwner.get().getNoOfTheatres()- 1);
        theatreOwnerRepository.save(theatreOwner.get());
    }

}
