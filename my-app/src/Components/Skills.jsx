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
    <Box width='100%' height='100%'>
        <Box width='90%' height='80%' margin='auto'>
            <Flex>
                <Box margin='10% auto' width='40%'>
                  <VStack gap='20'>
                  <HStack gap='50px'>
                    <SkillIcon icon={'html-1.png'} text={'HTML'}/>
                    <SkillIcon icon={'css-3.png'} text={'CSS'}/>
                    <SkillIcon icon={'logo-javascript.png'} text={'JS'}/>
                  </HStack>
                  <HStack gap='50px'>
                    <SkillIcon icon={'react-2.png'} text={'React'}/>
                    <SkillIcon icon={'redux.png'} text={'Redux'}/>
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