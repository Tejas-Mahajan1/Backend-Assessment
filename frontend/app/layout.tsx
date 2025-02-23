import '../styles/globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Admin Panel</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
