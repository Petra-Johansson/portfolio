require("dotenv").config();
const nodemailer = require("nodemailer");

export default function (req, res) {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAILERUSER,
      pass: process.env.MAILERPASS,
    },
    secure: true,
  });

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
      console.log(error);
  } else {
      console.log("Server is ready to take our messages");
  }
});
/*
 const messageFormat={
  from: `${email}`,
    to: process.env.MAILERUSER,
    subject: `Message sent from ${name}`,
    text: `${message}` + " | Sent from: " + `${email}`,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
 }

 transporter.sendMail(messageFormat, (error,data) => {
  if(error) {
    console.log(error)
    res.status(400).send("error" + JSON.stringify(error))
  } else {
    console.log("Email has been sent")
    res.status(200).json({success: true})
  }
 })
*/

 
transporter.sendMail({
  from: req.body.email,
  to: process.env.MAILERUSER,
  subject: `Message sent from ${req.body.name}`,
  text: req.body.message + " | Sent from: " + req.body.email,
  html: `<div>${req.body.message}</div><p>Sent from:
  ${req.body.email}</p>`,
}).then(resp => {
  console.log('Message sent: ', JSON.stringify(resp));
  res.status(200).json({success: true})
}).catch(error => {
  console.log(error);
  res.status(400).send({error: "Could not send message"})
})




}
