const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

app.listen(300, function () {
    console.log("Servidor Online");
})
