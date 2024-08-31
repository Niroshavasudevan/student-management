require("dotenv").config();
const express = require("express");
const db = require("./db/index"); 
const studentRoutes = require("./routes/students/students"); 
const departmentRoutes = require("./routes/students/departments"); 

const app = express();
app.use(express.json());
db();

app.use("/students", studentRoutes);
app.use("/departments", departmentRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});