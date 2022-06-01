import React from 'react'
import { Box, Circle, Flex, Grid, GridItem, Heading, HStack, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'
import { AiOutlineMail } from "react-icons/ai";
import SkillIcon from '../SkillIcon'
import MSkillIcon from './MSkillIcon'

const MSkills = () => {
  return (
    <>
    <Box width='100%' height='100%'>
        <Box width='90%' height='90%' margin='auto'>
            <VStack gap={12}>
                <Flex width='100%' sx={{justifyContent: 'start'}}>
                    <Box margin='6%'>
                        <Heading fontSize='4xl'>
                            ‹Skills›
                        </Heading>
                    </Box>
                </Flex>
                <Box >
                  <VStack gap={8}>
                  <HStack gap='30px'>
                    <MSkillIcon icon={'html-1.png'} text={'HTML'}/>
                    <MSkillIcon icon={'css-3.png'} text={'CSS'}/>
                    <MSkillIcon icon={'logo-javascript.png'} text={'JS'}/>
                  </HStack>
                  <HStack gap='30px'>
                    <MSkillIcon icon={'react-2.png'} text={'React'}/>
                    <MSkillIcon icon={'redux.png'} text={'Redux'}/>
                    <MSkillIcon icon={'chakra.png'} text={'Chakra'}/>
                  </HStack>
                  </VStack>
                </Box>
            </VStack>
        </Box>
    </Box>
    </>
  )
} 

export default MSkills