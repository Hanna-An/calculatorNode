import express from 'express'

let apiRoutes = express.Router()

apiRoutes.get('/sum/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let result = num1 + num2
    res.send({ result: result })
})

apiRoutes.get('/subtraction/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let result = num1 - num2
    res.send({ result: result })
})

apiRoutes.get('/multiplication/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let result = num1 * num2
    res.send({ result: result })
})

apiRoutes.get('/division/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let result = num1 / num2
    res.send({ result: result })
})

export default apiRoutes
