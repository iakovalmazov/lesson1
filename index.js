const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req,res) => {
  if(req.query.name || req.query.surname) {
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
            <input id="name" name="name" type="text" value="${req.query.name}">
            <label for="surname">Фамилия</label>
            <input id="surname" name="surname" type="text" value="${req.query.surname}">
            <button type="submit">Проверить знания</button>
          </form>
          <h1>Неверно!</h1>
        </body>
        </html>`
      )
    }
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
          <input id="name" name="name" type="text">
          <label for="surname">Фамилия</label>
          <input id="surname" name="surname" type="text">
          <button type="submit">Проверить знания</button>
        </form>
      </body>
      </html>`
    )
  }
})

app.listen(PORT, ()=> {
  console.log('server is running')
})