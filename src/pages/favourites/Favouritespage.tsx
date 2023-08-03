import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Box, Flex, Heading, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import image1 from '@/assets/bite-size-flat-bread.jpg';
import image2 from '@/assets/bread-toasted.jpg';
import image3 from '@/assets/buttered-toast-on-cutting-board.jpg';
import image4 from '@/assets/duminda-perera-zYsB2mezSnA-unsplash.jpg'
import image5 from '@/assets/fresh-bread-and-jam.jpg';
import image6 from '@/assets/sliced-rye-bread.jpg';
import image7 from '@/assets/shrimp-lunch-dish.jpg';
import image8 from '@/assets/slice-of-bread-toasted.jpg';
import { StaticImageData } from 'next/image';
import Categoriescard from '@/components/Categoriescard';
import SkeletonComp from '@/components/SkeletonComp';
import Spincomp from '@/components/Spincomp';

const Favouritespage = () => {

    const [loading, setLoading] = useState(true);
    const [isLargerThan600] = useMediaQuery('(min-width: 992px)')
    const columnCount = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 2, xl: 4 });

    interface Categorytype {
        id: number,
        image: StaticImageData,
        name: string,
        description: string,
        link: string,
        linktext: string
    }

    const categories: Categorytype[] = [
        {
            id: 1,
            image: image1,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 2,
            image: image2,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 3,
            image: image3,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 4,
            image: image4,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 5,
            image: image5,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 6,
            image: image6,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 7,
            image: image7,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 8,
            image: image8,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 9,
            image: image1,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 10,
            image: image2,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 11,
            image: image3,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 12,
            image: image4,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 13,
            image: image6,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 14,
            image: image6,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 15,
            image: image7,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        },
        {
            id: 16,
            image: image8,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: '/recipes/RecipeDetailspage',
            linktext: 'Go to recipe'
        }
    ]

    const delaySkel = () => {
        // setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        delaySkel()
    }, [])





    return (
        <DashboardLayout>
            <Box>
                <Flex align={'flex-start'}>
                    <Heading>Favourite</Heading>
                </Flex>
                {loading ? <Spincomp spinning={loading} /> :
                    <Box
                        display={'grid'}
                        gridTemplateColumns={`repeat(${columnCount}, 1fr)`}
                        gridGap={5}
                        gap={10}
                    >
                        {categories.map(item => (
                            <Categoriescard key={item.id} image={item.image} title={item.name} description={item.description} link={item.link} linktext={item.linktext} />
                        ))}
                    </Box>
                }
            </Box>
        </DashboardLayout>
    )
}

export default Favouritespage