const express = require('express');
const bodyParser = require("body-parser")
const bcrypt = require('bcryptjs');
const path = require("path");     //not used but its an alternative.
var jwt = require('jsonwebtoken');
const db = require('./database');
const app = express();


const { token } = require('./users');
function sendEmail2() { require('./sendEmail') };

app.use(express.static('./views'))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    //res.status(200).sendFile(path.resolve(__dirname, './public/signup.html'))    used when you use html instead of ejs
    res.status(200).render('signup', { errorSignupData: "" });
});

app.get('/login', (req, res) => {
    // res.status(200).sendFile(path.resolve(__dirname, './public/login'))     used when you use html instead of ejs
    res.render('login', { errorLoginData: "" });
});

app.get('/forgotpassword', (req, res) => {
    res.render('forgotPassword', { errorForgotData: "" });
});

app.get('/resetpassword/:' + token, (req, res, next) => {

    const { forgotEmail } = require('./users'); //To be printed out where the email is required
    const { token } = require('./users');
    const { privateKey } = require('./users');

    jwt.verify(token, privateKey, (err, valid) => {
        if (err) {
            console.log("PLEASE ENSURE THAT THE LINK IS OK OR NOT EXPIRED");
            res.writeHead(200, { 'content-type': "text/html" })
            res.status(401).write("Am sorry but your link has Expired or has been termperd with")

            res.end()
        }


        if (valid) {

            res.render('resetpassword', { userEmail: forgotEmail, notValidUser: "" });
        }

    })

});

app.get('/homepage', (req, res) => {
    // res.status(200).sendFile(path.resolve(__dirname, './public/homepage.html'))
    res.status(200).render("homepage");
});

app.get('/kcsepapers', (req, res) => {
    // res.status(200).sendFile(path.resolve(__dirname, './public/homepage.html'))
    res.status(200).render("kcsePapers");
});



app.post('/register', async (req, res, next) => {

    try {

        const { email, admno, password } = req.body     //Gets the  values of the user input

        db.query("SELECT email,admno FROM signupinfo where email = '" + email + "' OR admno = '" + admno + "'", async (err, result) => {

            if (err) throw err;
            if (result.length != 0) {
                //res.json("THE EMAIL/ADMISSION NUMBER ENTERED ALREADY EXISTS"); //Incase you enter an admno that is not in the database. The server does not keeps reloading for life.
                res.status(401).render('signup', { errorSignupData: "THE EMAIL/ADMISSION NUMBER ENTERED ALREADY EXISTS" })

            }

            if (result.length === 0) {
                const hashPassword = await bcrypt.hash(password, 10)  // Hashes the user password
                let sql = `INSERT INTO signupinfo (email, admno, password) VALUES ("${email}", "${admno}", "${hashPassword}")`;

                db.query(sql, (err, data) => {
                    if (err) throw err;

                    console.log("User data is inserted successfully ");

                });
                res.redirect('/login');  // redirect to user form page after inserting the data

                next();

            }

        });

    }

    catch (err) {

        console.log("Something went wrong");
    }

});

app.post('/login', async (req, res, next) => {

    try {

        const { admno, password } = req.body
        db.query("SELECT admno,password FROM signupinfo where admno = '" + admno + "' LIMIT 1", async (err, result) => {

            if (err) throw err
            if (result.length === 0) {
                //Incase you enter an admno that is not in the database. The server does not keeps reloading for life.
                res.status(401).render('login', { errorLoginData: "ADMISSION N0 DOES NOT EXIST " })
            }
            Object.keys(result).forEach(async (key) => {
                let passwordRow = result[key];
                const hashedPassword = (passwordRow.password);
                const isValid = await bcrypt.compare(password, hashedPassword);

                if (isValid) {

                    res.status(200).redirect('/homepage')
                }

                else {
                    res.status(401).render('login', { errorLoginData: "The Password Entered is Incorrect" })

                }
                console.log(isValid);
            });
        });
    }
    catch (err) {
        throw err
    }
});

app.post('/forgotpassword', async (req, res, next) => {

    const { forgotEmail, forgotAdmno } = req.body;
    // module.exports = forgotEmail;   //To be exported to sendEmail.js in order to set the receiver of the email as a variable


    db.query("SELECT email,admno FROM signupinfo where email = '" + forgotEmail + "' AND admno = '" + forgotAdmno + "'", async (err, result) => {

        if (err) throw err;
        if (result.length === 0) {
            res.status(401).render('forgotPassword', { errorForgotData: "Your Email and Admn No should Exist or Entered Correcty " })
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <title>Forgot password</title>
            <style>
            #container {
                background-color: rgba(54, 157, 216, 0.336);
                width: 45%;
                margin-top: 4%;
                margin-left: auto;
                margin-right: auto;
                padding-left: 20px;
                display: flex;
                flex-direction: row;
            }
        </style>
        
        <body>
        
            <div id="container">
        
                <i style="margin-top: 15px;" class="bi bi-check-circle-fill"></i>
        
                <p style="padding-left: 10px; font-family: sans-serif;"><b>Forgot Password</b>  &nbsp;<br><br> You should soon receive an email allowing you to reset your password. Please make
                    sure to check your spam and trash if you can't find the email.</p>
            </div>
        
        </body>
        `);

            var privateKey = `${req.body.forgotAdmno}MY_SECRET_KEY${req.body.forgotEmail}`;
            //Bad practice make sure you store the private keys in an env file.
            let user = req.body.forgotEmail;
            var token = jwt.sign({ user }, privateKey, { expiresIn: '3m' });

            module.exports = { forgotEmail, token, privateKey }; //Exports the forgotEmail,privateKey(should be removed from here later on) and the Token to sendEmail.js where they are needed.
            res.send(sendEmail2())

        }

    });

});


app.post('/resetpassword/:' + token, async (req, res, next) => {
    //const { token } = require('./users'); //Requiring it from the route just above here hahaha!!
    const { password } = req.body
    const newHashPassword = await bcrypt.hash(password, 10);
    const { forgotEmail } = require('./users');
    db.query("SELECT email FROM signupinfo where email = '" + forgotEmail + "'", async (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            console.log("please create account first");
            res.status(401).render("resetpassword", { userEmail: "", notValidUser: "The Email your trying to reset password does NOT have an account " })
        }
        else {
            db.query("UPDATE signupinfo SET password = '" + newHashPassword + "' where email = '" + forgotEmail + "'", async (err, result) => {
                if (err) throw err;
                console.log("User password has  been updated successfully....");
            });
            res.status(200).redirect('/homepage')
            next()
        }
    })
});


app.listen("5050", () => {
    console.log("listening on port 5050");
})

