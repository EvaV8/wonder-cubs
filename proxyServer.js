// INSTRUCTIONS: to make this server file work you need to always:
// type inside your terminal the following:
// node proxyServer.js
// If it works it'll say in terminal: "Server listening at http://localhost:8000"
// and then run the usual in another terminal:
// npm start

//packages
const express = require('express');
const port = 8000;
const axios = require('axios');
const cors = require('cors');  //have not used this one. Just for reference as an alternative
require('dotenv').config();

const apiKey = process.env.REACT_APP_MAPS_API_KEY;
const app = express();

//to resolve CORS error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//alternative method
// app.use(cors());


app.get('/clubs', (req, res) => {
  const passedQuery = req.query.query;
  console.log(passedQuery)
  axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?', {
    params: {
      query: passedQuery,     
      region: 'uk',
      key: apiKey
    }
  })
  .then(response => {
    res.json(response.data);
    console.log(response.data)
  })
  .catch(error => {
    res.status(500).json({ error: error.message });
  });
});
  

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`);
});










//async option
// app.get('/clubs', async (req, res) => {
//   // console.log(req);
//     try {
//       const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
//         params: {
//           query: 'junior football female clubs near bristol',
//         //   location: 'Bristol',
//         //   radius: 20000,
//           region: 'uk',
//           key: apiKey
//         }
//       });
//       res.json(response.data);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
// });