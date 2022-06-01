import { Button } from '@chakra-ui/react'
import React from 'react'

const SmallButton = ({text,section,onClick,width}) => {

  return (
    <div>
       <Button 
       width={width}
       onClick={()=>onClick(section)}
       borderRadius={20} 
       padding='5px 20px' 
       backgroundColor='white' 
       border='1px solid black' 
       fontSize='sm' 
       sx={{transition: 'background .5s' }} 
       _hover={{backgroundColor: 'black', color : 'white', textDecoration: 'none'}} 
       _focus={{backgroundColor: 'black', color : 'white'}}
       >
         {text}
       </Button>
    </div>
  )
}

export default SmallButton