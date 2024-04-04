import React from 'react'
import { Radio } from '@mui/material';
import styles from './checkBoxContainer.module.css'

type RadioProps = {
  id: string,
  value: string,
  userAttribute: string,
  inputProps: string,
  setFunction: any,
}

export const CheckBoxContainer = (props: RadioProps) => {
  return (
    <div className={styles.checkBoxContainer}>
      <Radio
        id={props.id}
        className={styles.radioButton}
        checked={props.setFunction === props.value}
        onChange={(e) => props.setFunction(e.target.value)}
        value={props.value}
        name={props.userAttribute}
        inputProps={{ 'aria-label': props.inputProps }}
      />
      <label className={styles.radioLabel} htmlFor={props.id}>{props.userAttribute}</label>
    </div>
  )
}
