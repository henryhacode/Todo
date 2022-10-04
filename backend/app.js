const express = require("express");
const cors = require("cors");

const TodoRouter = require("./routes/TodoRouter");
const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());

// Router
app.use("/todos", TodoRouter);

// Error
app.use((err, req, res, next) => {
  res.status(500).json({ error: `Internal server error ${err}`});
});


app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
