const express = require('express');
const app = express();
// const PORT = 3000;

app.get('/', (req, res) => {
    console.log('Default route was Hit');
    res.send('Hello world');
});

app.listen(process.env.PORT, () => {
    console.log(`Server Started ${process.env.PORT}`);
});
