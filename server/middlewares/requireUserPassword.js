const requireUserPassword = async (req, res, next) => {
  try {
    if (!req.body.password) {
      return res.status(422).send();
    }

    const isMatch = await req.user.comparePassword(req.body.password);

    if (!isMatch) {
      throw new Error('Not a correct password');
    }

    delete req.body.password;

    return next();
  }
  catch (err) {
    return res.status(401).send();
  }
};

module.exports = requireUserPassword;
