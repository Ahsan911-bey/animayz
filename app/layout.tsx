import '../styles/global.css';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <NavBar />
        <main>{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
