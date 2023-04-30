const express = require('express')
const fs = require('fs')
const db = require('db')
const app = express();
const sessions = {}

db.connect("mongodb+srv://yuvalnissim:Nnitzu4e2@customer.jw7j1f6.mongodb.net/customers");

app.listen(8080, ()=>{
    console.log("running on 8080")
})

app.use('/home.html', (req, res, next)=>{
    const cookies = req.cookies;
    if(cookies && cookies.shortPass&& sessions[cookies.shortPass]){
        next();
    }
    else{
        res.redirect('/login.html');
    }
})

app.use('/adidas.html', (req, res, next)=>{
    const cookies = req.cookies;
    if(cookies && cookies.shortPass&& sessions[cookies.shortPass]){
        next();
    }
    else{
        res.redirect('/login.html');
    }
})

app.use('/nike.html', (req, res, next)=>{
    const cookies = req.cookies;
    if(cookies && cookies.shortPass&& sessions[cookies.shortPass]){
        next();
    }
    else{
        res.redirect('/login.html');
    }
})

app.use('/puma.html', (req, res, next)=>{
    const cookies = req.cookies;
    if(cookies && cookies.shortPass&& sessions[cookies.shortPass]){
        next();
    }
    else{
        res.redirect('/login.html');
    }
})


app.use('/register.html', (req, res)=>{
    let fname = req.params.fname;
    let lname = req.params.lname;
    let email = req.params.email;
    let uname = req.params.uname;
    let pwd = req.params.pwd;
    let result = db.query("INSERT INTO customers(fname, lname, email, uname, pwd) VALUES(fname, lname, email,uname, pwd");
    res.end(result);
})
app.use('/', (req, res)=>{
    const path = req.path
    fs.readFile(path, (error, content)=>{
        if(error) res.error(500);
        else{
            res.write(content)
        }
        res.end()
    })
})



app.use('/login.html', (req, res)=>{
    let username = req.params.u;
    let password = req.params.p;
    let result = verifyUserPass(username, password);
    if(result) {
        let slp = randomPasswordGenerator();
        res.setCookie('shortPass', slp,{expiration:1000*60*60*24*10})
        sessions[slp] = username;
        setTimeout(()=>{
            delete sessions[slp];
        }, 1000*60*30)
    }
    res.end(result);
})


app.use('/username', (req, res)=>{
    const cookies = req.cookies;
    res.end(sessions[cookies.shortPass]);
})

app.use('/products', (req, res)=>{
    const cookies = req.cookies;
    if(cookies && cookies.shortPass&& sessions[cookies.shortPass]){
        let result = db.query("SELECT * FROM products");
        res.end(result);
    }
    else{
        res.redirect('/login.html');
    }
})

function verifyUserPass(u,p){
    let result = db.query('SELECT * FROM customers WHERE username=u AND password=p');
    return result.length == 1;
}

function randomPasswordGenerator(){

}