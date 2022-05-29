import { Box, Button, ButtonGroup, Center, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import SmallButton from './SmallButton'

const Navbar = ({onClick}) => {
  return (
    <>
      <Box backgroundColor='white'  padding='8px 80px' height='70px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box>
            <Center w='50px' h='50px' color='white' onClick={(e)=>onClick('home')} cursor='pointer'>
                <Box as='span' fontWeight='bold' fontSize='md'>
                  <Image src='darkLogo.png' alt='Dan Abramov' />
                </Box>
            </Center>
          </Box>
          <Spacer/>
            <ButtonGroup gap='4'>
              <SmallButton text='About' onClick={(e)=>onClick(e)} section='about'/>
              <SmallButton text='Skills' onClick={onClick} section='skills'/>
              <SmallButton text='Projects' onClick={onClick} section='projects'/>
              <SmallButton text='Contact' onClick={onClick} section='contact'/>
            </ButtonGroup>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar