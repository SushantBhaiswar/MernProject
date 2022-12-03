const app = require("./app");
const { connectdb } = require("./config/database");

require("dotenv").config({ path: "Backend/config/config.env" });
connectdb();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
