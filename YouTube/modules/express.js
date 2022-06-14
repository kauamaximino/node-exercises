const express = require('express');

const app = express();

app.get("/users", (request, response) => { 
    response.send("<h2>Hello World!</h2>");
})

app.listen(8080, () => {
  console.log('rodando na porta 8080');
})