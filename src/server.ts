import dotenv from "dotenv";
import connectToDatabase from "./database/db";
import app from "./app";

dotenv.config();

connectToDatabase();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server is running on port ${port}`));