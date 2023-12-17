import express from "express";

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
