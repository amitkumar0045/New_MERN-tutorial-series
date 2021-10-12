const express = require('express')
const notes = require('./data/notes') //dummy data for check only
const dotenv = require("dotenv");//contains secrt info like api-keys
const connectDB = require('./config/db');

const userRoute = require('./routes/userRoute')



const app = express();
app.use(express.json());
dotenv.config();
connectDB();

//\\----
// app.get("/", (req, res) => {
//     res.send("API is RUNNING....")
// })

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// })

// app.get('/api/notes/:id', (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note);
// })
//\\----

app.use('/api/users', userRoute);  // using Routes


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server Started on port ${PORT}`
    )
);
