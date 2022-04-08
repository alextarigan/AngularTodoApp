function requireHTTPS(req,res,next){
    //the 'x-forwarder-proto' check is for heroku
    if(!req.secure && req.get('x-forwarded-proto') !== 'https'){
        return res.redirect('https://')
    }
    next();
}

const express = require('express');
const app = express();
const rootDir = './dist/TodoApp'
require('dotenv').config()
process.env.NODE_ENV == 'production' && app.use(requireHTTPS)


//komen apabila dicoba di local server
// app.use(requireHTTPS);

app.use(express.static(rootDir));

app.get('/*', (req,res) =>
    res.sendFile('index.html', {root: rootDir})
) 
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})