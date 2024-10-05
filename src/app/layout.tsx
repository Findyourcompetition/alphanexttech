import type { Metadata } from 'next';
//import localFont from 'next/font/local';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm_sans',
});

// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Alpha Next Technology',
  description: 'Official ANT website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${DmSans.variable} antialiased font-[helvetica]`}>
        {children}
      </body>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </html>
  );
}
