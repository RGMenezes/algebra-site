import { DetailedHTMLProps, FieldsetHTMLAttributes } from 'react';
import styles from './Fieldset.module.css';

type TypeFieldset = DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> & {
  children: React.ReactNode
}

export default function Fieldset({children, ...props}: TypeFieldset){
  return(
    <fieldset className={styles.fieldsetContainer} {...props}>{children}</fieldset>
  );
}