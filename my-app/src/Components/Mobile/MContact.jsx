import React from 'react'
import { Box, Center, Circle, Flex, Grid, GridItem, Heading, Image, Link, Spacer, Text, Tooltip } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail, SiMedium } from 'react-icons/si'
import { AiOutlineMail } from "react-icons/ai";

const MContact = () => {
  return (
    <>
      <Box width='100%' height='100%'>
        <Box width='90%' height='80%' margin='auto'>
            <Flex>
                <Box margin='5% auto' width='60%'>
                    <Flex flexDirection='column' gap='10px'>
                      <Center>
                        <Text fontSize='xl' color='grey'>Don't be a stranger...</Text>
                      </Center>
                      <Center>
                        <Text fontSize='xl' color='grey'>Get in touch 😁</Text>
                      </Center>
                    <br/>
                    <Center>
                      <Image src='wave.gif' width='150px'/>
                    </Center>
                    <br/>
                    <Spacer/>
                    <Flex templateColumns='repeat(5, 16px)' gap={4}  margin='auto'>
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
                    <Center marginTop='5%'>
                      <Heading fontSize='24px'>Soumya Hakke</Heading>
                    </Center>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        <Box bg='black' height='20%'>
          <Center>
            <Text marginTop='5%' marginBottom='5px' color='white' bgGradient='linear(to-r, green.200, pink.500)' bgClip='text' fontSize='14px' cursor='pointer'>
              Made with love and a little bit of &nbsp; 
              <Tooltip label="Some call it React 😛" aria-label='A tooltip' >
                  magic ƪ(˘⌣˘)ʃ
              </Tooltip>
            </Text>
          </Center>
          <Center color="white" fontSize='12px'>
          © 2022
          </Center>
          <Center color="white" fontSize='12px'>
            All rights reserved.
          </Center>
        </Box>
    </Box>
    </>
  )
}

export default MContact