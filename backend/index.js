import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const url = "mongodb+srv://superuser:superuser@crud.a1359sv.mongodb.net/?retryWrites=true&w=majority"
//const url ='mongodb://localhost:27017/fullstack_db'
//const url ='http://127.0.01:27017/fullstack_db'
const app = express();
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running on port 5000...'));