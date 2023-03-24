import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Ivan Nevares',
  description: 'Web developer and UI designer interested in generating creative and performant digital experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='min-h-screen bg-hero-mesh6'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
