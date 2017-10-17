import express from 'express';
import path from 'path';

const PORT = 7700;
const PUBLIC_PATH = __dirname + '/public';
const app = express();

app.use(express.static(PUBLIC_PATH));

app.all('*', function(req, res) {
    res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, function() {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
