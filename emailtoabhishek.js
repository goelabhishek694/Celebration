"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports=async function (guest) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  try{
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "goelabhishek694@gmail.com", // enter company user id
      pass: "yyprylwujvycfnhh" // enter company pass 
    }
  });
var subject,text,html;
    subject='Send Message ASAP Abhi'
    text=` Name ${guest.name}
    Phone ${guest.phoneNumber}
    Email ${guest.email}
`
 html=`
<p>Name ${guest.name}</p>
<p>Phone ${guest.phoneNumber}</p>
<p>Email ${guest.email}</p> 
`
let info = await transporter.sendMail({
    from: '"RS FOREVER" <goelabhishek694@gmail.com>', // sender address
    to: "goelabhishek694@gmail.com", // list of receivers
    subject: subject, // Subject line
    text:text, // plain text body
    html: html // html body
  });
  console.log("Message sent: %s", info.messageId);
 
  }
  catch(err){
      console.log(err);
  }

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}