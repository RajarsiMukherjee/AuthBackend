const express = require("express");
const cors = require("cors");

const connect = require("./configs/db")

const dotenv = require("dotenv");
const app = express();
app.use(express.json());

let port = process.env.PORT || 2344;



const productApi = require("./controllers/ProductsController");

 


app.use(cors());

// const userController = require("./controllers/user.controller");
// const productController = require("./controllers/product.controller");
const { register, login, newToken } = require("./controllers/auth.controller");

// register
app.post("/register", register);
// .login
app.post("/login", login);

// app.use("/users", userController);
// app.use("/products", productController);

app.use("/api/payment/", paymentRoutes);

app.use("/product", productApi);

 

app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
