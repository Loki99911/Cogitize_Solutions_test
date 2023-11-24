// import Link from "next/link";
import './styles/globals.scss';
import './styles/main.scss';
import NavBar from './ui/navigation/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {  
  return (
    <html lang="en">
      <body className="overlay">
        <div className="main-window">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
