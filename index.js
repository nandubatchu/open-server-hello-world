const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello from first open server function!`);
}); 

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('listening on port', port);
});