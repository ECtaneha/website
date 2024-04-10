import React from 'react';
import styles from './announcement.module.scss'

export const LoginForm = (props: any) => {
  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const adminID = process.env.NEXT_PUBLIC_ADMIN_ID;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if(props.userID === adminID && props.password === adminPassword){
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
        value={props.userID}
        onChange={(e) => props.setUserID(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <button type="submit">ログイン</button>
    </form>
  );
};


