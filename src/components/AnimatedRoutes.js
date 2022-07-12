import React, { useState, useEffect } from "react"
import axios from "axios"
import { Routes, Route, useLocation } from "react-router-dom"
import Coins from "./Coins"
import Coin from "../routes/Coin"

import { About } from "./About"
import { AnimatePresence } from "framer-motion"
import { Team } from "./Team"
import { Hero } from "./Hero"
import { NFT } from "./NFT"
import { Vault } from "./Vault"

function AnimatedRoutes() {
  const location = useLocation()
  const [coins, setCoins] = useState([])
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data)
        // console.log(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/vault' element={<Vault />} />
        <Route path='/NFT' element={<NFT />} />
        <Route path='/gmc' element={<Coins coins={coins} />} />
        <Route path='/team' element={<Team />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
