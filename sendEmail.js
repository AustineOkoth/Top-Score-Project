require ("dotenv").config();
const sgMail = require('@sendgrid/mail');     //Requires Twilio sendGrid.
const { forgotEmail } = require('./users');     //Acquired varying email from the users input from the forgot passowrd route.
const { token } = require('./users');   // Acquired token from reset password route


let URL = `http://127.0.0.1:5050/resetpassword/:${token}`; //The URL to send to the client in the email

//NB please use the token value NOT {token}

async function sendEmail() {

    //find a way to store it in a env file since its upeer secret
    // You can create a free account with sendgrind and API Key for your account
    //For security reasons I have kept my key in a .env file and denied it acees to the public.
    //Kindly make sure you acquire an API kEYS for the success of this project
    const API_KEY = process.env.MY_API_KEY;

    console.log(API_KEY);

    sgMail.setApiKey(API_KEY);

    const message = {

        to: forgotEmail,
        from: {
            name: "Top Score Project",
            email: "austinebizness@gmail.com" //Ensure you change this email to an email you have access to when required to make verfification
        },
        subject: "Request for Password Reset",
        html: ` <article style='border: 2px solid black; background-color: whitesmoke; text-align: center;'> Password Reset <p style='text-align:center'> THIS IS THE TEXT THAT WILL SHOW YOU THE STEPS TO TAKE IN ORDER TO RESET YOUR PASSWORD</p><a href = ${URL} > CLICK ME</a> </article>" `
        // html: "  <article style='border: 2px solid black; background-color: whitesmoke; text-align: center;'> Password Reset <p style='text-align:center'> THIS IS THE TEXT THAT WILL SHOW YOU THE STEPS TO TAKE IN ORDER TO RESET YOUR PASSWORD</p><a href = 'http://127.0.0.1:5050/resetpassword/:token'> CLICK ME</a> </article>"
        // text: URL

    };
    
    sgMail.send(message)
        .then((response) => console.log(response))
        .catch((error) => console.log(error.message));

}
module.exports = sendEmail();
module.exports = forgotEmail;   // Exported to the reset password routes

module.exports = URL;
