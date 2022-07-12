import React from "react"
import CoinItem from "./CoinItem"
import Coin from "../routes/Coin"
import { Link } from "react-router-dom"
import gm4 from "../assets/gm4.png"
import "./Coins.css"

const Coins = (props) => {
  return (
    <div className='container'>
      <img
        className=' absolute right-4  w-20 h-20 hover:rotate-12 transition ease-in-out delay-150 filter drop-shadow-lg flex flex-col content-center justify-center'
        alt='/'
        src={gm4}
      ></img>
      <div>
        <div className='heading '>
          <p># </p>
          <p className='coin-name'> Coin</p>
          <p>Price</p>
          <p>1h</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Coins
