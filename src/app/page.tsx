import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="mb-20 text-5xl font-bold">
          ChatGPT
        </h1>
        <div className='flex space-x-5 text-center'>
          <div>
            <div className="flex flex-col items-center justify-start mb-5">
              {/* Sun Icon */}
              <SunIcon className="w-8 h-8"/>
              <h2>Example</h2>
            </div>
            
            <div className='space-y-2'>
              <p className='infoText'>"Explain something to me"</p>
              <p className='infoText'>"What is the difference between a dog and a cat?"</p>
              <p className='infoText'>"What is the color of the sun?"</p>
            </div>
            
          </div>
          {/*  */}
          <div>
            <div className="flex flex-col items-center justify-start mb-5">
              {/* Sun Icon */}
              <BoltIcon className="w-8 h-8"/>
              <h2>Capabilities</h2>
            </div>
            
            <div className='space-y-2'>
              <p className='infoText'>Change the ChatGPT Model to use</p>
              <p className='infoText'>Chat histories are stored and can be accessed</p>
              <p className='infoText'>Toast Notification when processing</p>
            </div>
            
          </div>
          {/*  */}
          <div>
            <div className="flex flex-col items-center justify-start mb-5">
              {/* Sun Icon */}
              <ExclamationTriangleIcon className="w-8 h-8"/>
              <h2>Limitations</h2>
            </div>
            
            <div className='space-y-2'>
              <p className='infoText'>May occassionally generate incorrect information</p>
              <p className='infoText'>May occassionally produce harmful instruction or biased content</p>
              <p className='infoText'>Limited knowledge of world and events after 2021</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
