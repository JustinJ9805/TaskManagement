require ("dotenv").config();


const express = require("express");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());

app.get("/", async (req,res) => {
    return res.json({message: "Hello, World"});
});

const start = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL
        )
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

start();