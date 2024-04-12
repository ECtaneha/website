import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import presidentPhoto from '/public/images/information/presidentPhoto.jpg'

export const Employee = (props: any) => {
  const employeesArray = Array.isArray(props.info.employees)
  ? props.info.employees
  : Object.values(props.info.employees);

  return (
    <div className={styles.bgc}>
      {employeesArray.map((employee: any, key: number) => (
        <div key={key} className={styles.interviewContainer}>
          <div className={styles.interviewWrapper}>
            <div className={styles.memberWrapper}>
              <div className={styles.memberPhotoWrapper}>
                <Image
                  className={styles.memberPhoto}
                  src={employee.photo}
                  width={200}
                  height={200}
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
            <p className={styles.message}>{employee.message}</p>
          </div>
        </div>
      ))}
      </div>
  )
}
