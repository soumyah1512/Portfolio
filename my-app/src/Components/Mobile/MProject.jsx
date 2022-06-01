import { AspectRatio, Box, Center, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SmallButton from '../SmallButton'

const MProject = ({info}) => {

  return (
    <>
        <Center gap={10} margin='5%'>
            <Box p={4} borderRadius='12px' width='90%'  boxShadow='2xl' backgroundColor='white'>
                <VStack gap={4}>
                    <Box>
                        <Image src={info.gif}/>
                    </Box>
                    <Box>
                        <Heading size='md'>
                            {info.title}
                            {/* Boat-lifestyle  */}
                        </Heading>
                        <br/>
                        <Text noOfLines={4} color="grey" fontSize="10px">
                            {info.description}
                        {/* BoAt is an India-based company which was incorporated in November 2013. BoAt markets earphones, headphones stereos, travel chargers, and premium rugged cables. */}
                        </Text>
                        <Text noOfLines={4} color="blue.400" fontSize="10px">
                            {info.tech}
                        </Text>
                    </Box>
                    <Box >
                        <HStack gap={8}> 

                        <Link href={info.dep} isExternal>
                            <SmallButton text='Deployed'/>
                        </Link>
                        <Link href={info.git} isExternal>
                            <SmallButton text='Github'/>
                        </Link>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </Center>
    </>
  )
}

export default MProject