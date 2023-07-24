import React, {FC} from 'react'
import { Box, Flex, Button, Heading, Spacer, Text, useBreakpointValue } from '@chakra-ui/react';
import { MdBuild , MdCall } from "react-icons/md"
import {GrAdd} from 'react-icons/gr'

type Navigate = () => void

interface Headerprops {
  heading:string
  buttontext:string
  navigate:Navigate
}


const Header:FC<Headerprops> = ({heading, buttontext, navigate}) => {

  const buttonWidth = useBreakpointValue({ base: '100px', sm: '100px', md: '100px', lg: '150px' });
  const cardHeight = useBreakpointValue({ base: '200px', sm: '250px', md: '300px', lg: '180px' });
  const fontSizeHeader = useBreakpointValue({ base: 'lg', sm: 'lg', md: 'lg', lg: 'lg' });
  const fontSizeButton = useBreakpointValue({ base: 'md', sm: 'md', md: 'lg', lg: 'lg' });

  return (
    <Box bg={'white'} h={'80px'} >
        <Flex direction={'row'} justify={'space-between'} align={'center'}>
            <Heading size={fontSizeHeader} margin={'0'}>{heading}</Heading>
            <Button leftIcon={<GrAdd />} colorScheme='white' variant='solid' w={buttonWidth} color={'orange'} fontSize={fontSizeButton} onClick={navigate}>
             {/* <Text color={'#fe9500'} fontSize={'16px'}>Add</Text> */}
            {buttontext}
            </Button>
        </Flex>
    </Box>
  )
}

export default Header