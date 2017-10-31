import express from 'express'

const app = express()

app.use(express.static(__dirname, '/public'))

app.listen(3000, () => console.log('My SWAPI app is listening on port 3000'))
