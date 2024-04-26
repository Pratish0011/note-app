import React, { useState } from 'react'

const Completed = () => { 
 const [click,setClick]=useState(false); 
  function handleClick(){
    setClick(!click);
  }


  return (
    <div className='bg-[#6841D8] rounded-full w-[7rem] text-center p-2 pl-4 pr-4 text-[13px]'>
        <p className='cursor-pointer font-semibold' onClick={handleClick}>{click ? 'Completed' : 'Incomplete'}</p>
        </div>
  )
}

export default Completed