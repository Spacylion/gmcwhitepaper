import React from "react"
import styles from "./Team.css"
import { motion } from "framer-motion"
import { FaTelegram, FaTwitter } from "react-icons/fa"
export const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className='default-page default-page--standard default-page--content'>
        <div class='inner-container'>
          <h1 className='align-center flex text-center justify-center text-3xl text-amber-100 font-bold mb-3 p-4'>
            Team
          </h1>
          <div class='main'>
            <div class='profile-card'>
              <div class='img'>
                <div className='dev1'></div>
              </div>
              <div class='caption'>
                <h3>gmc-AI</h3>
                <p>usdc printing machine</p>
                <div class='social-links flex flex-row items-center justify-center'>
                  <a href='https://twitter.com/GKosac'>
                    <FaTelegram />
                  </a>
                  <a href='https://twitter.com/GKosac'>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div class='profile-card'>
              <div class='img'>
                <div className='dev2'></div>
              </div>
              <div class='caption'>
                <h3>gmc-Translator</h3>
                <p>beep bep bep 100110</p>
                <div class='social-links flex flex-row items-center justify-center'>
                  <a href='https://twitter.com/GKosac'>
                    <FaTelegram />
                  </a>
                  <a href='https://twitter.com/GKosac'>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div class='profile-card'>
              <div class='img'>
                <div className='dev3'></div>
              </div>
              <div class='caption'>
                <h3>gmc-Tracker</h3>
                <p>Tracking x|y|z tokens</p>
                <div class='social-links flex flex-row items-center justify-center'>
                  <a href='https://twitter.com/GKosac'>
                    <FaTelegram />
                  </a>
                  <a href='https://twitter.com/GKosac'>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
