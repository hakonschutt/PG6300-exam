[![Build Status](https://travis-ci.com/hakonschutt/PG6300-exam.svg?token=685Vkj7Z4Bw9G4suxzq5&branch=master)](https://travis-ci.com/hakonschutt/PG6300-exam)

# PG6300 exam

### Exam text

The application topic for this exam is about an online, multi-player quiz game. A registered user (let’s
call him/her X) can start a new match and wait. Every time a new user wants to start a game, s/he will
join the game of X. Once X sees that there are enough other players (at least 1) that want to play, s/he
will actually start the match. No other player can join that specific match once started (they will start
their own new match).
In a match, there are going to be N quizzes (e.g., N=10) on some topic (each time at random). Each quiz
will have up to M answers (e.g., M=4), where only 1 is correct. Players get points based on the correct
answers and how long they take to answer (the quicker, the more points). At the end of the N quizzes,
players should be ranked, and the one with most points will be declared as the winner.
Add any extra feature relevant to such type of system. This is going to be very important for B/A grades.

## Questions!

### What it does

#### Implemented

- [x] Homepage
- [x] React-Router with minimum 2 pages beside homepage
- [x] Stateful page (`MatchPage`)
- [x] RESTful API with at least one GET and on POST
- [x] Frontend uses REST api
- [x] Websockets
- [x] session based authentication

#### Extra

- [x] Nginx with proxy between frontend and api in development
- [x] Nps for better script handling
- [x] Full implementation of docker-compose
- [x] Local database with Docker
- [x] Simple postgres ORM
- [x] Deployment to cloud provider [website](https://web-api-exam.herokuapp.com/)
- [x] Implemented Travis CI for continuous integration and continuous delivery
- [x] Added testSetup with one simple test case _for future development_
- [x] Added full webpack setup with production optimisation including image handler
- [x] Added Sass for better style structure
- [x] Lazy loaded pages with chunk hash for better user experience with lower loadtime
- [x] Full developer setup with prettier and eslint
- [x] REST endpoints for POST and DELETE for quiz
- [x] Flow for type checking. This is static checked instead of at runtime like PropTypes (Will therefor not increase code size in production) [Read more](https://reactjs.org/docs/static-type-checking.html)

#### Future

- [ ] Add create quiz component
- [ ] Add live chat in match
- [ ] Add global chat for non-matched players for planing

### Structure

### Technologies

### Database

The application uses a postgres database. I have implemented a simple ORM system on the server side to make for a better development experience. This ensures that i can use static methods to query the table, and object method to alter the entry.

##### Create user

```javascript
  const user = await new User({ ...info }).save();
```

##### Query users

```javascript
  const user = await User.findById(userId);
```

The database includes 3 tables that have respective ORM classes.

| Tables    | PK          | FK      |
| --------- | ----------- | ------- |
| users     | user_id     |         |
| quizzes   | quiz_id     | user_id |
| questions | question_id | quiz_id |

#### Login info
