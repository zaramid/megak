const express = require('express');
const bartekApp = express();

bartekApp.get('/app/:math', (req, res) => {
    let result = null;
    const math = req.params.math;
    const {value1, value2} = req.query;

    switch (math) {
        case 'add':
            result = Number(value1) + Number(value2);
            break;
        case 'subtract':
            result = Number(value1) - Number(value2);
            break;
        case 'multiply':
            result = Number(value1) * Number(value2);
            break;
        default:
            result = 'Nie rozpoznałem operacji.'
    }

    res.send(`Wynik działania to ${typeof result === 'number' ? result.toFixed(2) : result}`);
});

bartekApp.listen(3000);