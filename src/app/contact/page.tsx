'use client'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import { TextField } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { useState } from 'react';
import Link from 'next/link'
import { CheckBoxContainer } from '../../components/CheckBoxContainer/CheckBoxContainer';
import { useForm } from 'react-hook-form';

type FormProps = {
  company: string;
}

const groupA = [
  {
    id: 'radioCommodity',
    value: 'a',
    inputProps: 'A',
    userAttribute: '商品について',
  },
  {
    id: 'radioTrade',
    value: 'b',
    inputProps: 'B',
    userAttribute: 'お取引について',
  },
  {
    id: 'radioRecruit',
    value: 'c',
    inputProps: 'C',
    userAttribute: '採用について',
  },
  {
    id: 'radioOther',
    value: 'd',
    inputProps: 'D',
    userAttribute: 'その他',
  },
]

const groupB = [
  {
    id: 'radioCompany',
    value: 'x',
    inputProps: 'X',
    userAttribute: '法人/個人事業主',
  },
  {
    id: 'radioIndividual',
    value: 'y',
    inputProps: 'Y',
    userAttribute: '個人',
  },
]


export default function Page() {
  const [subject, setSubject] = useState<string>('');
  const [attribute, setAttribute] = useState<string>('');
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log(res);
    });
  // reset();
  }

  return (
    <div className={globalStyles.contentsWrapper}>
        <div className={styles.h1Container}>
          <h1 className={styles.h1}>お問い合わせ</h1>
        </div>
      <div className={styles.confirmContainer}>
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.confirmAttribute}>
            <p className={styles.radioLabel}>お問い合わせ内容：</p>
            {groupA.map((data, key) =>
              <CheckBoxContainer
                key={key}
                id={data.id}
                value={data.value}
                inputProps={data.inputProps}
                userAttribute={data.userAttribute}
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
                userAttribute={data.userAttribute}
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
              {...register('company',{
                maxLength: 50,
              })}
              sx={{marginTop: 2}}
            />
            : <></>
          }

          <TextField
            label='お名前'
            fullWidth={true}
            id='userName'
            placeholder='お名前を入力してください'
            {...register('name',{
              required: true,
              maxLength: 50,
            })}
            required
            sx={{marginTop: 2}}
          />

          <TextField
            label='メールアドレス'
            id='email'
            type='email'
            fullWidth={true}
            placeholder='メールアドレスを入力してください'
            {...register('email', {
              required: true,
              maxLength: 60,
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'メールアドレスの形式が不正です',
              },
            })}
            required
            sx={{marginTop: 2}}
          />

          <TextField
            label='電話番号'
            id='tel'
            fullWidth={true}
            placeholder='メールアドレスを入力してください'
            {...register('tel')}
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
            {...register('message',{
              required: true,
              maxLength: 50,
            })}
            size='medium'
            sx={{marginTop: 2}}
          />

          <button
            type='submit'
            className={styles.submit}
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