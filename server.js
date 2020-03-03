const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3000
const STATIC_DIR = path.join(__dirname, 'public')

const app = express()

app.use(express.static(STATIC_DIR))

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'index.html'))
})

app.get('/page-1', (req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'page1/page1.html'))
})

app.get('/page-2', (req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'page2/page2.html'))
})

app.get('*', (req, res) => res.status(404).send('Not Found'))

const server = app.listen(PORT, () =>
  console.log(`Running at http://localhost:${PORT}`)
)

// Cleanup
process.on('SIGTERM', () => server.close())
