import '../styles/global.css';
import NavBar from '../components/NavBar'; // Import NavBar component
import Footer from '../components/Footer'; // Import Footer component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <NavBar />  {/* This NavBar will be displayed on every route */}
        <main>{children}</main>  {/* The specific page content will be rendered here */}
        <Footer />  {/* This Footer will be displayed on every route */}
      </body>
    </html>
  );
}
