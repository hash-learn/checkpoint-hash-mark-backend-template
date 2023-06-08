import mongoose from "mongoose";
const connectionUrl = "mongodb+srv://vicky:12345@cluster0.kbprlzg.mongodb.net/hashmarkt_backend";
mongoose
    .connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection established!");
    })
    .catch((err) => {
        console.log("Error connecting to database:", err);
    });

export default mongoose.connection;