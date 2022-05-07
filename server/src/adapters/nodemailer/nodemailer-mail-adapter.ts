import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9c7a3c73ca3a63",
    pass: "f122e77705b1c0"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Yago Riccomi <yago.riccomi.s@gmail.com>',
      subject,
      html: body,
    })
  }
}