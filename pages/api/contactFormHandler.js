import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export default async function sendMessage(req, res) {
  try {
    const { email, firstname, lastname, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: `${email}`, // sender address
      to: 'reactnextappemail@gmail.com', // list of receivers
      subject: `${subject}`, // Subject line
      text: `${firstname}, ${lastname} \n
      ${message} 
      `, // plain text body
    });

    res.status(200).send({ status: 200, message: 'Message has been sent!' });
  } catch (error) {
    res.status(500).send({
      message: 'Error occured while sending message, try again later.',
    });
    console.log(error);
  }
}
