const express = require('express')

const app = express()

app.get('/', (req,res) => {
  let mistake = ''
  if(req.query.name || req.query.surname) mistake = 'Неверно!'
  if(req.query.name === 'Алексей' && req.query.surname === 'Локтев') {
    res.send(`Все верно. ${req.query.name} ${req.query.surname}`)
  } else {
    res.send(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>lesson1</title>
      </head>
      <body>
        <h1>Как зовут преподавателя?</h1>
        <form method="GET">
          <label for="name">Имя</label>
          <input id="name" name="name" type="text" value="${req.query.name || ''}">
          <label for="surname">Фамилия</label>
          <input id="surname" name="surname" type="text" value="${req.query.surname || ''}">
          <button type="submit">Проверить знания</button>
        </form>
        <h1>${mistake}</h1>
      </body>
      </html>`
    )
  }
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
  console.log('server is running')
})