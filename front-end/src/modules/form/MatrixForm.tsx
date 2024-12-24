import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import styles from './MatrixForm.module.css';
import BoxCheck from '@comp/form/BoxCheck';
import Fieldset from '@comp/form/Fieldset';
import Range from '@comp/form/Range';

export default function MatrixForm(props: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>){
  const boxChackValues: string[] = [  
    'Subtração',
    'Multiplicação',
    'Determinantes',
    'Comutatividade',
    'Transposição',
    'Matriz Nula e Identidade',
    'Traço da Matriz',
    'Matriz Inversa',
    'Equações Lineares',
    'Autovalores e Autovetores'
  ];
  return(
    <form className={styles.formContainer} {...props}>
      <h2>Escolha seu Desafio</h2>

      <Fieldset>
        <h3>Tipo de Questão</h3>

        <div className={styles.optionBoxCheckContainer}>
          {boxChackValues.map((item, index) => <BoxCheck key={`check_matrix_${index}`} id={`check_matrix_${index}`}>{item}</BoxCheck>)}
        </div>
      </Fieldset>

      <Fieldset>
        <h3>Tamanho da Matriz</h3>

        <Range min={1} max={5}>Linhas: </Range>
        <Range min={1} max={5}>Colunas: </Range>
      </Fieldset>

    </form>
  );
}