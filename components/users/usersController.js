const bcrypt = require("bcryptjs");

const UserModel = require("./usersModel");

module.exports = {
  signUp: async (req, res) => {
    const { username, password, role } = req.body;
    if (!res.locals.fail) {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
          username,
          password: hashedPassword,
          role,
        });
        await user.save();
        sendToken(user, 200, res, "Signup-success", role);
      } catch (err) {
        res.status(500);
        res.render("error", { error: err });
      }
    } else {
      res.render("/", {
        username,
      });
    }
  },
  signIn: async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username: username });
    if (user === null) {
      return res.send("Invalid-username-or-password.");
    }
    const rs = bcrypt.compareSync(password, user.password);
    if (rs === false) {
      return res.send("Invalid-username-or-password.");
    }
    const { role } = user;
    sendToken(user, 200, res, "Login-success", role);
  },
};

const sendToken = (user, statusCode, res, message, role) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({
    message,
    statusCode,
    sucess: true,
    token,
    role,
  });
};
