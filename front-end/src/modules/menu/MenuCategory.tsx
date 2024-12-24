import Section from '@cont/Section';
import styles from './MenuCategory.module.css';
import LinkCard from '@comp/actions/LinkCard';
import { TbMatrix } from 'react-icons/tb';
import { LuBinary } from 'react-icons/lu';

export default function MenuCategory(){
  return (
    <Section className={styles.containerSection}>
      <LinkCard hreflang='pt-br' href={'/questions/matrix'}>
        <TbMatrix />
        Matriz
      </LinkCard>
      <LinkCard hreflang='pt-br' href={'/questions/numberBasis'}>
        <LuBinary />
        Base Numérica
      </LinkCard>
    </Section>
  );
}