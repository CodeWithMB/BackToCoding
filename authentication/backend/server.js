import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const App = express();

App.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});