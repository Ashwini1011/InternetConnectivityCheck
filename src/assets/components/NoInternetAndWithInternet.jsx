import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Connection from './Connection'
import NoConnection from './NoConnection'

const NoInternetAndWithInternet = () => {
  // ------------------------------ State to see whether its online or offline-----------------------------
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  // ---------------------------- UseEffect with blank dependencies for accesing browser api  -------------
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      //   console.log('I am connected to the internet')
      toast.success('I am connected to the internet', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }

    const handleOffline = () => {
      setIsOnline(false)
      //   console.log('No connection')
      toast('No internet connection', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }

    // ------------------------------Event Listening-----------------------------------------------------------
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // ------------------------------CleanUp function after  component is unmounted ---------------------------
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  })
  return (
    <>
      <div>Internet Connectivity Checking Project</div>
      <p>{isOnline ? <Connection /> : <NoConnection />} </p>
      <ToastContainer />
    </>
  )
}

export default NoInternetAndWithInternet
