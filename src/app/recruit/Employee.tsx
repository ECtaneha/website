import React from 'react'
import styles from './page.module.scss'
import { RenderParagraphs } from '@/lib/RenderParagraphs';

export const Employee = (props: any) => {
  const employeesArray = Array.isArray(props.info.employees)
    ? props.info.employees
    : Object.values(props.info.employees);

  return (
    <div className={styles.bgc}>
      {employeesArray.map((employee: any, key: number) => (
        employee.name !== '' &&
        <div key={key} className={styles.interviewContainer}>
          <div className={styles.interviewWrapper}>
            <div className={styles.memberWrapper}>
              <div className={styles.memberPhotoWrapper}>
                <img
                  className={styles.memberPhoto}
                  src={employee.photo.photo2}
                  alt={employee.name}
                />
              </div>
              <p>{employee.join}</p>
              <p className={styles.memberName}>{employee.name}</p>
            </div>
            <div className={styles.interview}>
              <p className={styles.question}>{employee.q1}</p>
              <p className={styles.answer}>{employee.a1}</p>
              <p className={styles.question}>{employee.q2}</p>
              <p className={styles.answer}>{employee.a2}</p>
              <p className={styles.question}>{employee.q3}</p>
              <p className={styles.answer}>{employee.a3}</p>
              <p className={styles.question}>{employee.q4}</p>
              <p className={styles.answer}>{employee.a4}</p>

            </div>
          </div>
          <div className={styles.messageWrapper}>
            <p className={styles.messageTitle}>{employee.messageTitle}</p>
            <div className={styles.message}>{RenderParagraphs(employee.message, '\n')}</div>
          </div>
        </div>
      ))}
      </div>
  )
}
