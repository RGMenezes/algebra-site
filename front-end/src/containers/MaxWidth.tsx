import styles from './MaxWidth.module.css';

export default function MaxWidth({children}: {children: React.ReactNode}){
  return(
    <div className={styles.widthContainer}>{children}</div>
  );
}