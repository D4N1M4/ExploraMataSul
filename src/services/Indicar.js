const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: "dms24@discente.ifpe.edu.br",
    pass: "Maria1425", 
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "dms24@discente.ifpe.edu.br",
    subject: `Nova mensagem de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Erro ao enviar o e-mail.");
    }
    res.status(200).send("E-mail enviado com sucesso!");
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
