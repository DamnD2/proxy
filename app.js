const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }))

app.get('/:url(*)', (req, res) => {
  const url = req.params.url;
  const query = req.query;
  
  axios.get(url, { params: query })
  .then((response) => res.json(response.data))
  .catch((error) => res.json(error))
});

app.listen(3000);