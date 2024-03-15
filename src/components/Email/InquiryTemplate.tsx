import * as React from 'react';

interface InquiryEmailTemplateProps {
  senderName: string;
  content: string;
}

export const InquiryEmailTemplate: React.FC<
  Readonly<InquiryEmailTemplateProps>
> = ({ senderName, content }) => (
  <div>
    <h1>{senderName} 様</h1>
    <h2>お問い合わせありがとうございます。</h2>
    <p>以下の内容でお問い合わせを受け付けました。</p>
    <p>{content}</p>
  </div>
);

export default InquiryEmailTemplate;