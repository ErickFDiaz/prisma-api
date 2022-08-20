const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 3333
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.post('/campaign', async (req, res) => {
    try {
        const { name, portalName, status, description, type } = req.body
        const result = await prisma.campaign.create({
            data: {
                name,
                portalName,
                status,
                description,
                type
            }
        })
        res.json(result)
    } catch (error) {
        res.json(error)
    }
})

app.get('/campaign', async (req,res)=> {
    try {
        const result = await prisma.campaign.findMany()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server ready at: http://localhost:${PORT}`);
})