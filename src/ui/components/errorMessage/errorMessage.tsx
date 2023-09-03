import { FC } from 'react';
import styles from './errorMessage.module.scss';

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <div className={styles.wrapper}>
      <h1 className={styles.msg}>{ message }</h1>
      <div className={styles['astro-wrap']}>
        <a className={styles.astronaut} href="#" title="return to base"></a>
      </div>
      </div>
    </>
  );
}

export default ErrorMessage;
