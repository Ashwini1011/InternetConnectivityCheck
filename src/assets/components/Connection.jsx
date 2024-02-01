import { useLottie } from 'lottie-react'
import lodingAni from '../components/lodingAni.json'
const Connection = () => {
  const options = {
    animationData: lodingAni,
    loop: true,
  }
  const { View } = useLottie(options)

  return <>{View}</>
}

export default Connection
