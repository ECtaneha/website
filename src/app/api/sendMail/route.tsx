import { NextResponse, NextRequest } from 'next/server'
import nodeMailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { title, name, email, tel, message, company } = reqBody;

  const pass = process.env.NEXT_PUBLIC_MAIL_PASSWORD;

  try {
    const transporter = nodeMailer.createTransport({
      host: 'sv15052.xserver.jp',
      port: 587,
      secure: false,
      auth: {
        user: 'taishin_info@xs882411.xsrv.jp',
        pass: pass
      },
      tls: {
        rejectUnauthorized: false
      },
      authMethod: 'PLAIN'
    })

    const mailOptions = {
      from: 'タイシンHP',
      to: 'taishin_info@xs882411.xsrv.jp',
      subject: 'コンタクトページ',
      text: `
        件名：${title}\n\n
        名前：${name}\n\n
        会社名：${company}\n\n
        メールアドレス：${email}\n\n
        電話番号：${tel}\n\n
        メッセージ：${message}
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('成功しました');
    return NextResponse.json({message: '成功しました'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: '失敗しました'})
  }
}
