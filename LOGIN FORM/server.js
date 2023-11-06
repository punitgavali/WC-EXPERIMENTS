const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    // Validate the form data here (similar to the previous JavaScript validation)
    // You can send a response back to the client based on the validation result.
    // For this example, we'll just display a success message.
    res.send(`Validation successful. Received username: ${username}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
