const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

//DB Connection
const conn = require("./db/conn")

// Routes
const routes = require("./routes/router")

app.use("/api/", routes);

conn()

app.listen(300, function () {
    console.log("Servidor Online");
})
