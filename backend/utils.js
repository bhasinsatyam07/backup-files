import jwt from "jsonwebtoken"

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "wewew3334defef323232rwqq",
    {
      expiresIn: "30d",
    }
  )
}
