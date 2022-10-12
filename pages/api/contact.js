export default function (req, res) {
  require("dotenv").config();
  
 
  let nodemailer = require("nodemailer");
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
    res.status(400)
  })

}

