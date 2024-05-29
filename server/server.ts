import express from 'express'

const app = express()

app.get('/', async (req, res) => {
    res.json("Olá mundo!");
})

app.listen(3000),  () => {
    console.log("Server is running at the port 3000");
}
