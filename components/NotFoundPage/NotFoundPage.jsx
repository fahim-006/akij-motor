import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.not__found}>
      <div className={styles.content}>
        <Fade bottom>
          <h1>404</h1>

          <h2>You lost your road</h2>
        </Fade>
        <Link href="/">
          <a className={styles.go__to__home}>go to home</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
