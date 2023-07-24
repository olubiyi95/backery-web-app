import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Box, Text, HStack, Heading, useBreakpointValue, VStack } from '@chakra-ui/react'

const Recipedetailscard = () => {

    const cardWidth = useBreakpointValue({ base: '320px', sm: '320px', md: '320px', lg: '100%' });
    const cardHeight = useBreakpointValue({ base: '200px', sm: '200px', md: '200px', lg: '200px' });
    const fontSizeHeader = useBreakpointValue({ base: 'lg', sm: 'lg', md: 'lg', lg: 'xl', xl:'xl' });
    const fontSizeText = useBreakpointValue({ base: 'lg', sm: 'lg', md: 'lg', lg: 'lg', xl:'lg' });
  return (
   <Box>
        <Card w={cardWidth} h={cardHeight} border={0}>
            <CardBody  p={0}>
                <VStack align={'flex-start'} spacing={0}>
                    <Heading size={fontSizeHeader}>Sweet Avacado Bread</Heading>
                    <Text fontSize={fontSizeText}>Recently added by Honey Bakeries.</Text>
                </VStack>
                <HStack justify={'space-between'} mt={5}>
                    <Text fontSize={fontSizeText}>2hr 45min</Text>
                    <Text fontSize={fontSizeText}>Yield:12%</Text>
                </HStack>
            </CardBody>
        </Card>
   </Box>
  )
}

export default Recipedetailscard