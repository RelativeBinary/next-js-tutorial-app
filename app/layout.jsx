import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptopia',
  discription: 'Discover & Share AI Prompts',
};

const RootLayout = (props) => {
  // console.log(props); // so theres children and params
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav /> {props.children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
