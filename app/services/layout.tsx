
import Top from '@/components/serviceComponents/Top'
import React from 'react'
import Services from './page'
import Reviews from '@/components/serviceComponents/Reviews'
import Bottom from '@/components/serviceComponents/Bottom'
import TopNav from '@/components/serviceComponents/TopNav'

export default async function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <main>
      <Top/>
      <TopNav/>
      {children}
      <Reviews/>
      <Bottom/>
    </main>
  );
}
