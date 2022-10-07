import express from "express"
import expressAsyncHandler from "express-async-handler"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils.js"
const userRoute = express.Router()

userRoute.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.find({ email: req.body.email })
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        })
        return
      }
    }
    res.status(401).send({ message: "Invalid email or password you endterd" })
  })
)

export default userRoute
