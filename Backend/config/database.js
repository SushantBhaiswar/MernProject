const mongoose = require("mongoose");
require("dotenv").config({ path: "Backend/config/config.env" });
module.exports = {
  connectdb: () => {
    mongoose
      .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) =>
        console.log("Mogodb is connected with " + data.connection.host)
      )
      .catch((err) => console.log(err));
  },
};
