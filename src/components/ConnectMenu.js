import React from "react"
import { useEffect, useState } from "react"
import { truncateAddress } from "./utils"
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { providerOptions } from "../providerOptions"
import App from "../App"

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
})

export default function ConnectMenu() {
  const [provider, setProvider] = useState()

  const [account, setAccount] = useState()
  const [signature, setSignature] = useState("")
  const [error, setError] = useState("")

  const [verified, setVerified] = useState()

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()

      setProvider(provider)

      if (accounts) setAccount(accounts[0])
    } catch (error) {
      setError(error)
    }
  }

  const refreshState = () => {
    setAccount()
    setSignature("")
    setVerified(undefined)
  }

  const disconnect = async () => {
    await web3Modal.clearCachedProvider()
    refreshState()
  }

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet()
    }
  }, [])

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts)
        if (accounts) setAccount(accounts[0])
      }

      const handleDisconnect = () => {
        console.log("disconnect", error)
        disconnect()
      }

      provider.on("accountsChanged", handleAccountsChanged)

      provider.on("disconnect", handleDisconnect)

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged)

          provider.removeListener("disconnect", handleDisconnect)
        }
      }
    }
  }, [provider])

  return (
    <>
      <div className='justify-center items-center' h='100vh'>
        <div>
          {!account ? (
            <div className=''>
              <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
                <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
                  <form className='mt-6'>
                    <div className='mb-6'>
                      <a className=' font-lg text-gray-800'>
                        gm wagmi classic!
                      </a>
                    </div>
                  </form>
                  <button
                    className='w-full  tracking-wide animate-bounce  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </button>
                  <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    good morning!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <a className='fixed right-40 top-2 p-0.5 inline-flex items-center justify-center overflow-hidden group rounded-md'>
                <span className='w-full h-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg absolute'></span>
                <span className='relative px-2 py-1 transition-all ease-out bg-gray-800 rounded-md group-hover:bg-opacity-0 group-hover duration-400'>
                  <button className='' onClick={disconnect}>
                    Disconnect
                  </button>
                </span>
              </a>

              <App />
            </>
          )}
        </div>
        <div className='justify-center items-center' padding='10px 0'></div>
        {account && (
          <div className='justify-center items-start'>
            <div
              className='rounded-lg	border-2 max-w-sm'
              overflow='hidden'
              padding='10px'
            >
              <div>
                {signature ? (
                  <div label={signature} placement='bottom'>
                    <h1>{`Signature: ${truncateAddress(signature)}`}</h1>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className='rounded-md	border-2 max-w-sm'
              overflow='hidden'
              padding='10px'
            >
              <div>
                {verified !== undefined ? (
                  verified === true ? (
                    <div>
                      <div color='green' />
                      <h1>Signature Verified!</h1>
                    </div>
                  ) : (
                    <div>
                      <div color='red' />
                      <h1>Signature Denied!</h1>
                    </div>
                  )
                ) : null}
              </div>
            </div>
          </div>
        )}
        <h1>{error ? error.message : null}</h1>
      </div>
    </>
  )
}
