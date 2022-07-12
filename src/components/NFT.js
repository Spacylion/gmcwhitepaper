import React, { useState, useEffect } from "react"
import gmc9 from "../assets/gmc9.png"
import { motion } from "framer-motion"
import { ethers } from "ethers"

const GMC_TOKEN_ADDRESS = "0x3462f9043d4e66ae57c0e4578b5493f59fd259fb"
const USDC_TOKEN_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
const ETH_TOKEN_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

const ERC20ABI = require("./abi.json")

export function NFT() {
  const [walletAddress, setWalletAddress] = useState(undefined)
  const [ether, setEther] = useState(0)
  const [gmc, setGmc] = useState(0)
  const [weth, setWeth] = useState(0)
  const [usdc, setUsdc] = useState(0)

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum)

      provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()

      let ether
      ether = await signer.getBalance()
      ether = ethers.utils.formatEther(ether, 18)
      setEther(ether)

      const walletAddress = await signer.getAddress()
      setWalletAddress(walletAddress)

      let gmc
      const gmcTokenContract = await new ethers.Contract(
        GMC_TOKEN_ADDRESS,
        ERC20ABI,
        provider
      )
      gmc = await gmcTokenContract.balanceOf(walletAddress)
      gmc = ethers.utils.formatEther(gmc, 18)
      setGmc(gmc)

      let usdc
      const usdcTokenContract = await new ethers.Contract(
        USDC_TOKEN_ADDRESS,
        ERC20ABI,
        provider
      )
      usdc = await usdcTokenContract.balanceOf(walletAddress)
      usdc = ethers.utils.formatEther(usdc, 18)
      setUsdc(usdc)

      let weth
      const wethTokenContract = await new ethers.Contract(
        ETH_TOKEN_ADDRESS,
        ERC20ABI,
        provider
      )
      weth = await usdcTokenContract.balanceOf(walletAddress)
      weth = ethers.utils.formatEther(weth, 18)
      setWeth(weth)
    }

    onLoad()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className='default-page default-page--standard default-page--content'>
        <div class='inner-container flex flex-col justify-center items-center h-screen'>
          <img
            className=' w-20 h-20 hover:rotate-12 transition ease-in-out delay-150 filter drop-shadow-lg flex flex-col content-center justify-center'
            alt='/'
            src={gmc9}
          ></img>
          <h1 className='text-4xl'>Coming Soon. As rewards</h1>
        </div>
      </section>
    </motion.div>
  )
}
