                                     ### Movie Ticket booking

Problem Statement-  To Build a website where the user can book online movie tickets, review movies, read movie and theatre reviews and watch movie trailers. 

Internet has made our lives simpler and we do not need to stand in long queues outside a multiplex to buy movie tickets anymore.  We can book a ticket online. Pick our favourite seats and follow other users to get updates on their activities.

As part of our project for CS5200 we are trying to build an online movie ticket booking system where different users will have different privileges.


Following are the Users which can access our website:

1.	Anonymous User – 
•	He can browse our website and see the movies that are currently running in the theaters, and movie trailers. 
•	He can click on the movie poster and read the movie reviews.
•	He can view the list of theatres and the show timings. 
2.	Admin User –
•	Admin can do CRUD operations on Users of the website
•	He can do CRUD operations on the theaters.
•	Admin can delete any movie reviews
•	Can do CRUD operations on Movies.
3.	Registred User-
•	Can view the movies currently running in the theaters.
•	Can book a seat for a movie show.
•	Review a movie and theatre.
•	Follow another users to get notifications when they write any reviews.
4.	Multiplex Representatives-
•	Can add, update, delete  show timings
•	View Theatre reviews
•	Can add, update, delete a movie.
•	Can add, update, delete theatre information.

Relation between Users:
1.	A user can book a show added by theatre representative
2.	A user can write a review for a theatre added by theatre representative

Following are the domain objects:
1.	Reviews
2.	Movies
3.	Theatres

Relation between domain Objects:
1.	Theatre and Movies have reviews
2.	A Movie is played in a theatre.
3.	A theatre has many movies running.

Relation between users and domian objects-
1.	A user can write movie and theatre reviews.
2.	A user can book movie tickets

1.	A theatre representative can modify the movie show details
2.	He can view the theatre reviews and reply to theatre reviews.
3.	He can add multiple theatres.


APIs:

1.	We are going to use “The open movie database API” for our project. The api would be used to get movie posters, plot and cast of the movie.

2.	Another API that we are using in our project is the “Google Maps” api to display the direction from the users home to the theatre where the user has an upcoming  movie show. 

3.	We are also going to use the “Trailer Addict api” to display the trailer of the movies currently running in the theatres. 

