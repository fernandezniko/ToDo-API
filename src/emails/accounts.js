const sgMail = require('@sendgrid/mail')

const sendgridAPI = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPI)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fernandez.nicolas1994@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app :)`

    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fernandez.nicolas1994@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}