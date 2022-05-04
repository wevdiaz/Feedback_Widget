import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8332721698dee7",
      pass: "8498c37cf7c6e7"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: "Equipe Feedget <atendente@feedget.com.br>",
            to: "Weverson Diazz <wevers.info@gmail.com>",
            subject,
            html: body
        });
    }
}