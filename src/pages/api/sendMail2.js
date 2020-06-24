/* eslint-disable no-console,consistent-return */
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
// https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1

export default async (req, res) => {
  const { name, phone, message, email } = req.body
  const oauth2Client = new google.auth.OAuth2(
    process.env.NEXT_PUBLIC_CLIENT_ID,
    process.env.NEXT_PUBLIC_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
  })

  const accessToken = await oauth2Client.getAccessToken()

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'admin@txileno.com',
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
      accessToken,
    },
  })

  const mailOptions = {
    from: `${name} <admin@txileno.com>`,
    to: 'admin@txileno.com',
    subject: `${name} te esta contactando.`,
    text: `${name} te ha dejado el siguiente mensaje \n ${message}`,
    html: `<div>
            <h1>${name} te ha contactado</h1>
            <p>Telefono: ${phone}</p>
            <p>Email: ${email}</p>
            <p>${message}</p>
            </div>`,
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(`Error occurred. ${error.message}`)
      return res.send(`error : ${error.message}`)
    }
    console.log(response)

    smtpTransport.close()
    res.send('Success')
  })
}
