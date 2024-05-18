'use client'
import globalStyles from '@/app/page.module.scss'
import styles from './page.module.scss'
import { TextField } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb';
import { Confirmation } from '@/components/Confirmation/Confirmation';

export default function Page() {
  const [title, setTitle] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [formData, setFormData] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();


  const onSubmit = async (data: any) => {
    setFormData(data);
    setIsFormSubmitted(true);
  };

  const handleSend = async () => {
    const url = process.env.NEXT_PUBLIC_VERCEL_HOST;

    const response = await fetch(url+'sendMail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        reset();
        alert('送信しました。')
        setIsFormSubmitted(false);
      } else if (res.status === 500) {
        console.log(res);
      }
    });
  };

  const handleEdit = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div>
      {isFormSubmitted
        ? (
          <Confirmation
            formData={formData}
            onSend={handleSend}
            onEdit={handleEdit}
          />
        )
        : (
          <div className={globalStyles.contentsWrapper}>
            <div className={styles.h1Container}>
              <h1 className={styles.h1}>お問い合わせ</h1>
            </div>
            <div className={styles.contactContainer}>
              <BreadCrumb
                parentPath='トップ'
                childPath='お問い合わせ'
              />
              <br />
              <div className={styles.attention2}>
                <WarningIcon color='warning' className={styles.icon}/>
                &nbsp;&nbsp;
                <span>
                  個人情報、パスワード、ID、クレジットカードなどの情報は、お問い合わせ内容に入力されないようお願いします。
                </span>
              </div>

              <p>*は必須項目です。</p>

              <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  label='件名 *'
                  fullWidth={true}
                  id='title'
                  placeholder='件名を入力してください'
                  {...register('title',{
                    required: true,
                    maxLength: 50,
                  })}
                  sx={{marginTop: 2, borderRadius: '50%'}}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                  label='会社名/屋号'
                  fullWidth={true}
                  id='company'
                  placeholder='会社名/屋号を入力してください'
                  {...register('company',{
                    maxLength: 50,
                  })}
                  sx={{marginTop: 2}}
                  onChange={(e) => setCompany(e.target.value)}
                />

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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  label='電話番号'
                  id='tel'
                  fullWidth={true}
                  placeholder='メールアドレスを入力してください'
                  {...register('tel')}
                  sx={{marginTop: 2}}
                  onChange={(e) => setTel(e.target.value)}
                />

                <TextField
                  label='お問い合わせ内容 *'
                  fullWidth={true}
                  multiline
                  minRows={10}
                  maxRows={30}
                  id='content'
                  placeholder='お問い合わせ内容を入力してください'
                  {...register('content', {
                    required: true,
                    maxLength: 1000,
                  })}
                  size='medium'
                  sx={{marginTop: 2}}
                  onChange={(e) => setContent(e.target.value)}
                />

                <button
                  type='submit'
                  className={styles.confirmButton}
                >
                  確認
                </button>
              </form>
              <br />
              <br />
            </div>
          </div>
        )
      }
    </div>
  )
}