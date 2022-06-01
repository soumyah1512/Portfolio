import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import Main from '../Components/Main'
import { useMediaQuery } from '@chakra-ui/react'
import Mobile from '../Components/Mobile/Mobile'

const Home = () => {
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')
    const [firstLoad,setFirstLoad] = useState(true)
  useEffect(() => {
    if(firstLoad) {
      setTimeout(() => {
        setFirstLoad(false);
      },2000)
    }
  },[])
  return (
    <>
      {firstLoad && <Loader/>}
      {isLargerThan750 ? <Main/>
      :<Mobile/>}
    </>
  )
}

export default Home