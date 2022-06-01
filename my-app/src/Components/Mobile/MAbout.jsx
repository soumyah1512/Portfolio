import { Box, Flex, Heading, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SmallButton from '../SmallButton'

const MAbout = () => {
  return (
    <Box width='100%' height='100%' >
        <Box width='90%' height='90%' margin='auto' >
            <VStack>
                <Box margin='10%' >
                    <Image src='draft2.png' width='150px'/>
                </Box>
                <Box margin='12% auto' >
                    <Image src='hello.gif' width='150px'/>
                    <br/>
                    <Text fontSize='25px'>I am <b>Soumya</b>,</Text>
                    <br/>
                    <Heading fontSize='35px' color='grey' bgGradient='linear(to-t, blue.200, teal.500)' bgClip='text'>Full-Stack Developer</Heading>
                    <br/>
                    <Flex direction='row-reverse'>
                        <Link sx={{textDecoration: 'none'}} href='https://docs.google.com/document/d/19408e1RJen4nZn-5lKWJhy5NQv9xKJwCo-STs6uHFy0/edit?usp=sharing' isExternal>
                            <SmallButton text='Resume ⟫'/>
                        </Link>
                    </Flex>
                </Box>
            </VStack>
        </Box>
    </Box>
  )
}

export default MAbout