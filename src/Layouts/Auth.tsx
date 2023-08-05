import React, { FC, ReactNode } from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import { Box, Grid, GridItem, Text, Flex, HStack, VStack, Button, } from '@chakra-ui/react'
import Image from 'next/image';
import Image1 from '@/assets/different-bread.jpeg';



interface Childrenprops {
  children: ReactNode
}

interface Imagestyle {
  height: string
  width: string
}

const styles: Imagestyle = {
  height: '100%',
  width: '100%'
}


const Auth: FC<Childrenprops> = ({ children }) => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)')

  return (
    <Box>
      <Grid templateColumns={isLargerThan992 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'} gap={1} >
        <GridItem w='100%'>
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent='center'
            backgroundColor="white"
            height={'100vh'}
            width={"full"}
          >
            {children}
          </Flex>
        </GridItem>
        <GridItem w='100%' h='100vh' bg='white' display={isLargerThan992 ? 'block' : 'none'}>
          <Image
            style={styles}
            src={Image1}
            alt='no'
            priority={true}
          />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Auth