import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props {
  label: string;
  id: string;
  inputAttr?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

const InputTextTopLabeled: React.FunctionComponent<Props> = ({ label, id, inputAttr, className }) => {
  return <div className={`${styles.box} ${className ? className : ''}`}>
    <label htmlFor={id} className={styles.label}>{label}</label>
    <input type="text" className={styles.input} id={id} {...inputAttr} />
  </div>
}

export default InputTextTopLabeled;
