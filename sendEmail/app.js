const nodemailer = require("nodemailer");

const mail = async () => {
  const config = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "yash.2125cs1155@kiet.edu",
      pass: "wiipheuezcbztstt",
    },
  });
   await config.sendMail({
    form: "test@gmail.com",
    to: "yashvarshneypepsi@gmail.com",
    subject: "test",
    text: "its working fine",
    // html:"<h1>This is html Demo</h1>",
  });
};

mail().catch((e) => console.log(e));
