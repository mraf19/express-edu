const express = require("express");

const mainRouter = require("./router");

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("views"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", mainRouter);

app.listen(port, () => {
	console.log(`Server is listeing on http://localhost:${port}`);
});
