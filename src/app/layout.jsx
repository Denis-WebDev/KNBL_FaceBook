import { redirect } from 'next/navigation';
import { auth } from 'auth';

import './globals.scss';

export default async function RootLayout({ children }) {


  return (
    <html lang={'en'}>
      <body>{children}</body>
    </html>
  );
}
