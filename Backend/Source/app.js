import express from "express";
import { createServer } from "node:http";
import  User  from "./models/usermodel.js";
import bcrypt, { hash } from "bcrypt"

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./Controllers/Socketmanager.js"

import cors from "cors";
import userRoutes from "./routes/usersroute.js";
import crypto from "crypto"
const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://kp154206:krishpatel@cluster0.q7mzk.mongodb.net//")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();