import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();


app.get("/", (req, res) => {
    res.send(`server started at port ${PORT}`);

})


app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});