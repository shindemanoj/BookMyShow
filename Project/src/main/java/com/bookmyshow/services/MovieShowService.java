package com.bookmyshow.services;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyshow.models.Movie;
import com.bookmyshow.models.MovieShow;
import com.bookmyshow.models.Theatre;
import com.bookmyshow.repositories.MovieRepository;
import com.bookmyshow.repositories.MovieShowRepository;
import com.bookmyshow.repositories.TheatreRepository;

@RestController
public class MovieShowService {
	@Autowired
	MovieShowRepository movieShowRepository;
	@Autowired
	TheatreRepository theaterRepository;
	@Autowired
	MovieRepository movieRepository;

	 @GetMapping("/api/movie/{movieId}/movieshow/{date}")
	 public Set<Theatre> findMovieShowsForAMovie(@PathVariable("movieId") int movieId, @PathVariable("date") String selectedDate) {
		 Set<Theatre> theatres = new HashSet<>();
		 Optional<Movie> movie = movieRepository.findById(movieId);
		 List<MovieShow> movieShows = (List<MovieShow>) movieShowRepository.findMovieShowsByMovieAndDate(movie.get().getTitle(), selectedDate);
		 for(MovieShow show:movieShows) {
			 theatres.add(show.getTheatre());
		 }
	 return theatres;
	 }

	@PostMapping("/api/movie/{movieId}/theatre/{theatreId}/movieshow")
	public List<MovieShow> createMovieShows(@PathVariable("movieId") int movieId,
			@PathVariable("theatreId") int theatreId) throws ParseException {
		Optional<Movie> movie = movieRepository.findById(movieId);
		Optional<Theatre> theater = theaterRepository.findById(theatreId);
		Movie movieObj = movie.get();
		Theatre theatreObj = theater.get();
		List<MovieShow> movieShows = (List<MovieShow>) movieShowRepository
				.findMovieShowsByTheatreAndMovie(theatreObj.getName(), movieObj.getTitle());
		if (!movieShows.isEmpty()) {
			return movieShows;
		}
		createMovieShows(movieObj, theatreObj);
		return movieShows;
	}

	private void createMovieShows(Movie movie, Theatre theatre) throws ParseException {
		Date startDate = new Date();
		Date endDate = addDays(startDate, 7);
		LocalDate start = startDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
		LocalDate end = endDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
		MovieShow show = null;
		for (LocalDate date = start; date.isBefore(end); date = date.plusDays(1)) {
			show = new MovieShow(movie.getTitle(), 25, 1, theatre.getName(), theatre.getLocation(), date.toString(),
					"9", movie, theatre);
			movieShowRepository.save(show);
			show = new MovieShow(movie.getTitle(), 25, 1, theatre.getName(), theatre.getLocation(), date.toString(),
					"12", movie, theatre);
			movieShowRepository.save(show);
			show = new MovieShow(movie.getTitle(), 25, 1, theatre.getName(), theatre.getLocation(), date.toString(),
					"3", movie, theatre);
			movieShowRepository.save(show);
			show = new MovieShow(movie.getTitle(), 25, 1, theatre.getName(), theatre.getLocation(), date.toString(),
					"6", movie, theatre);
			movieShowRepository.save(show);
		}
	}

	public static Date addDays(Date date, int days) {
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(date);
		cal.add(Calendar.DATE, days);

		return cal.getTime();
	}

	@GetMapping("/api/theatre/{theatreId}/movie")
	public Set<Movie> findAllMoviesForTheatre(@PathVariable("theatreId") int theatreId) {
		Set<Movie> movies = new HashSet<>();
		Optional<Theatre> theater = theaterRepository.findById(theatreId);
		List<MovieShow> movieShows = (List<MovieShow>) movieShowRepository
				.findMovieShowsByTheatre(theater.get().getName());
		for (MovieShow ms : movieShows) {
			movies.add(ms.getMovie());
		}
		return movies;
	}

	@DeleteMapping("/api/theatre/{theatreId}/movie/{movieId}")
	public void findUserById(@PathVariable("theatreId") int theatreId,
			@PathVariable("movieId") int movieId) {
		Optional<Movie> movie = movieRepository.findById(movieId);
		Optional<Theatre> theater = theaterRepository.findById(theatreId);
		Movie movieObj = movie.get();
		Theatre theatreObj = theater.get();
		List<MovieShow> movieShows = (List<MovieShow>) movieShowRepository
				.findMovieShowsByTheatreAndMovie(theatreObj.getName(), movieObj.getTitle());
		for(MovieShow ms: movieShows) {
			movieShowRepository.delete(ms);
		}
		movieRepository.deleteById(movieId);;
	}

}
