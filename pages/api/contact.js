require("dotenv").config();
const nodemailer = require("nodemailer");

export default async (req, res) => {
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
  transporter.verify(function (error, success) {
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

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAILERUSER,
      subject: `Message sent from ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Sent from:
  ${email}</p>`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json("message has been sent");
};
