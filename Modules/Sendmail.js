var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '***.it19@scet.ac.in',
        pass: '***'
    }
});

var mailOptions = {
    from: '***.it19@scet.ac.in',
    to: '***@gmail.com',
    subject: 'Registered Successfully',
    html: '<h1>REGISTRATION </h1><p>You have successfully register on register API of krish kevadiya</p>'
};


transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent...");
    }
});