import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import Main from '../Components/Main'

const Home = () => {
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
      {!firstLoad && <Main/>}
    </>
  )
}

export default Home