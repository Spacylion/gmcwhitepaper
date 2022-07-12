import React from "react"
import gmc from "../assets/gmc.png"
import gmcwid from "../assets/gmc2100.png"
import gmcmob from "../assets/gmcmobile.png"
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className='default-page default-page--standard default-page--content'>
        <div class='inner-container'>
          <div className='w-full'>
            <img
              className='w-full lg:hidden flex flex-col h-screen content-center justify-center'
              alt='/'
              src={gmcmob}
            ></img>
            <img
              className='hidden lg:flex w-full 2xl:hidden  flex-col h-screen content-center justify-center'
              alt='/'
              src={gmc}
            ></img>
            <img
              className='hidden lg:hidden xl:hidden 2xl:flex w-full flex-col h-screen content-center justify-center'
              alt='/'
              src={gmcwid}
            ></img>

            <div className='invisible  lg:visible absolute top-32 right-10 text-right '>
              <h2>we still believe wagmi</h2>
            </div>
            {/* <div className='flex justify-center fixed top-1/2  right-1/4'>
        <img className='max-w-[200px] drop-shadow-lg' src={terminal} alt='/' />
      </div> */}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Hero
