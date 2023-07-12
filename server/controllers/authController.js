const AuthSchema = require("../models/authModel.js");
const jwt = require("jsonwebtoken");
const bcrypte = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(500).json({ msg: "This user already exist" });
    }
    if (password.length < 6) {
      return res
        .status(500)
        .json({ msg: "Password cannot be less than 6 characters" });
    }
    const passwordHash = await bcrypte.hash(password, 12);

    if (!isEmail(email)) {
      return res.status(500).json({ msg: "Wrong email format" });
    }

    const newUser = await AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });

    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthSchema.findOne({ email });

    if (!user) {
      return res.status(500).json({ msg: "No user found with matching email" });
    }

    const passwordCompare = await bcrypte.compare(password, user.password);

    if (!passwordCompare) {
      return res.status(500).json({ msg: "The password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

    res.status(200).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

function isEmail(email) {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { register, login };
