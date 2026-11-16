import express from "express"; //here we have the main index file which will be the driver of the entire project
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import router from "./routes/auth.route.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.json({ message: "hello from auth" });
});

app.listen(port, () => {
    console.log(`auth started at ${port}`);
    connectDB();
});