import { corsHeaders } from '@/lib/CorsHeaders';
import { NextRequest } from 'next/server'
import nodeMailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { title, name, email, tel, content, company } = reqBody;

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
        メッセージ：${content}
      `
    };

    const info = await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify('Email sent successfully '), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify('Failed to send Email'), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}