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

  getHashPassword() {
    return this.password;
  }

  async save() {
    try {
      const hash = await this.getHashPassword();
      const { rows } = await Database.query(queries.insertNewUser, [this.name, this.email, hash]);
      this.userId = rows[0].userId;
      this.password = hash;

      return this;
    }
    catch (err) {
      throw new Error('Kunn ikke lagre bruker');
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

  static async findAll() {
    try {
      const { rows } = await Database.query(queries.findAllUsers);
      return rows.map(row => new User(row));
    }
    catch (err) {
      throw new Error('Kunne ikke finne en bruker');
    }
  }
}

module.exports = User;
