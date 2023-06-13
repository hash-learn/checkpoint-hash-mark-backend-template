const express = require("express");
const app = express()
// Routes
const auth = require("./routes/auth");
app.use("/api", auth);


const port = process.env.PORT || 8000;
const hostname = '127.0.0.1'
app.listen(port, () => console.log(`Server running on port ${port} 🎆`));