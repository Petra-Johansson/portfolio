export default async function (req, res)  {
    require("dotenv").config();
  const nodemailer = require("nodemailer");

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
      console.log(success, "Server is ready to take our messages");
    }
  });

  const mailInfo ={
      from: email,
      to: process.env.MAILERUSER,
      subject: `Message sent from ${name}`,
      text: message + " | Sent from: " + email,
    };
  
  
  await new Promise((resolve,reject)=> {
    transporter.sendMail(mailInfo, function(error,info) {
      if(error){
        console.log(error)
        reject(error)
      } else {
        console.log(info)
        resolve(info) 
      }
    })
  })
  res.status(200).json({status: "OK"})
};
