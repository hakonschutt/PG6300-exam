const bcrypt = require('bcrypt-nodejs');

const Database = require('../Database');
const queries = require('../queries');

class User {
  constructor({
    userId = null, name, email, password
  }) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  hashPassword() {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (error, salt) => {
        if (error) return reject(error);

        return bcrypt.hash(this.password, salt, null, (err, hash) => {
          if (err) return reject(err);
          this.password = hash;
          return resolve();
        });
      });
    });
  }

  comparePassword(candidatePassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return reject(err);
        return resolve(isMatch);
      });
    });
  }

  async save() {
    try {
      await this.hashPassword();
      const { rows } = await Database.query(
        queries.insertNewUser,
        [this.name, this.email, this.password]
      );

      this.userId = rows[0].userId;
      return this;
    }
    catch (err) {
      throw new Error('Could not save the user');
    }
  }

  async update({ name = null, email = null, password = null }) {
    if (!this.userId) {
      throw new Error('You need to save the user before it can be updated');
    }

    if (!name && !email && !password) {
      throw new Error('You need to include a name, email or password');
    }

    try {
      if (name) {
        this.name = name;
      }

      if (email) {
        this.email = email;
      }

      if (password) {
        this.password = password;
        await this.hashPassword();
      }

      await Database.query(
        queries.updateUser,
        [this.userId, this.name, this.email, this.password]
      );

      return this;
    }
    catch (err) {
      throw new Error('Could not update user');
    }
  }

  static async findById(id) {
    try {
      const { rows } = await Database.query(queries.findUserById, [id]);

      if (rows.length < 1) throw new Error();

      return new User(rows[0]);
    }
    catch (err) {
      throw new Error('Kunne ikke finne en bruker');
    }
  }

  static async findByEmail(email) {
    try {
      const { rows } = await Database.query(queries.findUserByEmail, [email]);

      if (rows.length < 1) throw new Error();

      return new User(rows[0]);
    }
    catch (err) {
      throw new Error('Kunne ikke finne en bruker');
    }
  }

  static async findAll() {
    try {
      const { rows } = await Database.query(queries.findAllUsers);
      return rows.map(row => new User(row));
    }
    catch (err) {
      throw new Error('Kunne ikke finne en bruker');
    }
  }

  static async deleteById(id) {
    try {
      const { rows } = await Database.query(queries.deleteUserById, [id]);

      return rows[0].userId === id;
    }
    catch (err) {
      throw new Error('Kunne ikke finne en bruker');
    }
  }
}

module.exports = User;
