'use client'
import globalStyles from '../page.module.scss'
import ResendContactForm from '@/components/ResendContactForm/ResendContactForm';

export default function Page() {
  return (
    <div className={globalStyles.contentsContainer}>
      <ResendContactForm />
    </div>
  )
}