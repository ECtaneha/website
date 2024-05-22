import React from 'react';
import styles from './announcement.module.scss'
import { TextField } from '@mui/material';

export const LoginForm = (props: any) => {
  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const adminID = process.env.NEXT_PUBLIC_ADMIN_ID;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    const users = JSON.parse(process.env.NEXT_PUBLIC_USERS || '[]');
    const foundUser = users.find((user: {
       id: any;
       password: any;
      }) => user.id === props.userID && user.password === props.password
    );
    if(foundUser){
      props.setIsLogin(true);
    } else {
      alert('idまたはpasswordが違います。')
    }
  };

  return (
    <form
      className={styles.loginFormContainer}
      onSubmit={handleLogin}
    >
      <TextField
        className={styles.textField}
        type="text"
        placeholder="ユーザーID"
        value={props.userID}
        onChange={(e) => props.setUserID(e.target.value)}
      />
      <TextField
        className={styles.textField}
        type="password"
        placeholder="パスワード"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <button
        className={styles.loginButton}
        type="submit"
      >
        ログイン
      </button>
    </form>
  );
};


