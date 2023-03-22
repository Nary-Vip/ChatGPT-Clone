"use client"

import { signOut, useSession } from "next-auth/react"
import NewChat from "./NewChat"
import Image from "next/image";

const SideBar = () => {
    const { data: session} = useSession();
    
  return (
    <div className="flex flex-col h-screen p-2">
        <div className="flex-1">
            <div>
                {/* New Chat */}
                <NewChat/>
                <div>
                    {/* Model Selection */}
                </div>
                {/* Map through Chat list */}
            </div>
        </div>
        {session && <img onClick={()=>{signOut()}} className="w-12 h-12 mx-auto mb-2 transition-all duration-300 rounded-full cursor-pointer hover:opacity-50" src={session.user?.image!} alt="profile"/>}
    </div>
  )
}

export default SideBar