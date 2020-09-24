const express = require("express");
// const path = require("path");
const mongoose = require ('mongoose');
require('dotenv').config();
const routes = require("./routes")
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: ['http://localhost'],
  allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
  credentials: true,
  enablePreflight: true
}


app.use(cors(corsOptions));
app.options('*', cors(corsOptions))


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

// mongoose.connect("mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb", {
//   auth: {
//     user: process.env.COSMODDB_USER,
//     password: process.env.COSMOSDB_PASSWORD
//   },
// useNewUrlParser: true,
// useUnifiedTopology: true,
// retryWrites: false
// })
// .then(() => console.log('Connection to CosmosDB successful'))
// .catch((err) => console.error(err));
console.log(process.env.ATLAS_CONNECT);
mongoose.connect(
  process.env.ATLAS_CONNECT, {useNewUrlParser:true, useUnifiedTopology: true})
//   "mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb", {
//   auth: {
//     user: process.env.COSMODDB_USER,
//     password: process.env.COSMOSDB_PASSWORD
//   },
// useNewUrlParser: true,
// useUnifiedTopology: true,
// retryWrites: false
// } 
// process.env.MONGODB_URI
// || "mongodb://localhost/idrivewash", {useNewUrlParser: true,  useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
