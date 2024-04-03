import React from 'react'
import { NextResponse, NextRequest } from 'next/server'
import nodeMailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { name, email, message, company } = reqBody;

  const user = process.env.NEXT_PUBLIC_GMAIL_ADDRESS;
  const pass = process.env.NEXT_PUBLIC_GMAIL_PASSWORD;

  try {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: user,
        pass: pass
      },
      tls: {
        rejectUnauthorized: false
      },
      authMethod: 'PLAIN'
    })

    const mailOptions = {
      from: 'タイシンHP',
      to: user,
      subject: 'コンタクトページ',
      text: `
        名前：${name}\n\n
        会社名：${company}\n\n
        メールアドレス：${email}\n\n
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
