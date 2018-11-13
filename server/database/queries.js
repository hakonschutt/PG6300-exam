module.exports = {
  createUuid: `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
  `,
  createUserTable: `
    CREATE TABLE IF NOT EXISTS users (
      user_id             uuid                DEFAULT       uuid_generate_v4(),
      name                varchar(255)        NOT NULL,
      email               varchar(255)        NOT NULL,
      password            varchar(255)        NOT NULL,

      PRIMARY KEY (user_id)
    )
  `,
  insertNewUser: `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3) returning user_id
  `,
  findUserById: `
    SELECT * FROM users WHERE user_id = $1
  `,
  findUserByEmail: `
    SELECT * FROM users WHERE email = $1
  `,
  findAllUsers: `
    SELECT * FROM users
  `,
  updateUser: `
    UPDATE users SET name = $2, email = $3, password = $4 WHERE user_id = $1 returning user_id
  `,
  deleteUserById: `
    DELETE FROM users WHERE user_id = $1 returning user_id
  `,
  createQuizTable: `
    CREATE TABLE IF NOT EXISTS quizzes (
      quiz_id             uuid                DEFAULT       uuid_generate_v4(),
      title               varchar(255)        NOT NULL,
      number_of_players   int                 DEFAULT       4,

      PRIMARY KEY (quiz_id)
    )
  `,
  insertNewQuiz: `
    INSERT INTO quizzes (title, number_of_players) VALUES ($1, $2) returning quiz_id
  `,
  findQuizById: `
    SELECT * FROM quizzes WHERE quiz_id = $1
  `,
  findAllQuizzes: `
    SELECT * FROM quizzes
  `,
  updateQuiz: `
    UPDATE quizzes SET title = $2, number_of_players = $3 WHERE quiz_id = $1
  `,
  deleteQuizById: `
    DELETE FROM quizzes WHERE quiz_id = $1 returning quiz_id
  `,
  createQuestionTable: `
    CREATE TABLE IF NOT EXISTS questions (
      question_id         uuid                DEFAULT       uuid_generate_v4(),
      question            varchar(255)        NOT NULL,
      answers             varchar(255)[]      NOT NULL,
      correct_index       int                 NOT NULL,
      order_in_quiz       int                 NOT NULL,
      quiz_id             uuid                NOT NULL,

      PRIMARY KEY (question_id),
      FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id)
    )
  `,
  insertNewQuestion: `
    INSERT INTO questions (
      question,
      answers,
      correct_index,
      order_in_quiz,
      quiz_id
    ) VALUES ($1, $2, $3, $4, $5) returning question_id
  `,
  findQuestionById: `
    SELECT * FROM questions WHERE question_id = $1
  `,
  findAllQuestions: `
    SELECT * FROM questions
  `,
  updateQuestion: `
    UPDATE questions
    SET question = $2,
        answers = $3,
        correct_index = $4,
        order_in_quiz = $5,
        quiz_id = $6
    WHERE question_id = $1
  `,
  deleteQuestionById: `
    DELETE FROM questions WHERE question_id = $1 returning question_id
  `,
  deleteQuestionByQuizId: `
    DELETE FROM questions WHERE quiz_id = $1 returning quiz_id
  `
};
