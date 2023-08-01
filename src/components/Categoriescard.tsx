import React, { FC } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Box, Text, Heading, Stack, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image';
import styles from '../styles/categories.module.scss'
import Link from 'next/link';


const Categoriescard: FC<{ image: any, title: string, description: string, link: string, linktext: string }> = ({ image, title, description, link, linktext }) => {

  const cardWidth = useBreakpointValue({ base: '350px', sm: '350px', md: '350px', lg: '350px' });
  const cardHeight = useBreakpointValue({ base: '200px', sm: '250px', md: '300px', lg: '450px' });


  interface imagestyle {
    width: string,
    height: string,
    //borderRadius:string
  }

  const imageStyle: imagestyle = {
    width: '100%',
    height: '300px',
    //borderRadius:'5.5% 5.5% 0 0'
  }

  interface Linkstyle {
    fontSize: string,
    color: string
  }

  const linkStyle: Linkstyle = {
    fontSize: '24px',
    color: '#fe9500'
  }

  return (
    <Box  >
      <Card boxShadow='lg' rounded='md' bg='white' w={cardWidth} zIndex='1' borderRadius={'20px'} align={'flex-start'} className={styles['categoriescard']} _hover={{ transition: 'all 0.3s ease', transform: 'scale(1.030)' }} overflow={'hidden'}>
        <Image
          src={image}
          alt='Green double couch with wooden legs'
          priority={true}
          style={imageStyle}
          object-fit="cover"
        />
        <CardBody>
          <Stack mt='6' spacing='0' align={'flex-start'} >
            <Heading size='md'>{title}</Heading>
            <Text>
              {description}
            </Text>
            <Text style={linkStyle}> <Link href={link} style={{ color: '#fe9500' }}>{linktext} </Link></Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Categoriescard