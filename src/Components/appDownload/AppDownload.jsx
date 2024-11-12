import React from 'react'
import {assets} from'../../assets/assets';

function AppDownload() {
  return (
    <div className='app-download m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium' id='app-download'>
      <p>For Better Experience Download <br />Yummi App</p>
      <div className="download-plateforms flex justify-center gap-[max(2vw,10px)] mt-10">
        <img className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer transform transition-transform duration-500 scale-[1.05] hover:scale-110' src={assets.play_store} alt="" />
        <img className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer transform transition-transform duration-500 scale-[1.05] hover:scale-110 ' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
