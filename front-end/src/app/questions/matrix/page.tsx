'use client';

import styles from './page.module.css';
import Section from '@cont/Section';
import MatrixForm from '@mod/form/MatrixForm';

export default function Matrix(){
  return(
    <main className={styles.mainContainer}>
      <Section>
        <h1>Matriz</h1>
        <MatrixForm />
      </Section>
    </main>
  );
}