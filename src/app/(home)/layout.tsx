
interface Props {
    children: React.ReactNode;
};

import React from 'react'
import Navbar from './navbar';
import { Footer } from './footer';




function layout({children}: Props) {
  return (
    <div className = "flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 bg-[#F4F4F0]">
             {children}
        </div>
       
        <Footer/>
    </div>
  )
}

export default layout