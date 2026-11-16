import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { createProxyMiddleware } from "http-proxy-middleware"
import cors from "cors"
import cookieParser from "cookie-parser";

const port = process.env.PORT;

const app = express();


app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}))


app.use(express.json())
app.use(cookieParser())



app.use(
  "/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE,
    changeOrigin: true,
  })
);

app.get("/", (req,res) => {
  res.json({message:"hello from agteway"})
})

app.listen(port,() => {
  console.log(`gateway started at ${port}`)
})