require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo.js");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json()); // esta preparada para recibir info a través de un POST

// app.use(
//   cors({
//     origin: "https://programando-ando-deploy.vercel.app",
//     credentials: true,
//   })
// );

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

const port = process.env.PORT || 3001;

// TODO lo que haya en api concatenado con la ruta

app.use("/api", require("./routes"));

app.listen(port, () => console.log(`App lista en puerto: ${port}`));

// ejecuta la conección a Atlas
dbConnect();
