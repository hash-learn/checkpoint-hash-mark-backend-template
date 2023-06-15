import morgan from "morgan";
import express from "express";
//database connection
import db from "./config/db.js"
// Routes
import auth from "./routes/auth.js";
import productRouter from "./routes/Products.js"
import userRouter from "./routes/User.js"
import cors from "cors";

const app = express();

db.once("open", () => {
    console.log('connected to database');
})

app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", auth);

app.use("/products", productRouter);

app.use("/user", userRouter)

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port} 🎆`));