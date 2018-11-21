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

Questions is a simple quiz application that utilizes websocket for live quiz update. It allows users to follow several use cases.

There is a simple action for joining games. If there are noe games pending the user will create a new match with a random quiz. If multiple quizzes are pending the user is granted the option to quiz which quiz they want to enter.

The user can also setup its own quiz.

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

### Running Project

The project uses docker compose to run the in development. There is a script setup in the `package.json` that will init docker-compose.

You can run the command to start the server

```
docker-compose up --build -V
```

or you can run `npm run dev` which will start the docker script for you.

### Structure

The project follows a traditional enterprise structure for the react app.

React structure:

```
frontend/
src/                -> Main src folder for react files
    actions/        -> Redux actions
    assets/         -> images and style files
    components/     -> react components
    constants/      -> constants element like router and app wrapper
    containers/     -> React pages
    hocs/           -> high order components
    reducers/       -> Redux reducers
    utils/          -> utils files
  tests/            -> Test files
  web/              -> Static webfiles (favicon and html)
  webpack/          -> webpack configs
```

Server structure:

```
server/
  config/           -> config files for initializing different application components
  database/         -> Database files for models and seeds
  handlers/         -> Routes handlers
  middlewares/      -> express middlewares used for authentication
  routes/           -> REST endpoints
  services/         -> Application services
  sockets/          -> Socket configurations
  tests/            -> Test files
```

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

User 1

```javascript
name: 'John doe',
email: 'john@doe.no',
password: 'admin'
```

User 2

```javascript
name: 'Doe John',
email: 'doe@john.no',
password: 'admin'
```
