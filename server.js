const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log("App is running on port " + app.get('port'));
});
