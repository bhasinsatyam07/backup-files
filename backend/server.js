import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import seedRoute from "./routes/seedRoutes.js"
import productRoute from "./routes/productRoute.js"
import userRoute from "./routes/userRoute.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/seed", seedRoute)

app.use("/api/products", productRoute)

app.use("/api/users", userRoute)

//error handler
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

//middlewares

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("My Mongo DB connected successfully"))
  .catch((err) => {
    console.log(err)
  })

app.listen(1317, () => {
  console.log(`backend server is running on http://localhost:${1317}`)
})
