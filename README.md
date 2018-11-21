[![Build Status](https://travis-ci.com/hakonschutt/PG6300-exam.svg?token=685Vkj7Z4Bw9G4suxzq5&branch=master)](https://travis-ci.com/hakonschutt/PG6300-exam)

# PG6300 exam - Questions!

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
