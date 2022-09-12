import React from 'react'
import { Box, Circle, Flex, Grid, GridItem, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail, SiMedium } from 'react-icons/si'
import { AiOutlineMail } from "react-icons/ai";

const AboutContent = () => {
  return (
    <section id="about">
    <Box width='90vw' height='90vh'>
        <Box width='90%' height='80%' margin='auto'>
            <Flex>
                <Box margin='6%' >
                    <Heading fontSize='6xl'>
                        ‹About›
                    </Heading>
                </Box>
                <Box margin='10% auto' width='40%'>
                    <Flex flexDirection='column'>
                    <Text fontSize='4xl' color='grey'>I am Soumya Hakke</Text>
                    <br/>
                    <br/>
                    <Text fontSize='xl'>Dedicated and efficient, aspiring full-stack developer currently learning MERN stack. Curious to explore and learn new things . Seeking to further improve his skills in a challenging professional setting.</Text>
                    <Spacer/>
                    <Flex templateColumns='repeat(5, 16px)' gap={6} flexDirection={'row-reverse'} marginTop='15%'>
                        <GridItem>
                            <Link href='https://medium.com/@soums816' isExternal>
                            <Circle size='50px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={SiMedium} w={6} h={6} />
                            </Circle>   
                            </Link>  
                        </GridItem>
                        <GridItem>
                            <Link href='https://www.linkedin.com/in/soumya-hakke/' isExternal>
                            <Circle size='50px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={FaLinkedinIn} w={6} h={6}/>
                            </Circle>  
                            </Link>   
                        </GridItem>
                        <GridItem>
                            <Link href='https://github.com/soumyah1512' isExternal>
                            <Circle size='50px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={FaGithub} w={6} h={6} />
                            </Circle>    
                            </Link> 
                        </GridItem>
                        <GridItem>
                            <Link href='mailto:soums816@gmail.com' isExternal>
                            <Circle size='50px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={AiOutlineMail} w={6} h={6}/>
                            </Circle>  
                            </Link>   
                        </GridItem>
                    </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>
    </section>
  )
}

export default AboutContent