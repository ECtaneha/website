import React from 'react'
import globalStyles from '../page.module.scss'

export default function page(props: any) {
  return (
    <div className={globalStyles.container}>
      <h2>以下の内容で送信してよろしいですか？</h2>
      <div>
        <span>会社名</span>
        <span>{props.companyName}</span>
      </div>
      <div>
        <span>メールアドレス</span>
        <span>{props.mail}</span>
      </div>
      <div>
        <span>電話番号</span>
        <span>{props.tel}</span>
      </div>
      <div>
        <span>お問い合わせ内容</span>
        <span>{props.content}</span>
      </div>
    </div>
  )
}
