const User = require('../models/User');

module.exports = {
  async init() {
    try {
      const oldUser = await User.findAll();

      if (oldUser.length < 1) {
        await new User({
          name: 'John doe',
          email: 'john@doe.no',
          password: 'admin'
        }).save();
      }
    }
    catch (err) {
      console.log('ERROR:', err);
    }
  }
};
