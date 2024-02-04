import '@styles/globals.css';
import { Children } from 'react';

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
        <main className='app'>{props.children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
