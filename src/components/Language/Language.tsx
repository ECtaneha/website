'use client'
import React, { useState } from 'react'
import styles from './language.module.scss'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const languages = [
  '日本語',
  'English',
  '中國語',
];

export const Language = () => {
  const [language, setLanguage] = useState<string>('日本語');
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={styles.languageContainer}>
      <button
        className={`
          ${styles.language}
          ${styles.activeLanguage}
          `}
        onClick={() => setIsActive(!isActive)}
        type='button'
      >
        {language}
        <KeyboardArrowRightIcon
          className={
            `${styles.arrow}
            ${isActive && styles.arrowDown}
          `}
        />
      </button>
      <div className={`
        ${styles.selectLanguage}
        ${isActive && styles.open}
      `}>
        {languages
          .filter((languages: string) => languages !== language)
          .map((language: string, key: number) => (
            <button
              key={key}
              className={styles.language}
              onClick={() => {
                setLanguage(language)
                setIsActive(false)
              }}
            >
              {language}
            </button>
          ))}
      </div>
    </div>
  )
}
