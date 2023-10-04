import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/not-found.png"
          className={styles.image}
          fill
          sizes="500px"
          priority={true}
          alt="Not found"
        />
      </div>
      <Link href="/" className={styles.link}>
        Домой
      </Link>
    </div>
  );
}
