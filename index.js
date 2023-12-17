import express from "express";

const app = express();
const port = 3000;

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
*/

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
