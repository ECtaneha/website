import React from 'react';
import { useState } from 'react';
import styles from './announcement.module.scss'

export const LoginForm = (props: any) => {
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const adminID = process.env.NEXT_PUBLIC_ADMIN_ID;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(userID === adminID && password === adminPassword){
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
      <input
        type="text"
        placeholder="ユーザーID"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">ログイン</button>
    </form>
  );
};


