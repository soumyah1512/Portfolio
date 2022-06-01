import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SkillIcon = ({icon,text}) => {
  return (
    <>
      <Center >
        <Box 
        // border="1px solid grey" 
        cursor='pointer'
        bg={'black'}
        boxShadow='base'
        padding="28px 25px 0 25px" 
        borderRadius="10px" 
        sx={{transition: 'background ,color .5s'}}
        // transition="background .5s"
        color='white'
        _hover={{ backgroundColor:'white', color:'black'}}
        >
          <Box width='60px' height='60px'>
            <Image src={icon}  />
          </Box>
            <Center marginTop="16px">
              <Text fontWeight={'800'}>
                {text}
              </Text>
            </Center>
        </Box>
      </Center>
    </>
  )
}

export default SkillIcon