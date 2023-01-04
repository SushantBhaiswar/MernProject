const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./router.js/Routes")
require("dotenv").config()

app.use(express.json());

mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((data) =>
        console.log("Mogodb is connected with " + data.connection.host)
    )
    .catch((err) => console.log(err));


app.use("/", route);

app.listen(process.env.PORT  , () => {
    console.log(`Server is running on port ${process.env.PORT} `);
});



