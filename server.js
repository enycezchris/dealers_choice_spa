const express = require("express");
const app = express();
const { syncSeed, Pirate, Strawhat, Whitebeard, Roger } = require("./db");
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use("/dist", express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/pirates", async function (req, res, next) {
  try {
    const data = await Pirate.findAll();
    // console.log("data", data);
    res.send(data);
  } catch (e) {
    next(e);
  }
});

app.get("/api/strawhats", async function (req, res, next) {
  try {
    const data = await Strawhat.findAll();
    //   console.log("data", data);
    res.send(data);
  } catch (e) {
    next(e);
  }
});

app.get("/api/whitebeards", async function (req, res, next) {
  try {
    const data = await Whitebeard.findAll();
    //   console.log("data", data);
    res.send(data);
  } catch (e) {
    next(e);
  }
});

app.get("/api/rogers", async function (req, res, next) {
  try {
    const data = await Roger.findAll();
    //   console.log("data", data);
    res.send(data);
  } catch (e) {
    next(e);
  }
});

const setup = async () => {
  try {
    await syncSeed();
    app.listen(port, function () {
      console.log(`listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

setup();
