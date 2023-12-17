import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numOfLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {
    numberOfLetters: numOfLetters,
  });
});

/*
app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let typeOfDay = "a weekday";
  let adv = "It's time to work hard";

  if (day === 0 || day === 6) {
    typeOfDay = "the weekend";
    adv = "It's time for some fun!";
  }

  res.render("index.ejs", {
    dayType: typeOfDay,
    advice: adv,
  });
});


app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("index.ejs", data);
});
*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
