"use client"
import React, { useState } from 'react'
import Header from '../components/header';
import BottomBar from "../components/bottomBar"
import Sidebar from '../components/Sidebar'
interface layoutProps {
    Childrens: React.ReactNode
    hHeading: string,
}

const index: React.FC<layoutProps> = ({ Childrens, hHeading }) => {
    const [openSideNav , setSideNav] = useState(false)
    return (
        <div className='h-screen w-screen flex flex-col bg-cultured '>
           {openSideNav && <Sidebar openSideNav={openSideNav}  setSideNav={setSideNav}/>}
            <Header openSideNav={openSideNav} setSideNav={setSideNav} hHeading={hHeading} />
            <div className='flex-1 overflow-hidden'>
                {Childrens}
            </div>
            <BottomBar />
        </div>
    )
}

export default index