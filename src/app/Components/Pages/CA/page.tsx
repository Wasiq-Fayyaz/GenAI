import bg from '../../../Images/CA_bg.jpg'
import { Bounce, Fade, Hinge,Slide,Zoom } from 'react-awesome-reveal'
import globe from '../../../Images/globe.png'
import Image from 'next/image'
import { FaClipboard } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { useState } from 'react';

export default function CA(){

    const [copied,setIsCopied] = useState(false)

    function copyText(){
        navigator.clipboard.writeText("0x123902023948267177x72273")
        setIsCopied(true)
    }
    
    return(
        <Fade>
        <div className="Ca--bg flex flex-row justify-center items-center mt-8 md:mt-24 p-6  border-t-2 border-b-2 border-sky-400">
       
        
        
        <Zoom>
        {
            copied ? <FaClipboardCheck className='text-white text-xl'/> : <FaClipboard className='text-white text-xl'onClick={copyText}/> 
        }
        <h5 className="text-lg font-semibold tracking-wider text-white md:text-3xl pointer ms-5 " onClick={() => {
                    }}>
          0x123902023948267177x72273
        </h5>
        </Zoom>
        
      </div>
      </Fade>
    )
}