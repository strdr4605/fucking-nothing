const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const { join } = require('path')

app.use(express.static('assets'))
app.use(express.static('js'))
app.use(express.static('css'))

app.get('*', (_, res) => {
  res.sendFile(join(__dirname, 'html', 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}.`))
