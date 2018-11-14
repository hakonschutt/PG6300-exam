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
      user_id             uuid                NOT NULL,
      published           BOOLEAN             DEFAULT       false,

      PRIMARY KEY (quiz_id),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    )
  `,
  insertNewQuiz: `
    INSERT INTO quizzes (title, number_of_players, user_id, published) VALUES ($1, $2, $3, $4) returning quiz_id
  `,
  findQuizById: `
    SELECT * FROM quizzes WHERE quiz_id = $1
  `,
  findAllQuizzes: `
    SELECT * FROM quizzes LIMIT $1 OFFSET $2
  `,
  findQuizByUserId: `
    SELECT * FROM quizzes WHERE user_id = $1 LIMIT $2 OFFSET $3
  `,
  updateQuiz: `
    UPDATE quizzes SET title = $2, number_of_players = $3, published = $4 WHERE quiz_id = $1
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
  findQustionsByQuizId: `
    SELECT * FROM questions WHERE quiz_id = $1 LIMIT $2 OFFSET $3 ORDER BY order_in_quiz ASC
  `,
  findAllQuestions: `
    SELECT * FROM questions LIMIT $1 OFFSET $2
  `,
  updateQuestion: `
    UPDATE questions
    SET question = $2,
        answers = $3,
        correct_index = $4,
        order_in_quiz = $5
    WHERE question_id = $1
  `,
  deleteQuestionById: `
    DELETE FROM questions WHERE question_id = $1 returning question_id
  `,
  deleteQuestionByQuizId: `
    DELETE FROM questions WHERE quiz_id = $1 returning quiz_id
  `
};
