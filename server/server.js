const express= require('express');
const dotenv= require('dotenv');
const cors= require('cors');
const connectDB= require('./config/db');
const authRoutes = require("./routes/authRoutes");
const leetcodeRoutes = require("./routes/leetcodeRoutes");

dotenv.config();
connectDB();
const app= express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/leetcode", leetcodeRoutes);

const PORT= process.env.PORT || 5000;

app.get('/', (req, res)=> {
    res.send("Welcome to AptiNexa");
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})