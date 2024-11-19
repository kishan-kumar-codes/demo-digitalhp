
import React from 'react'
import { CrossSvg , Support , Setting , Logout } from '@/svgs/dashboard/svg'
import { signOut } from 'next-auth/react';
import Profile from '@/assets/images/profile.png'
import Image from 'next/image';

interface HeaderProps {
    setSideNav: (isOpen: boolean) => void;
    openSideNav:boolean;
}
const Sidebar: React.FC<HeaderProps>= ({setSideNav , openSideNav}) => {
    const handleClose = () =>{
        setSideNav(!openSideNav)
    }
  return (
    <div className='top-0 left-0 bottom-0 w-[250px] h-screen bg-[#F4F4F4] absolute flex text-[#6D6D6D] z-50 flex-col rounded-r-2xl border-[#631363] border-2'>
      
      <div className='text-[#6D6D6D] w-full h-12 bg-white flex justify-end items-center p-3 rounded-r-2xl'>
        <span onClick={handleClose}><CrossSvg /></span>
      </div>

      
      <div className='flex items-center justify-start bg-[#F4F4F4] py-4 px-5'>
        <div className='w-[30%]'>
          {/* Profile Image */}
          <Image src={Profile} alt="profile" className='w-12 h-12 rounded-full object-cover' />
        </div>
        <div className='w-[70%]'>
          <div className='font-medium text-[#6D6D6D] text-[16px]'>Owner Name</div>
          <div className='text-xs text-[#6D6D6D] text-[12px]'>Company Name</div>
        </div>
      </div>

      {/* Sidebar Options */}
      <div className='w-full  mt-5'>
        <div className="w-full h-6 flex items-center bg-white rounded-lg hover:bg-[#EAEAEA] cursor-pointer text-[16px]  font-[600] pl-2  gap-3">
         <Support/> <span>Support</span>
        </div>
        <div className="w-full h-6 flex items-center bg-white rounded-lg hover:bg-[#EAEAEA] cursor-pointer text-[16px] font-[600]  pl-2 gap-3">
        <Setting />  <span>Settings</span>
        </div>
        <div className="w-full h-6 flex items-center bg-white rounded-lg hover:bg-[#EAEAEA] cursor-pointer text-[16px] font-[600]  pl-2 gap-3 ">
        <Logout />  <span onClick={()=>signOut({callbackUrl:'/'}) }>Log Out</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

