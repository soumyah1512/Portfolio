import { Box, Center, VStack } from '@chakra-ui/react'
import React from 'react'

const Project = () => {
  return (
    <>
        <Center gap={10}>
            <Box p={4} border='1px solid black' borderRadius='8px'>
                <VStack>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </VStack>
            </Box>
        </Center>
    </>
  )
}

export default Project