'use client'

import { MenuProvider } from '@/contexts/MenuContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MenuProvider>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </MenuProvider>
  )
}

export default Providers
