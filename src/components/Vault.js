import { useState, useEffect } from "react"
import { ethers } from "ethers"
import erc20abi from "./abi.json"
import { motion } from "framer-motion"

export function Vault() {
  const [txs, setTxs] = useState([])
  const [contractListened, setContractListened] = useState()
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    tokenName: "-",
    tokenSymbol: "-",
    totalSupply: "-",
  })
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-",
  })

  useEffect(() => {
    if (contractInfo.address !== "-") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider
      )

      erc20.on("Transfer", (from, to, amount, event) => {
        console.log({ from, to, amount, event })

        setTxs((currentTxs) => [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount),
          },
        ])
      })
      setContractListened(erc20)

      return () => {
        contractListened.removeAllListeners()
      }
    }
  }, [contractInfo.address])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const erc20 = new ethers.Contract(data.get("addr"), erc20abi, provider)

    const tokenName = await erc20.name()
    const tokenSymbol = await erc20.symbol()
    const totalSupply = await erc20.totalSupply()

    setContractInfo({
      address: data.get("addr"),
      tokenName,
      tokenSymbol,
      totalSupply,
    })
  }

  const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider)
    const signer = await provider.getSigner()
    const signerAddress = await signer.getAddress()
    const balance = await erc20.balanceOf(signerAddress)

    setBalanceInfo({
      address: signerAddress,
      balance: String(balance),
    })
  }

  const handleTransfer = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = await provider.getSigner()
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer)
    await erc20.transfer(data.get("recipient"), data.get("amount"))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className='default-page default-page--standard default-page--content'>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-gradient-to-tr from-violet-500 to-orange-300 border-sky-300'>
                <main className='mt-4 p-4'>
                  <h1 className='text-xl font-semibold text-gray-700 text-center'>
                    Token Bio
                  </h1>
                  <div className=''>
                    <div className='my-3'>
                      <input
                        type='text'
                        name='addr'
                        className='input input-bordered block text-gray-600 w-full focus:ring focus:outline-none rounded-sm'
                        placeholder='ERC20 contract address'
                      />
                    </div>
                  </div>
                </main>
                <footer className='p-4'>
                  <button
                    type='submit'
                    className=' bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-md submit-button  focus:ring focus:outline-none w-full'
                  >
                    Get token info
                  </button>
                </footer>
                <div className='px-4'>
                  <div className='overflow-x-auto'>
                    <table className='table w-full'>
                      <thead>
                        <tr>
                          <th className=' bg-transparent'>Name</th>
                          <th className=' bg-transparent'>Symbol</th>
                          <th className=' bg-transparent'>Total supply</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className=' bg-transparent'>
                            {contractInfo.tokenName}
                          </th>
                          <td className=' bg-transparent'>
                            {contractInfo.tokenSymbol}
                          </td>
                          <td className=' bg-transparent'>
                            {String(contractInfo.totalSupply)}
                          </td>
                          <td>{contractInfo.deployedAt}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='p-4'>
                  <button
                    onClick={getMyBalance}
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full submit-button focus:ring focus:outline-none w-full'
                  >
                    Get my balance
                  </button>
                </div>
                <div className='px-4'>
                  <div className='overflow-x-auto'>
                    <table className='table w-full'>
                      <thead>
                        <tr>
                          <th className=' bg-transparent'>Address</th>
                          <th className=' bg-transparent'>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className=' bg-transparent'>
                            {balanceInfo.address}
                          </th>
                          <td className=' bg-transparent'>
                            {balanceInfo.balance}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              /
            </form>

            <div className='m-4 bg-gradient-to-tr from-violet-500 to-orange-300 w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl'>
              <div className='mt-4 p-4'>
                <h1 className='text-xl font-semibold text-gray-700 text-center'>
                  Send tokens
                </h1>

                <form onSubmit={handleTransfer}>
                  <div className='my-3'>
                    <input
                      type='text'
                      name='recipient'
                      className='input input-bordered block w-full focus:ring focus:outline-none'
                      placeholder='Recipient address'
                    />
                  </div>
                  <div className='my-3'>
                    <input
                      type='text'
                      name='amount'
                      className='input input-bordered block w-full focus:ring focus:outline-none'
                      placeholder='Amount to transfer'
                    />
                  </div>
                  <footer className='p-4'>
                    <button
                      type='submit'
                      className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full submit-button focus:ring focus:outline-none w-full'
                    >
                      Transfer
                    </button>
                  </footer>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className='m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-gradient-to-tr from-violet-500 to-orange-300 border-sky-300'>
              <div className='mt-4 p-4'>
                <h1 className='text-xl font-semibold text-gray-700 text-center'>
                  My treasury
                </h1>
                <div className='grid grid-cols-3'>
                  <p>GMC</p>
                  <p>ETH</p>
                  <p>Earnd USDC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
