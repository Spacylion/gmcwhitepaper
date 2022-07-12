import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import "./App.css"
import DotLoader from "react-spinners/DotLoader"
import AnimatedRoutes from "./AnimatedRoutes"
import Footer from "./Footer"

function RouterSmooth() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='App'>
      {loading ? (
        <div className='loading-div'>
          <DotLoader color={"#20E6FF"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </>
      )}
    </div>
  )
}

export default RouterSmooth
