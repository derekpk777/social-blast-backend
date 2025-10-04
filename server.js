const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/blast', async (req, res) => {
  const { message, platforms } = req.body;
  console.log('Blasting:', message, 'to', platforms);
  res.json({ status: 'success', platforms });
});

app.get('/', (req, res) => {
  res.send('Social Blast backend is running!');
});

app.listen(3001, () => console.log('Backend running on port 3001'));
