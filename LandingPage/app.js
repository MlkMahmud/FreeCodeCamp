const express = require('express'),
      PORT    = process.env.PORT  || 4000,
      app     = express()

app.use(express.static('public'))
app.listen(PORT, ()=> console.log('Listening'));