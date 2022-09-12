import React from 'react'
import { Box, Circle, Flex, Grid, GridItem, Heading, HStack, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'
import { AiOutlineMail } from "react-icons/ai";
import SkillIcon from './SkillIcon'

const Skills = () => {
  return (
    <>
    <Box width='90vw' height='90vh'>
        <Box width='90%' height='80%' margin='auto'>
            <Flex>
                <Box margin='10% auto' width='40%'>
                  <VStack gap='8'>
                  <HStack gap='8'>
                    <SkillIcon icon={'html-1.png'} text={'HTML'}/>
                    <SkillIcon icon={'css-3.png'} text={'CSS'}/>
                    <SkillIcon icon={'logo-javascript.png'} text={'JS'}/>
                    <SkillIcon icon={'react-2.png'} text={'React'}/>
                    <SkillIcon icon={'redux.png'} text={'Redux'}/>
                  </HStack>
                  <HStack gap='8'>
                    <SkillIcon icon={'nodejs.png'} text={'NodeJS'}/>
                    <SkillIcon icon={'express.png'} text={'Express'}/>
                    <SkillIcon icon={'mongodb.png'} text={'MongoDB'}/>
                    <SkillIcon icon={'Typescript.png'} text={'TS'}/>
                    <SkillIcon icon={'chakra.png'} text={'Chakra'}/>
                  </HStack>
                  </VStack>
                </Box>
                <Box margin='6%' >
                    <Heading fontSize='6xl'>
                        ‹Skills›
                    </Heading>
                </Box>
            </Flex>
        </Box>
    </Box>
    </>
  )
} 

export default Skills