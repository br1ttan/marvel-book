import { FC } from 'react';
import styles from './errorMessage.module.scss';

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <div className={styles.error}>{ message }</div>
  )
}

export default ErrorMessage;
