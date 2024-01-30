var express = require("express");
const app = express();
app.set("view engine", "ejs");
const cokieParser = require('cookie-parser')
const session = require('express-session');
const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    uname: String,
    password: String
})

const User = mongoose.model("logins", userSchema);

mongoose.connect("mongodb://localhost:27017/nodedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    secret: 'this is my secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay }
}));

app.get("/", function (req, res) {
    res.render("home")
})
app.get("/login", function (req, res) {
    res.render("login")
}).listen(5000)

app.get('/', function (req, res) {
    const session = req.session;
    if (session.loguser) {
        res.render('home', { uname: session.loguser, st: true });
    } else {
        res.render('home', { uname: '', st: false });
    }
});

app.get('/insert', function (res, req) {
    const session = req.session;
    if (req.querry.submit) {
        const un = req.querry.un;
        const p = req.querry.p;

        User.findOne({ uname: un })
            .then(result => {
                if (result) {
                    res.render('insert', { msg: un + 'Already Exists', uname: session.loguser });
                } else {
                    const newUser = new User({ uname: un, password: p });
                    return newUser.save();
                }
            })
            .then(result => {
                res.render('insert', { msg: un + 'saved successfully with password' + p, uname: session.loguser });
            })
            .catch(err => {
                res.render('error in your code' + err);
            });
    } else {
        res.render('insert', { msg: '', uname: session.loguser });
    }
});

app.get('/login', function (req, res) {
    if (req.querry.login) {
        const un = req.query.un;
        const p = req.query.p;
        User.findOne({ uname: un, password: p })
            .then(result => {
                if (result) {
                    const session = req.session;
                    session.loguser = un;
                    res.redirect('/');
                } else {
                    res.render('login', { msg: 'Invalid username or Password!' });
                }
            })
            .catch(err => {
                res.render('error in your code' + err);
            });
    } else {
        res.render('login', { msg: '' });

    }
})


