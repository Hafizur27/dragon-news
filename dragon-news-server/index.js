const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;
const categories = require("./categories.json");
const news = require("./news.json");

// middleware
app.use(cors());

// categories get api
app.get("/categories", (req, res) => {
  res.send(categories);
});

// all news get api
app.get("/news", (req, res) => {
  res.send(news);
});

// single news get api
app.get("/news/:id", (req, res) => {
  const id = req?.params?.id;
  const singleNews = news.find((n) => n._id == id);
  res.send(singleNews);
});

// single category news get api
app.get("/categories/:id", (req, res) => {
  const id = req?.params?.id;
  if (id == 0) {
    res.send(news);
  } else {
    const singleCategory = news?.filter((sn) => sn?.category_id == id);
    res.send(singleCategory);
  }
});

app.get("/", (req, res) => {
  res.send("dragon news server");
});
app.listen(port, () => {
  console.log(`dragon news server is running on port ${port}`);
});
