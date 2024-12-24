import Link, { LinkProps } from 'next/link';
import styles from './LinkCard.module.css';

type TypeLinkCard = LinkProps & {
  children: React.ReactNode
  target?: string
  hreflang?: string
  rel?: string
  detach?: boolean
}

export default function LinkCard({children, target, hreflang, rel, detach, ...props}: TypeLinkCard){
  return(
    <Link target={target} rel={rel} hrefLang={hreflang} className={`${styles.linkContainer} ${detach && styles.detach}`} {...props}>
      {children}
    </Link>
  );
}