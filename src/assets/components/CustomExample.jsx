import useInternetStatus from '../../hooks/useInternetStatus'
import { ToastContainer } from 'react-toastify'
import Connection from './Connection'
import NoConnection from './NoConnection'
const CustomExample = () => {
  const isOnline = useInternetStatus()

  return (
    <div>
      <p>{isOnline ? <Connection /> : <NoConnection />} </p>
      <ToastContainer />
    </div>
  )
}

export default CustomExample
