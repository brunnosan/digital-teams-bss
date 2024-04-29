import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { useState } from "react";
import PrimeReact from "primereact/api";
// import { Button } from "primereact/button";


const Header = () => {

  const [theme, setTheme] = useState('dark');

  const changeMyTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    PrimeReact?.changeTheme?.(`lara-${theme}-pink`, `lara-${newTheme}-pink`, 'app-theme', () =>
    setTheme(newTheme)
  );
    // PrimeReactContext?.changeTheme?.(`lara-${theme}-pink`, `lara-${newTheme}-pink`, 'app-theme', () =>
    //   setTheme(newTheme)
    // );
  };


  return (
    <>
      <header className="flex gap-8 px-8 align-items-center justify-content-between">
        <div>
          <img src="src/components/Header/images/logo.png" alt="Logotipo" />
        </div>
        <div className='p-inputgroup w-4'>
          <InputText placeholder='Qual grupo está procurando?' />
          <Button icon='pi pi-search' />
        </div>
        <div className='align-items-end'>
          <Button onClick={() => {changeMyTheme()}}><span className={`pr-1 pi pi-${theme === 'dark' ? 'sun' : 'moon'}`}/></Button>
        </div>
      </header>
    </>
  );
}
 
export default Header;