import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Clay's Blog",
  description: 'Created by Clay Wintringham',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
        </body>
    </html>
  )
}

