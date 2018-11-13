const User = require('../models/User');

module.exports = {
  async init() {
    try {
      const oldUser = await User.findAll();

      if (oldUser.length < 1) {
        const user = await new User({
          name: 'Hakon Schutt',
          email: 'hakon@schutt.no',
          password: 'heisann'
        }).save();
      }
    } catch (err) {
      console.log("ERROR:", err);
    }
  }
};
