'use client';

import MaxWidth from '@cont/MaxWidth';
import MinHeight from '@cont/MinHeight';
import Theme from '@cont/Theme';
import Footer from '@mod/layout/Footer';
import Header from '@mod/layout/Header';
import ListMensageBox from '@mod/layout/ListMensageBox';
import { useState } from 'react';

export default function QuestionsLayout({children}: {children: React.ReactNode}){
  const [theme, setTheme] = useState<string>('light');

  return(
    <Theme theme={theme == 'light' || theme == 'dark' ? theme : undefined}>
      <ListMensageBox />
      <Header onChangeTheme={setTheme}/>
      <MinHeight>
        <MaxWidth>
          {/* Perfil do usuário */}
          {children}
        </MaxWidth>
      </MinHeight>
      <Footer />
    </Theme>
  );
}