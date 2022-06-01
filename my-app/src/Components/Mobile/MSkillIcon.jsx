import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

const MSkillIcon = ({icon,text,size}) => {
  return (
    <>
      <Center >
        <Box 
        // border="1px solid grey" 
        cursor='pointer'
        bg={'black'}
        boxShadow='base'
        padding="16px 22px" 
        borderRadius="10px" 
        sx={{transition: 'background ,color .5s'}}
        // transition="background .5s"
        color='white'
        _hover={{ backgroundColor:'white', color:'black'}}
        >
          <Box width='40px' height='40px'>
            <Image src={icon}  />
          </Box>
            <Center marginTop="16px">
              <Text fontSize={'10px'}>
                {text}
              </Text>
            </Center>
        </Box>
      </Center>
    </>
  )
}

export default MSkillIcon