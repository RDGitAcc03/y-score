const express = require("express");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 8080;
const cors = require("cors");
const usersRoute = require("./routes/usersRoute");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();


app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(cookieParser());

app.use("/users", usersRoute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Listening on port " + port);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
