import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './sns.module.scss'
import Link from 'next/link';

const snsIconsList = [
  {
    'sns': 'XIcon',
    'url': '',
  },
  {
    'sns': 'FacebookIcon',
    'url': '',
  },
  {
    'sns': 'YouTubeIcon',
    'url': '/Admin/DashBoard',
  },
  {
    'sns': 'InstagramIcon',
    'url': '',
  },
]

export const SNS = () => {
  return (
    <div className={styles.sns}>
      {snsIconsList.map(
        (list: { sns: string, url: string}, key: number) => (
          <Link
            key={key}
            className={styles.a}
            href={list.url}
          >
            {getSnsIcon(list.sns)}
          </Link>
        )
      )}
    </div>
  )
}

function getSnsIcon(sns: string) {
  switch (sns) {
    case 'XIcon':
      return <XIcon className={`${styles.snsIcons} ${styles.X}`} />;
    case 'FacebookIcon':
      return <FacebookIcon className={`${styles.snsIcons} ${styles.facebook}`} />;
    case 'YouTubeIcon':
      return <YouTubeIcon className={`${styles.snsIcons} ${styles.youtube}`} />;
    case 'InstagramIcon':
      return <InstagramIcon className={`${styles.snsIcons} ${styles.instagram}`} />;
    default:
      return null;
  }
}