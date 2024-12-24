import styles from './MinHeight.module.css';

export default function MinHeight({children}: {children: React.ReactNode}){
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}