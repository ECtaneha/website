import { RenderParagraphs } from '@/lib/RenderParagraphs';
import styles from './confirmation.module.scss';

interface ConfirmationProps {
  formData: any;
  onSend: () => void;
  onEdit: () => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({ formData, onSend, onEdit }) => {
  return (
    <div className={styles.confirmContainer}>
      <h2 className={styles.h2}>以下の内容で送信します。</h2>
        <div className={styles.tableContainer}>
          <div className={styles.tr}>
            <span className={styles.th}>件名</span>
            <span className={styles.td}>{formData.title}</span>
          </div>
          <div className={styles.tr}>
            <span className={styles.th}>会社名</span>
            <span className={styles.td}>{formData.company}</span>
          </div>
          <div className={styles.tr}>
            <span className={styles.th}>お名前</span>
            <span className={styles.td}>{formData.name}</span>
          </div>
          <div className={styles.tr}>
            <span className={styles.th}>メールアドレス</span>
            <span className={styles.td}>{formData.email}</span>
          </div>
          <div className={styles.tr}>
            <span className={styles.th}>電話番号</span>
            <span className={styles.td}>{formData.tel}</span>
          </div>
          <div className={styles.tr}>
            <span className={styles.th}>お問い合わせ内容</span>
            <span className={styles.td}>{RenderParagraphs(formData.content, '\n')}</span>
          </div>
        </div>

      <p className={styles.p}>
        入力内容をご確認の上、送信ボタンを押してください。<br />
        内容を確認後、できるだけ早急に返答いたします。
      </p>

      <div className={styles.buttonWrapper}>
        <button className={styles.confirmButton} onClick={onSend}>送信</button>
        <button className={styles.modifyButton} onClick={onEdit}>修正</button>
      </div>
    </div>
  );
}