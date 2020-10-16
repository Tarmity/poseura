const express = require("express");
const path = require("path");
const app = express();
const passport = require("./config/passport");
const mongoose = require('mongoose')
// Define middleware here

const PORT = process.env.PORT || 3001;
// Send every other request to the React app
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Useraccount',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize());
app.use(passport.session());

// Define API routes here

require("./routes/apiRoutes")(app);


// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
