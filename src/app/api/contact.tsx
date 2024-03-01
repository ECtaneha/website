import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
  const user = process.env.MAIL_ACCOUNT;
  const pass = process.env.MAIL_PASSWORD;
  const host = process.env.MAIL_HOST;
  const port = process.env.MAIN_PORT;

  const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      auth: {
          user: user,
          pass: pass,
      },
  });

  const toHostMailData = {
      from: req.body.email,
      to: user, // 送信先
      subject: `【お問合せ】${req.body.name}様より`, // タイトル
      text: `${req.body.message} Send from ${req.body.email}`,
      html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メッセージ内容】</p>
      <p>${req.body.message}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
  });
}
