const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .get('/', (req, res) => {
        res.send('ok');
    })
    .get('/youtube', (req, res) => {
        const youtubeUrl = req.query.url;
        console.log(youtubeUrl);
        res.header('Refresh', '0; url=' + youtubeUrl);
        res.send('ok');
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))