import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Box, Text, Heading, VStack,useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'

const Profilecard = ({src, alt}) => {

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
        width: '50px',
        height:'50px'
      }
  return (
    <Box>
        {isLargerThan768 ? 
        <Card
         direction={{ base: 'row', sm: 'row' }}
         overflow='hidden'
         variant='outline'
         size='sm'
         color='black'
         height={isLargerThan768 ? '70px' : '60px'}
         width={isLargerThan768 ? '280px' : '150px'}
         justify={'center'}
         align={'center'}
         border={'10px'}
         zIndex= 'unset'
        >
            <VStack spacing={'2px'}>
                <CardBody>
                <Heading as='h4' size={isLargerThan768 ? 'lg' : 'md'} fontSize={isLargerThan768 ? "28px" : "16px"}>Olubiyi Oluga</Heading>
                </CardBody>
            </VStack>
            {isLargerThan768 ?  <Image
          style={imageStyle} 
          priority={true}
          src={src}
          alt={alt}
           /> : ''}
        </Card>
        : ''}
    </Box>
  )
}

export default Profilecard