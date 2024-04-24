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
      <table>
        <tbody>
          <tr>
            <th className={styles.th}>件名</th>
            <td className={styles.td}>{formData.title}</td>
          </tr>
          <tr>
            <th className={styles.th}>会社名</th>
            <td className={styles.td}>{formData.company}</td>
          </tr>
          <tr>
            <th className={styles.th}>お名前</th>
            <td className={styles.td}>{formData.name}</td>
          </tr>
          <tr>
            <th className={styles.th}>メールアドレス</th>
            <td className={styles.td}>{formData.email}</td>
          </tr>
          <tr>
            <th className={styles.th}>電話番号</th>
            <td className={styles.td}>{formData.tel}</td>
          </tr>
          <tr>
            <th className={styles.th}>お問い合わせ内容</th>
            <td className={styles.td}>{formData.content}</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonWrapper}>
        <button className={styles.confirmButton} onClick={onSend}>送信</button>
        <button className={styles.modifyButton} onClick={onEdit}>修正</button>
      </div>
    </div>
  );
}