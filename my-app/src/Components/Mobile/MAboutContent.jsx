import React from 'react'
import { Box, Circle, Flex, Grid, GridItem, Heading, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail, SiMedium } from 'react-icons/si'
import { AiOutlineMail } from "react-icons/ai";

const MAboutContent = () => {
  return (
    <section id="about">
    <Box width='100%' height='100%' >
        <Box width='90%' height='90%' margin='auto'>
            <VStack gap={8}>
                <Flex width='100%' sx={{justifyContent: 'start'}}>
                    <Box margin='6%'>
                        <Heading fontSize='4xl'>
                            ‹About›
                        </Heading>
                    </Box>
                </Flex>
                <Box margin='auto' width='80%'>
                    <Flex flexDirection='column' gap={2}>
                    <Text fontSize='2xl' color='grey'>I am Soumya Hakke</Text>
                    <br/>
                    <Text fontSize='md'>Dedicated and efficient, aspiring full-stack developer currently learning MERN stack. Curious to explore and learn new things . Seeking to further improve his skills in a challenging professional setting.</Text>
                    <Spacer/>
                    <Flex templateColumns='repeat(5, 16px)' gap={4} flexDirection={'row-reverse'} marginTop='15%'>
                        <GridItem>
                            <Link href='https://medium.com/@soums816' isExternal>
                            <Circle size='40px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={SiMedium} w={4} h={4} />
                            </Circle>   
                            </Link>  
                        </GridItem>
                        <GridItem>
                            <Link href='https://www.linkedin.com/in/soumya-hakke/' isExternal>
                            <Circle size='40px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={FaLinkedinIn} w={4} h={4}/>
                            </Circle>  
                            </Link>   
                        </GridItem>
                        <GridItem>
                            <Link href='https://github.com/soumyah1512' isExternal>
                            <Circle size='40px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={FaGithub} w={4} h={4} />
                            </Circle>    
                            </Link> 
                        </GridItem>
                        <GridItem>
                            <Link href='mailto:soums816@gmail.com' isExternal>
                            <Circle size='40px' bg='black' color='white' _hover={{backgroundColor:'white',color:'black',cursor: 'pointer'}}>
                                <Icon as={AiOutlineMail} w={4} h={4}/>
                            </Circle>  
                            </Link>   
                        </GridItem>
                    </Flex>
                    </Flex>
                </Box>
            </VStack>
        </Box>
    </Box>
    </section>
  )
}

export default MAboutContent