import React from 'react'
import { Box, Circle, Flex, Grid, GridItem, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGmail, SiMedium } from 'react-icons/si'
import { AiOutlineMail } from "react-icons/ai";
import Project from './Project'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

const Projects = () => {
  
  const info = {
    boat:{
      gif: 'boat.gif',
      title: 'Boat-lifestyle Clone',
      description: 'Features: Sign-in/Sign-up Product gallery Cart page',
      tech: 'Tech Stack: HTML | CSS | JavaScript | React | Redux',
      dep: 'https://tangerine-sunshine-7e926e.netlify.app/',
      git: 'https://github.com/soumyah1512/project_boat_lifestyle'
    },
    homedepot:{
      gif: 'homedep.gif',
      title: 'Homedepot Clone',
      description: 'Features: Social Sign-in/Sign-up Different sections as per product categories Cart, checkout and payments section',
      tech: 'Tech Stack: HTML | CSS | JavaScript | Bootstrap',
      dep: 'https://visionary-pastelito-fbdbfd.netlify.app/',
      git: 'https://github.com/iShilajit/HomeDepotClone'
    },
    kohls:{
      gif: 'kohls.gif',
      title: 'Kohls Clone',
      description: 'Features: Sign-in/Sign-up Product gallery Cart page',
      tech: 'Tech Stack: HTML | CSS | JavaScript',
      dep: 'https://friendly-shirley-a1a2a5.netlify.app/',
      git: 'https://github.com/AkshayPatil96/Kohls'
    },
  }
  const boat = info.boat
  const homedepot = info.homedepot
  const kohls = info.kohls
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
                <Box margin='auto' width='50vw' height='80vh' borderRadius='8px' background='black'>
                    <Carousel useKeyboardArrows={true} infiniteLoop={true} autoPlay={true}>
                      <div>
                        <Project info={boat}/>
                      </div>
                      <div>
                        <Project info={homedepot}/>
                      </div>
                      <div>
                        <Project info={kohls}/>
                      </div>
                    </Carousel>
                </Box>
            </Flex>
        </Box>
    </Box>
    </>
  )
}

export default Projects