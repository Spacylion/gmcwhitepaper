import { useEffect, useState } from "react"

import { Button } from "@chakra-ui/react"
import Playsound from "./Playsound"

import { networkParams } from "./networks"
import { toHex } from "./utils"
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { providerOptions } from "./providerOptions"
import RouterSmooth from "./RouterSmooth"

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
})

export default function WalletConnect() {
  const [provider, setProvider] = useState()
  const [library, setLibrary] = useState()
  const [account, setAccount] = useState()
  const [signature, setSignature] = useState("")
  const [error, setError] = useState("")
  const [chainId, setChainId] = useState()
  const [network, setNetwork] = useState()
  const [message, setMessage] = useState("")
  const [signedMessage, setSignedMessage] = useState("")
  const [verified, setVerified] = useState()

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setProvider(provider)
      setLibrary(library)
      if (accounts) setAccount(accounts[0])
      setChainId(network.chainId)
    } catch (error) {
      setError(error)
    }
  }

  const handleNetwork = (e) => {
    const id = e.target.value
    setNetwork(Number(id))
  }

  const handleInput = (e) => {
    const msg = e.target.value
    setMessage(msg)
  }

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      })
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]],
          })
        } catch (error) {
          setError(error)
        }
      }
    }
  }

  const signMessage = async () => {
    if (!library) return
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account],
      })
      setSignedMessage(message)
      setSignature(signature)
    } catch (error) {
      setError(error)
    }
  }

  const verifyMessage = async () => {
    if (!library) return
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature],
      })
      setVerified(verify === account.toLowerCase())
    } catch (error) {
      setError(error)
    }
  }

  const refreshState = () => {
    setAccount()
    setChainId()
    setNetwork("")
    setMessage("")
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

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId)
      }

      const handleDisconnect = () => {
        console.log("disconnect", error)
        disconnect()
      }

      provider.on("accountsChanged", handleAccountsChanged)
      provider.on("chainChanged", handleChainChanged)
      provider.on("disconnect", handleDisconnect)

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged)
          provider.removeListener("chainChanged", handleChainChanged)
          provider.removeListener("disconnect", handleDisconnect)
        }
      }
    }
  }, [provider])

  return (
    <>
      <div>
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
                  <Button
                    className='w-full  tracking-wide animate-bounce  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </Button>
                  <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    good morning!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div>
                <button
                  className='fixed bg-transparent bottom-4 z-50 left-4 w-10 h-10 text-amber-50'
                  onClick={disconnect}
                >
                  gmc Out
                </button>
                <Playsound className='fixed bottom-4 z-50 left-4' />
                <RouterSmooth />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
