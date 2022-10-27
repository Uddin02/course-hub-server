const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const coursesDetails = require("./data/courses-details.json");

app.get("/", (req, res) => {
  res.send("Course Hub api is running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses-details", (req, res) => {
  res.send(coursesDetails);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id)
  const courseCategory = coursesDetails.filter((coursesDetail) => coursesDetail.category_id === id );
  // console.log(courseCategory);
  // res.send(courseCategory);
  res.send(courseCategory);
});

app.get("/coursesDetails/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = coursesDetails.find((cd) => cd._id === id);
  res.send(selectedCourse);
  // console.log(req.params.id);
});

app.listen(Port, () => {
  console.log("server is running on port", Port);
});
