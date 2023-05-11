import express from "express"
import setupMiddleware from "./config/setup-middleware"

const app = express();
setupMiddleware(app);

const port = 3000;

app.get('/', (req, res) => {
    res.send('hello friend')
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})