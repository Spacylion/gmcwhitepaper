import React from "react"
import gmc10 from "../assets/gmc10.png"
import { motion } from "framer-motion"
import terminal from "../assets/terminal.png"

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='flex flex-col justify-center py-6 lg:py-12'>
        <div className='w-full'>
          <img
            className=' w-20 h-20 hover:rotate-12 transition ease-in-out delay-150 filter drop-shadow-lg flex flex-col content-center justify-center'
            alt='/'
            src={gmc10}
          ></img>
        </div>

        <div className='grid grid-cols-6 gap-4'>
          <div className='col-start-2 col-span-4'>
            <div className='text-center justify-center items-center P-4'>
              <div className='align-center flex text-center justify-center text-3xl text-amber-100 font-bold mb-3 p-4'>
                Whitepaper
              </div>
              <a href='https://www.pdfhost.net/index.php?Action=DownloadFile&id=8517b5f5f96f1cc1502f9f35931d9da9'>
                Download PDF
              </a>
              <h1 className='align-center flex text-center justify-center text-3xl text-amber-100 font-bold mb-3 p-4'>
                gm wagmi classic
              </h1>
              <h2 className='align-center flex text-center justify-center text-xl text-amber-50  mb-3 p-4'>
                GMC is a culture coin offering USDC stable coin reflections. The
                community supports the WAGMI ideology, which is an acronym for
                "We are all going to make it". GMC is a homage to the original
                $gm project but with improved tokenomics for holders.
              </h2>
              <h2 className='align-center flex text-center justify-center text-xl text-amber-50  mb-3 p-4'>
                We are building a decentralized dapp with exciting token-gated
                features available to $GMC holders holding. The goal for GMC is
                to make it easier for safe dedicated project teams to get the
                exposure they deserve by using an On-Chain mechanisms.
              </h2>
              <h2>Remember, GMC means family</h2>
              <h1 className='align-center flex text-center justify-center text-3xl text-amber-100 font-bold mb-3 p-4'>
                Roadmap (Upgradeable. Votes of family)
              </h1>
              <div className='w-full mx-auto lg:max-w-4xl'>
                <div className='relative'>
                  <div className='absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2'></div>
                  <div className='space-y-12 lg:space-y-8'>
                    <div>
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center justify-start w-full mx-auto'>
                          <div className='w-full lg:w-1/2 lg:pr-8'>
                            <div className='p-4 bg-gradient-to-t bg-conic-to-tl from-yellow-200 via-emerald-200 to-yellow-200 rounded shadow-lg shadow-cyan-300'>
                              <h1 className='text-gray-800'>
                                Stealth launch. Burn "25%" Supply. Contract has
                                been renounced so no one in this world can
                                change anything in this contract. Memesystem.
                                Beep beep 1001 01 gmc
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 rounded-full left-1/2 sm:translate-y-0'>
                          <span className='text-gray-800'>1</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center justify-end w-full mx-auto'>
                          <div className='w-full lg:w-1/2 lg:pl-8'>
                            <div className='p-4  Pastel bg-gradient-to-tr from-violet-500 rounded shadow-lg shadow-red-300'>
                              <p>gm wagmi classic audit</p>
                            </div>
                          </div>
                        </div>
                        <div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 rounded-full left-1/2 sm:translate-y-0'>
                          <span className='text-gray-800'>2</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center justify-start w-full mx-auto'>
                          <div className='w-full lg:w-1/2 lg:pr-8'>
                            <div className='p-4 Pastel bg-gradient-to-tr from-violet-500 rounded shadow-lg shadow-yellow-300'>
                              <p>gm wagmi classic listing</p>
                            </div>
                          </div>
                        </div>
                        <div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 rounded-full left-1/2 sm:translate-y-0'>
                          <span className='text-gray-800'>3</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center justify-end w-full mx-auto'>
                          <div className='w-full lg:w-1/2 lg:pl-8'>
                            <div className='p-4  Pastel bg-gradient-to-tr from-violet-500 rounded shadow-lg shadow-red-300'>
                              <p>gm wagmi classic tracker</p>
                            </div>
                          </div>
                        </div>
                        <div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 rounded-full left-1/2 sm:translate-y-0'>
                          <span className='text-gray-800'>4</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center justify-start w-full mx-auto'>
                          <div className='w-full lg:w-1/2 lg:pr-8'>
                            <div className='p-4 Pastel bg-gradient-to-tr from-violet-500 rounded shadow-lg shadow-yellow-300'>
                              <p>gm wagmi classic chilling</p>
                            </div>
                          </div>
                        </div>
                        <div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 rounded-full left-1/2 sm:translate-y-0'>
                          <span className='text-gray-800'>5</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className=''>
                        <div className='flex items-center justify-end w-full mx-auto'>
                          <div className='w-full lg:w-1/2 lg:pl-8'>
                            <div className='p-4 Pastel  bg-gradient-to-tr from-violet-500 rounded shadow-lg shadow-lime-300'>
                              <p>gm wagmi classic</p>
                            </div>
                          </div>
                        </div>
                        <div className='absolute flex items-center justify-center w-12 h-8 transform -translate-x-1/2 -translate-y-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 rounded-full left-1/2 sm:translate-y-0'>
                          <span className='text-gray-800'>gmc</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='max-w-md mx-auto px-8 space-y-2 mt-20 p-4'>
              <h1 className='align-center flex text-center justify-center text-3xl text-amber-100 font-bold p-4'>
                Tokenomics
              </h1>
              <details className='p-4 rounded-lg'>
                <summary className='font-semibold'>gmc contract</summary>
                <div className='mt-3'>
                  <p className='text-amber-100 text-md font-bold'>
                    0x3462f9043d4e66ae57c0e4578b5493f59fd259fb
                  </p>
                </div>
              </details>
              <details className='p-4 rounded-lg'>
                <summary className='font-semibold'>gmc tokenomics</summary>
                <div className='mt-3'>
                  <p className='text-amber-100 text-md font-bold leading-6'>
                    1T Supply (25% burned at launch)
                  </p>
                </div>
              </details>
              <details className='p-4 rounded-lg'>
                <summary className='font-semibold'>
                  I am rekt. Can developers change fees?
                </summary>
                <div className='mt-3'>
                  <p className=' text-amber-100 text-md font-bold leading-6'>
                    <h2>
                      gm freen! We are all family, contract have been renounced,
                      so noone in this worls can change anything in contract.
                      Wagmi!
                    </h2>
                    <h2>5% marketing</h2>
                    <h2>2% USDC</h2>
                    <h2>rewards (4% roundtrip) 1% LP</h2>
                  </p>
                </div>
              </details>
              <details className='p-4 rounded-lg'>
                <summary className='font-semibold'>
                  what is gm wagmi classic?
                </summary>
                <div className='mt-3'>
                  <p className='text-amber-100 text-md font-bold leading-6'>
                    This is classic! It means good morning, we are all gonna
                    make it.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
