import { Box, Button,  Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, Image, Input, Spacer, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import SmallButton from '../SmallButton'
import { GiHamburgerMenu } from "react-icons/gi";



const MNavbar = ({onClick}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
      <Box backgroundColor='white'  padding='8px' height='70px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box>
            <Center w='50px' h='50px' color='white' onClick={(e)=>onClick('home')} cursor='pointer'>
                <Box as='span' fontWeight='bold' fontSize='md'>
                  <Image src='darkLogo.png' alt='Dan Abramov' />
                </Box>
            </Center>
          </Box>
          <Spacer/>
          <Button ref={btnRef} color='black' bgColor='white' onClick={onOpen}>
          <Icon as={GiHamburgerMenu} fontSize='32px'/>
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>

                <VStack gap={4}>
                <Box width='100%'>
                    <SmallButton width='100%' text='About' onClick={(e)=>onClick(e)} section='about'/>
                </Box>
                <Box width='100%'>
                    <SmallButton width='100%' text='Skills' onClick={onClick} section='skills'/>
                </Box>
                <Box width='100%'>
                    <SmallButton width='100%' text='Projects' onClick={onClick} section='projects'/>
                </Box>
                <Box width='100%'>
                    <SmallButton width='100%' text='Contact' onClick={onClick} section='contact'/>
                </Box>
                </VStack>
            </DrawerBody>
            </DrawerContent>
        </Drawer> 
        </Flex>
      </Box>
    </>
  )
}

export default MNavbar