'use client'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import { TextField } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { useState } from 'react';
import Link from 'next/link'
import { CheckBoxContainer } from '../../components/CheckBoxContainer/CheckBoxContainer';

type FormProps = {
  company: string;
}

const groupA = [
  {
    id: 'radioCommodity',
    value: 'a',
    inputProps: 'A',
    userName: '商品について',
  },
  {
    id: 'radioTrade',
    value: 'b',
    inputProps: 'B',
    userName: 'お取引について',
  },
  {
    id: 'radioRecruit',
    value: 'c',
    inputProps: 'C',
    userName: '採用について',
  },
  {
    id: 'radioOther',
    value: 'd',
    inputProps: 'D',
    userName: 'その他',
  },
]

const groupB = [
  {
    id: 'radioCompany',
    value: 'x',
    inputProps: 'X',
    userName: '法人/個人事業主',
  },
  {
    id: 'radioIndividual',
    value: 'y',
    inputProps: 'Y',
    userName: '個人',
  },
]


export default function Page() {
  const [company, setCompany] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [attribute, setAttribute] = useState<string>("");

  const sendData = {
    subject,
    company,
    userName,
    email,
    tel,
    content,
  }

  return (
    <div className={globalStyles.contentsContainer}>
      <div className={globalStyles.container}>
        <h1 className={styles.h1}>お問い合わせ</h1>

        <div className={styles.attention1}>
          <Link href=''>ご質問前にお読みください</Link>
        </div>

        <br />
        <div className={styles.attention2}>
          <WarningIcon color='warning' className={styles.icon}/>
          &nbsp;&nbsp;
          <span>個人情報、パスワード、ID、クレジットカードなどの情報は、お問い合わせ内容に入力されないようお願いします。</span>
        </div>

        <form
          className={styles.form}
        >
          <div className={styles.confirmAttribute}>
            <p className={styles.radioLabel}>お問い合わせ内容：</p>
            {groupA.map((data, key) =>
              <CheckBoxContainer
                key={key}
                id={data.id}
                value={data.value}
                inputProps={data.inputProps}
                userName={data.userName}
                setFunction={setSubject}
              />
            )}
          </div>

          <div className={styles.confirmAttribute}>
            <p className={styles.radioLabel}>お客様属性：</p>
            {groupB.map((data, key) =>
              <CheckBoxContainer
                key={key}
                id={data.id}
                value={data.value}
                inputProps={data.inputProps}
                userName={data.userName}
                setFunction={setAttribute}
              />
            )}
          </div>

          {attribute === 'x'
            ? <TextField
              label='会社名/屋号'
              fullWidth={true}
              id='company'
              placeholder='会社名/屋号を入力してください'
              onChange={(e) => {setCompany(e.target.value)}}
              sx={{marginTop: 2}}
            />
            : <></>
          }

          <TextField
            label='お名前'
            fullWidth={true}
            id='userName'
            placeholder='お名前を入力してください'
            onChange={(e) => {setUserName(e.target.value)}}
            required
            sx={{marginTop: 2}}
          />

          <TextField
            label='メールアドレス'
            id='email'
            type='email'
            fullWidth={true}
            placeholder='メールアドレスを入力してください'
            onChange={(e) => {setEmail(e.target.value)}}
            required
            sx={{marginTop: 2}}
          />

          <TextField
            label='電話番号'
            id='tel'
            fullWidth={true}
            placeholder='メールアドレスを入力してください'
            onChange={(e) => {setTel(e.target.value)}}
            sx={{marginTop: 2}}
          />

          <TextField
            label='お問い合わせ内容'
            fullWidth={true}
            multiline
            minRows={10}
            maxRows={30}
            id='content'
            placeholder='お問い合わせ内容を入力してください'
            onChange={(e) => {setContent(e.target.value)}}
            required
            size='medium'
            sx={{marginTop: 2}}
          />

          <button
            type='button'
            className={styles.submit}
            // onClick={sendEmail(sendData)}
          >
            送信
          </button>
        </form>
        <br />
        <br />
      </div>
    </div>
  )
}