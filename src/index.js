import express from 'express';

const app = express();

app.get('/', (req, res) => {

    res.send('<h1>Hello World!</h1>');
})


app.get('/caculation/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.send({
        nhan : a*b,
        chia: a/b,
        
    });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
