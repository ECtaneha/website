import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './sns.module.scss'
import Link from 'next/link';

const snsIconsList = [
  {
    'sns': 'TwitterIcon',
    'url': '',
  },
  {
    'sns': 'FacebookIcon',
    'url': '',
  },
  {
    'sns': 'YouTubeIcon',
    'url': '',
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
    case 'TwitterIcon':
      return <TwitterIcon className={`${styles.snsIcons} ${styles.twitter}`} />;
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