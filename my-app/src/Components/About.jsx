import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import SmallButton from './SmallButton'

const About = () => {
  return (
    <Box width='90vw' height='90vh'>
        <Box width='90%' height='80%' margin='auto'>
            <Flex>
                <Box margin='10%' >
                    <Image src='draft2.png' width='350px'/>
                </Box>
                <Box margin='12% auto' marginLeft='0'>
                    <Image src='hello.gif' width='250px'/>
                    <br/>
                    <Text fontSize='40px'>I am <b>Soumya</b>,</Text>
                    <br/>
                    <Heading fontSize='48px' color='grey' bgGradient='linear(to-t, blue.200, teal.500)' bgClip='text'>Full-Stack Developer</Heading>
                    <br/>
                    <br/>
                    <div style={{marginLeft: '70%'}}>
                        <Link sx={{textDecoration: 'none'}} href='https://docs.google.com/document/d/19408e1RJen4nZn-5lKWJhy5NQv9xKJwCo-STs6uHFy0/edit?usp=sharing' isExternal>
                            <SmallButton text='Resume ⟫'/>
                        </Link>
                    </div>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default About