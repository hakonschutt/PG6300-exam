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
  createQuizTable: `
    CREATE TABLE IF NOT EXISTS quizzes (
      quiz_id             uuid                DEFAULT       uuid_generate_v4(),
      title               varchar(255)        NOT NULL,
      number_of_players   int                 DEFAULT       4,

      PRIMARY KEY (quiz_id)
    )
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
    UPDATE users SET name = $2, email = $3, password = $4 WHERE id = $1 returning name
  `,
  deleteUserById: `
    DELETE FROM users WHERE id = $1 returning id
  `
};
