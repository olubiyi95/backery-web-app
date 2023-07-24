import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import image1 from '@/assets/bite-size-flat-bread.jpg';
import image2 from '@/assets/bread-toasted.jpg';
import image3 from '@/assets/buttered-toast-on-cutting-board.jpg';
import image4 from '@/assets/duminda-perera-zYsB2mezSnA-unsplash.jpg';
import image5 from '@/assets/fresh-bread-and-jam.jpg';
import image6 from '@/assets/sliced-rye-bread.jpg';
import { StaticImageData } from 'next/image';
import { useBreakpointValue, VStack, Text, Box, Heading } from '@chakra-ui/react'
import Carousel from '@/components/Carousel';
import Recipedetailscard from '@/components/Recipedetailscard';

const RecipeDetailspage = () => {

  const imageWidth = useBreakpointValue({ base: '320px', sm: '320px', md: '300px', lg: '100%' });
  const fontSizeHeader = useBreakpointValue({ base: 'lg', sm: 'lg', md: 'lg', lg: 'xl', xl:'xl' });
  const fontSizeText = useBreakpointValue({ base: 'lg', sm: 'lg', md: 'lg', lg: 'lg', xl:'lg' });

interface Imagetype {
  id:number
  image:StaticImageData
}

  const contentStyle: React.CSSProperties = {
    height: '350px',
   width:'450px'
  };

  const router = useRouter()

  interface Headerprops {
    heading:string
    buttontext:string
    navigate:Navigate
}

type Navigate = () => void

const nextpage:Navigate = () => {
router.push('/recipes/AddRecipepage')
}

const headersprops:Headerprops = {
  heading:'Recipe Details',
  buttontext:'Favourite',
  navigate:nextpage
}
interface imagestyle {
  width:any,
  height:string,
  //borderRadius:string,
  backgroundPosition:string
}

const imageStyle:imagestyle = {
  width: imageWidth,
   height:'100%',
  //borderRadius:'5.5%  0 0 5.5%',
  backgroundPosition:'cover'
}

const images:Imagetype[] = [
  { id:1,
    image:image1
  },
  {
    id:2,
    image:image2
  },
  {
    id:3,
    image:image3
  },
  {
    id:4,
    image:image4
  },
  {
    id:5,
    image:image5
  },
  {
    id:6,
    image:image6
  }
]

  return (
    <div>
      <DashboardLayout>
       <Header heading={headersprops.heading} buttontext={headersprops.buttontext} navigate={headersprops.navigate}/>
        <Carousel images={images} />
        <VStack mt={20} w={'100%'} align={'flex-start'} spacing={10}>
          <Recipedetailscard />
          <Box textAlign="left">
            <Heading size={fontSizeHeader}>Ingredients</Heading>
            <Text fontSize={fontSizeText}>10.0 oz of flour</Text>
            <Text fontSize={fontSizeText}>1.5ml 0f warm water</Text>
            <Text fontSize={fontSizeText}>1 table spoon instant of active dry yeast</Text>
            <Text fontSize={fontSizeText}>1 tea spoon of salt</Text>
            <Text fontSize={fontSizeText}>Avocado fruit</Text>
            <Text fontSize={fontSizeText}>1 table spoon instant of active dry yeast</Text>
            <Text fontSize={fontSizeText}>10.0 oz of flour</Text>
          </Box>
          <Box textAlign="left">
            <Heading size={fontSizeHeader}>Instructions</Heading>
            <Text textAlign="left" fontSize={fontSizeText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus nulla! Beatae laudantium nam consequuntur ea maxime quam odit aliquam veritatis nobis error consequatur, nisi harum! Unde quod eos a.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minus nulla! Beatae laudantium nam consequuntur ea maxime quam odit aliquam veritatis nobis error consequatur, nisi harum! Unde quod eos a.</Text>
          </Box>
        </VStack>
      </DashboardLayout>
    </div>
  )
}

export default RecipeDetailspage