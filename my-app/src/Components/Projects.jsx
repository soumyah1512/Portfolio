import React from 'react'
import { Box, Circle, Flex, Grid, GridItem, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail, SiMedium } from 'react-icons/si'
import { AiOutlineMail } from "react-icons/ai";
import Project from './Project'

const Projects = () => {
  return (
    <>
    <Box width='100%' height='100%'>
        <Box width='90%' height='80%' margin='auto'>
            <Flex>
                <Box margin='6%' >
                    <Heading fontSize='6xl'>
                        ‹Projects›
                    </Heading>
                </Box>
                <Box margin='auto' width='65%' border='1px solid black'>
                    <Project/>
                </Box>
            </Flex>
        </Box>
    </Box>
    </>
  )
}

export default Projects