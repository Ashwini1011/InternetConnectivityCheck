import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Connection from './Connection'
// import NoConnection from './NoConnection'

const useInternetStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
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

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

// const NoInternetAndWithInternet = () => {
//   const isOnline = useInternetStatus()

//   return (
//     <>
//       <div>Internet Connectivity Checking Project</div>
//       <p>{isOnline ? <Connection /> : <NoConnection />} </p>
//       <ToastContainer />
//     </>
//   )
// }

// export default NoInternetAndWithInternet
export default useInternetStatus
