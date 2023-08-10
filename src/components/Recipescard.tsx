import React, { FC } from 'react'
import { Card, CardHeader, CardBody, HStack, Box, Stack, Text, Heading, useBreakpointValue, Button } from '@chakra-ui/react';
import Image from 'next/image';



type Navigate2 = () => void

interface Cardprops {
  image: any,
  title: string,
  description: string,
  link: Navigate2,
  linktext: string
}

const Recipescard: FC<Cardprops> = ({ image, title, description, link, linktext }) => {

  const cardWidth = useBreakpointValue({ base: '320px', sm: '320px', md: '300px', lg: '100%' });
  const cardHeight = useBreakpointValue({ base: '400px', sm: '400px', md: '400px', lg: '180px' });
  const imageWidth = useBreakpointValue({ base: '350px', sm: '350px', md: '350px', lg: '181px' });

  interface imagestyle {
    width: any,
    height: string,
    //borderRadius:string,
    backgroundPosition: string
  }

  const imageStyle: imagestyle = {
    width: imageWidth,
    height: '100%',
    //borderRadius:'5.5%  0 0 5.5%',
    backgroundPosition: 'cover'
  }

  interface Linkstyle {
    fontSize: string,
    color: string
  }

  const linkStyle: Linkstyle = {
    fontSize: '18px',
    color: '#fe9500'
  }

  return (
    <Box>
      <Card
        direction={{ base: 'column', sm: 'column', lg: 'row' }} align={'flex-start'}
        boxShadow='md' rounded='md' bg='white' w={cardWidth} h={cardHeight} zIndex='1' borderRadius={'20px'} _hover={{ transition: 'all 0.3s ease', transform: 'scale(1.030)' }} overflow={'hidden'}
      >
        <Image
          src={image}
          alt='Caffe Latte'
          style={imageStyle}
          object-fit="cover"

        />

        <Stack >
          <CardBody >
            <Heading size='md' align='left' >{title}</Heading>
            <Text py='2' align={'left'}>{description}</Text>
            <HStack align={'flex-start'}>
              <Button onClick={link} className='recipecardbutton' size={'md'} textAlign='left' px={0} _hover={{ backgroundColor: 'initual' }}>
                <Text align='left'>
                  {linktext}
                </Text>
              </Button>
            </HStack>

            {/* <Text style={linkStyle} onClick={link} align={'left'}>{linktext}</Text> */}
          </CardBody>

        </Stack>
      </Card>
    </Box>
  )
}

export default Recipescard