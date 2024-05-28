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
    const url = 'http://localhost:8000/postMail';
    // const url = process.env.NEXT_PUBLIC_VERCEL_HOST+'sendMail';

    const response = await fetch(url, {
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
    <div style={{height: "600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>メンテナンス中</h1>
      <br />
      <>
        <p>ご迷惑をおかけしております。</p>
        <p>ただいま改修中です。もうしばらくお待ちください。</p>
      </>
    </div>
  )
}