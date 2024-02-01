import { useLottie } from 'lottie-react'
import noConnectionAni from '../components/noConnectionAni.json'
const NoConnection = () => {
  const options = {
    animationData: noConnectionAni,
    loop: true,
  }
  const { View } = useLottie(options)

  return <>{View}</>
}

export default NoConnection
