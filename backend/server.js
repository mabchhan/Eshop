import express from "express";
//import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();

connectDB(); // Connect to MongoDB
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoute);

// app.get("/api/products", (req, res) => {
//   res.send(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.send(product);
// });

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
