const e = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const app = e();

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
const mongoURI = require("./dbconfig/db").mongoURI;

const routes = require("./routes/main");

app.use(cors());

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`You are in port ${port}`);
});
