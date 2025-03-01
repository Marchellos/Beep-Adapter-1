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

// ✅ Laat Railway bepalen (en lokaal kun je alsnog 3000 gebruiken)
const PORT = process.env.PORT || 8080;  // Dit is correct

app.listen(PORT, () => {
    console.log(`[${new Date().toISOString()}] Server draait op poort ${PORT}`);
});
