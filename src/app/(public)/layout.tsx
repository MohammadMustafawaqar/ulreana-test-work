
import Footer from '@/components/landing/layout/Footer';
import Navbar from '@/components/landing/layout/Navbar'

export default function HomePage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <div>
      <Navbar />
     <main>
     {children}
     </main>
     <Footer />
    </div>
  )
}
