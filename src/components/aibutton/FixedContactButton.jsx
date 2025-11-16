import React from 'react'
import Link from 'next/link'; 

const FixedContactButton = () => {
  return (
   
    <Link 
      href="/adviser" 
      className="
        fixed                 
        bottom-5 right-5      
        z-50                     
        bg-green-600             
        text-white              
        p-3 px-6               
        rounded            
        shadow              
        hover:bg-green-700       
        transition-colors duration-300 
        font-bold
      "
    >
      Contact Ai Assistance
    </Link>
  );
};

export default FixedContactButton;