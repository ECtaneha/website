import React from 'react'
import { Radio } from '@mui/material';
import styles from './checkBoxContainer.module.css'

type RadioProps = {
  id: string,
  value: string,
  userName: string,
  inputProps: string,
  setFunction: any,
}

export const CheckBoxContainer = (props: RadioProps) => {
  const value = props.value;

  return (
    <div className={styles.checkBoxContainer}>
      <Radio
        id={props.id}
        className={styles.radioButton}
        checked={props.setFunction === value}
        onChange={(e) => props.setFunction(e.target.value)}
        value={props.value}
        name={props.userName}
        inputProps={{ 'aria-label': props.inputProps }}
      />
      <label className={styles.radioLabel} htmlFor={props.id}>{props.userName}</label>
    </div>
  )
}
