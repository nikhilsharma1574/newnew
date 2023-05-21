require('dotenv').config()

const sgmail = require('@sendgrid/mail')

const {SG_API_KEY,FROM_EMAIL,TO_EMAIL} = process.env

sgMail.setApiKey(SG_API_KEY)

