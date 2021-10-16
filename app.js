import express from 'express'
import apiRoutes from './routes/api/index.js'

const host = '127.0.0.1'
const port = 3000

const app = express()

app.set('host', host)
app.set('port', port)

app.use(express.json())

app.use('/api', apiRoutes)

app.use((req, res, next) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`)
})
