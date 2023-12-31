import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "../context/ThemeContext";
import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'
import AuthProvider from "@components/AuthProvider/AuthProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
