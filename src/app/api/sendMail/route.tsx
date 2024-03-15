import { InquiryEmailTemplate } from '@/components/Email/InquiryTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

// 環境変数からResendのAPIキーを取得
const resend = new Resend('re_q7YLtKCN_6YYQce81s3wZe2FWm4B9CeWE');

// 環境変数から送信元に指定するメールアドレスを取得
const fromEmail = process.env.RESEND_FROM_EMAIL;

export async function POST(request: Request) {
  // お問い合わせフォームからのデータを取得
  // name, email, message
  const req = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail ?? 'Acme <onboarding@resends.dev>',
      to: 'hirose@taishin1977.jp',
      subject: 'お問い合わせありがとうございます',
      // InquiryTemplate.tsxで作成したテンプレートを使用
      react: InquiryEmailTemplate({
        senderName: req.name,
        content: req.message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}