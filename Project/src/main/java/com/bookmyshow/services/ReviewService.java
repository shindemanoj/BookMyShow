package com.bookmyshow.services;

import com.bookmyshow.models.Movie;
import com.bookmyshow.models.Review;
import com.bookmyshow.models.Theatre;
import com.bookmyshow.models.User;
import com.bookmyshow.repositories.MovieRepository;
import com.bookmyshow.repositories.ReviewRepository;
import com.bookmyshow.repositories.TheatreRepository;
import com.bookmyshow.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TheatreRepository theatreRepository;

    @PostMapping("/api/user/{userId}/movie/{movieId}")
    public Review createReview(@RequestBody Review review, @PathVariable("movieId") int mid, @PathVariable("userId") int uid) {
        Optional<Movie> movie =movieRepository.findById(mid);
        Optional<User> user =userRepository.findById(uid);
        review.setMovie(movie.get());
        review.setUser(user.get());
        movie.get().getReviews().add(review);
        user.get().getReviews().add(review);
        return reviewRepository.save(review);
    }

    @PostMapping("/api/user/{userId}/theatre/{theatreId}")
    public Review createReviewTheatre(@RequestBody Review review, @PathVariable("theatreId") int tid, @PathVariable("userId") int uid) {
        Optional<Theatre> theatre =theatreRepository.findById(tid);
        Optional<User> user =userRepository.findById(uid);
        review.setTheatre(theatre.get());
        review.setUser(user.get());
        theatre.get().getReviews().add(review);
        user.get().getReviews().add(review);
        return reviewRepository.save(review);
    }

    @DeleteMapping("/api/review/{reviewId}")
    public void deleteReview(@PathVariable("reviewId") int reviewId) { reviewRepository.deleteById(reviewId);
    }
}
