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
      <body className='bg-mesh-5 min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
