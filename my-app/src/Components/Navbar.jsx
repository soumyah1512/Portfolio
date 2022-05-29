import { Box, Button, ButtonGroup, Center, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import SmallButton from './SmallButton'

const Navbar = () => {
  return (
    <>
      <Box backgroundColor='white'  padding='8px 80px' height='70px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box>
            <Center w='50px' h='50px' color='white'>
                <Box as='span' fontWeight='bold' fontSize='md'>
                  <Image src='darkLogo.png' alt='Dan Abramov' />
                </Box>
            </Center>
          </Box>
          <Spacer/>
            <ButtonGroup gap='4'>
              <SmallButton text='About'/>
              <SmallButton text='Skills'/>
              <SmallButton text='Projects'/>
              <SmallButton text='Contact'/>
            </ButtonGroup>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar