import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c646ec2052ac72",
    pass: "f504499f3653c9"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: 'Gabriel Piccoli <gabriel.pdmarcos@gmail.com>',
      subject,
      html: body
    })
  }
}
