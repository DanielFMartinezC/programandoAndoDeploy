const nodemailer = require("nodemailer");

const accountTransport = require("./account_transport.json");
// const accountTransport =  process.env.accountTransport;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: accountTransport.auth.user,
    pass: accountTransport.auth.pass,
  },
});

const sendConfirmationEmail = (name, email, confirmationCode) => {
  console.log("Check");
  console.log(accountTransport.auth.user)
  console.log(accountTransport.auth.pass)
  transport
    .sendMail({
      from: accountTransport.auth.user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=https://programando-ando-deploy.vercel.app/confirm/${confirmationCode}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
};

const sendChangePasswordEmail = (name, email, changePasswordCode) => {
  transport
    .sendMail({
      from: accountTransport.auth.user,
      to: email,
      subject: "You are solicited change your password",
      html: `<h1>Change password for ${email}</h1>
        <h2>Hello ${name}</h2>
        <p>You have requested a password change for the email ${email},If you have not requested this password change, please contact support </p>
        <a href=https://programando-ando-deploy.vercel.app/changepass/${changePasswordCode}> Click here</a>
        <a href=https://programando-ando-deploy.vercel.app/modify/${changePasswordCode}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
};

transport
  .verify()
  .then(() => {
    console.log("Ready for send emails");
  })
  .catch((e) => console.log(e));

const sendEmailDonation = (name, email, amount) => {
  console.log("Check");
  transport
    .sendMail({
      from: accountTransport.auth.user,
      to: email,
      subject: "Thanks for you donation",
      html: `<h1>You have collaborated with <strong>programandoando</strong></h1>
        <h2>Hello ${name}!</h2>
        <p>
        Thanks for your donation, it is a very valuable contribution to the support
        of the page and the maintenance of the same.
        </br>
        You contributed with ${amount} USD
        </p>
        </div>`,
    })
    .catch((err) => console.log(err));
};

const sendNotificationEmail = (name, username, email, notification) => {
  console.log("Check");
  transport
    .sendMail({
      from: accountTransport.auth.user,
      to: email,
      subject: "You have a new notification",
      html: `<h1>Email Notification</h1>
        <h2>Hello ${name} with the username ${username}</h2>
        <p>Thank you for subscribing to the notifications and news in the website ProgramandoAndo.
         You can see the new updates in ProgramandoAndo right now
         If you're interested in ${notification.description}, see the full update in:        
         </p>
         <a href=https://programando-ando-deploy.vercel.app/login> Click here </a>
        </div>`,
    })
    .catch((err) => console.log(err));
};

const bannedEmail = (name, email) => {
  console.log("Check");
  transport
    .sendMail({
      from: accountTransport.auth.user,
      to: email,
      subject: "You are Banned",
      html: `<h1>Email Banned</h1>
        <h2>Hello ${name}</h2>
        <p>We inform you that you have been banned for 30 days from our platform for violating any of the terms and conditions. If you have any questions, please contact us.</p>
        </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports = {
  sendConfirmationEmail,
  sendChangePasswordEmail,
  sendEmailDonation,
  sendNotificationEmail,
  bannedEmail,
};
