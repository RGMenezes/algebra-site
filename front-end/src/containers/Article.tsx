import styles from './Article.module.css';
 
export default function Article({children, className}: {children?: React.ReactNode, className?: string}){
  return(
    <article className={`${styles.articleContainer} ${className}`}>
      {children}
    </article>
  );
}