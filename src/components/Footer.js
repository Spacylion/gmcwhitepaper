import React from "react"
import styles from "./Footer.css"
import { FaTwitter, FaTelegram, FaPinterest } from "react-icons/fa"

function Footer() {
  return (
    <div className='main-footer bg-gray-800'>
      <div className='container'>
        <div className='row'>
          {/* Column1 */}
          <div className='col'></div>
          {/* Column2 */}
          <div className='col'>
            <h4 className='p-4 text-4xl'>Find us: </h4>
            <div className='box'>
              <div>
                Telegram:
                <a
                  className='footera'
                  href='https://app.uniswap.org/#/swap?chain=mainnet'
                >
                  <div className='iconfoot telegram'></div>
                </a>
              </div>
              <div>
                Twitter
                <a
                  className='footera'
                  href='https://app.uniswap.org/#/swap?chain=mainnet'
                >
                  <div className='iconfoot Twitter'></div>
                </a>
              </div>
              <div>
                Uniswap
                <a
                  className='footera'
                  href='https://app.uniswap.org/#/swap?chain=mainnet'
                >
                  <div className='iconfoot Uniswap'></div>
                </a>
              </div>
              <div>
                Dextools
                <a
                  className='footera'
                  href='https://app.uniswap.org/#/swap?chain=mainnet'
                >
                  <div className='iconfoot Dextools'></div>
                </a>
              </div>
              <div>
                Coingecko
                <a
                  className='footera'
                  href='https://app.uniswap.org/#/swap?chain=mainnet'
                >
                  <div className='iconfoot Coingecko'></div>
                </a>
              </div>
              <div>
                CoinMarcetCap
                <a
                  className='footera'
                  href='https://app.uniswap.org/#/swap?chain=mainnet'
                >
                  <div className='iconfoot cmc'></div>
                </a>
              </div>
            </div>
          </div>
          {/* Column3 */}
          <div className='col'></div>
        </div>
        <hr />
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} gmctracker | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
