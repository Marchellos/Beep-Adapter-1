const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('combined'));

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).send('Beep Data Forwarder draait!');
});

// Je echte endpoint
app.post('/beep-data-forwarder', (req, res) => {
    console.log(`[${new Date().toISOString()}] Inkomende payload ontvangen:`);
    console.log(JSON.stringify(req.body, null, 2));

    res.status(200).json({ message: "Payload ontvangen en gelogd" });
});

// Laat de poort dynamisch bepalen door Railway of fallback op 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`[${new Date().toISOString()}] Server draait op poort ${PORT}`);
});
