import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Ivan Nevares',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-mesh-5'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
