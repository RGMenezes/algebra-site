import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
import styles from './Range.module.css';

type TypeRange = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  children: React.ReactNode
  min?: number
  max?: number
}

export default function Range({children, min, max, ...props}: TypeRange){
  const range = (max ? max : 100) - (min ? min : 0);
  const [value, setValue] = useState(range/2 + 1);
  const progressRange = (percentValue: number) => 100 / range * (percentValue - (min ? min : 0));
  return(
    <div className={styles.rangeContainer}>
      <label className={styles.label} htmlFor={props.id}>{children}</label>
      <input 
        style={{backgroundImage: `linear-gradient(to right, #6f73d2 ${progressRange(value)}%, rgb(0, 0, 0, 0) ${progressRange(value)}%)`}} 
        onChange={(e) => setValue(Number.parseInt(e.target.value))} 
        type="range" 
        defaultValue={value}
        min={min} max={max}
        {...props}
      />
      <p>{value}</p>
    </div>
  );
}