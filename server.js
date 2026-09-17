const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

app.use(express.json());

// Serve shared files such as stylesheets and images from the public folder.
app.use(express.static(PUBLIC_DIRECTORY));

app.get("/", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIRECTORY, "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIRECTORY, "contact.html"));
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email, and message are required"
    });
  }

  res.status(201).json({
    message: "Your contact message was received",
    contact: { name, email, message }
  });
});

app.post("/feedback", (req, res) => {
  const { rating, comment } = req.body;

  if (!rating || !comment) {
    return res.status(400).json({
      error: "rating and comment are required"
    });
  }

  res.status(201).json({
    message: "Thank you for your feedback",
    feedback: { rating, comment }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
