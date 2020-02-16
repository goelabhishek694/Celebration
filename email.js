"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports=async function (guest) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  try{
  let testount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "goelabhishek694@gmail.com", // enter company user id
      pass: "vwyghgzcqakkhuta" // enter company pass 
    }
  });
var subject,text,html;
    subject="RS FOREVER"
    text=`
    Greetings ${guest.name}!

    Now that you have officially signed up, we are even more enthused to welcome you to a night full of love and nostalgia. (And if everything goes as per plan, a total state of inebriation too)
    
    Date - February 24th, 2020
    Time - 7 pm onwards
    Venue - The Dramz, Mehrauli.
    
    For your convenience, kindly find attached the location of the venue.
    http://bit.ly/thedramz1
    Now that you have it all, just bring your love and that pretty smile for the couple of the night!
    
    Love,
    Deepti & Abhi
   `
    html=`
   <b>Greetings ${guest.name}!</b>
<p> Now that you have officially signed up, we are even more enthused to welcome you to a night full of love and nostalgia. (And if everything goes as per plan, a total state of inebriation too)</p>
<table>
<tr>
<td>Date</td><td>-</td><td>February 24th, 2020</td>
</tr>
<tr>
<td>Time</td><td>-</td><td>7 pm onwards</td>
</tr>
<tr>
<td>Venue</td><td>-</td><td>The Dramz, Mehrauli.</td>
</tr>
</table>
<p>For your convenience, kindly find attached the location of the venue -</p>
<a href="http://bit.ly/thedramz1">The Dramz</a>

<p>Now that you have it all, just bring your love and that pretty smile for the couple of the night!</p>
<p>Love,</p>
<p>Deepti & Abhi</p>
   `
   let info = await transporter.sendMail({
    from: '"RS FOREVER" <goelabhishek694@gmail.com>', // sender address
    to: guest.email, // list of receivers
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