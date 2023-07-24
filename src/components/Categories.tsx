import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useBreakpointValue } from '@chakra-ui/react'
import styles from '../styles/categories.module.scss'
import image1 from '../assets/bite-size-flat-bread.jpg';
import image2 from '../assets/bread-toasted.jpg';
import image3 from '../assets/buttered-toast-on-cutting-board.jpg';
import image4 from '../assets/duminda-perera-zYsB2mezSnA-unsplash.jpg'
import image5 from '../assets/fresh-bread-and-jam.jpg';
import image6 from '../assets/sliced-rye-bread.jpg';
import image7 from '../assets/shrimp-lunch-dish.jpg';
import image8 from '../assets/slice-of-bread-toasted.jpg';
import { StaticImageData } from 'next/image';
import { useMediaQuery } from '@chakra-ui/react';
import Categoriescard from './Categoriescard';
import SkeletonComp from './SkeletonComp';


const Categories = () => {

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
        <Box>
            <Tabs isFitted={true} isLazy={true} lazyBehavior='unmount' size='lg' variant='solid-rounded' colorScheme='orange' align='start' >
                <TabList>
                    <Tab className={styles['tabs']} _selected={{ color: 'white', bg: '#fe9500' }}>All</Tab>
                    <Tab className={styles['tabs']} _selected={{ color: 'white', bg: '#fe9500' }}>Breakfast</Tab>
                    <Tab className={styles['tabs']} _selected={{ color: 'white', bg: '#fe9500' }}>Lunch</Tab>
                    <Tab className={styles['tabs']} _selected={{ color: 'white', bg: '#fe9500' }}>Brunch</Tab>
                    <Tab className={styles['tabs']} _selected={{ color: 'white', bg: '#fe9500' }}>Dinner</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel mt={10}>
                        <SkeletonComp loading={loading} active >

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

                        </SkeletonComp>
                    </TabPanel>
                    {/* TAB2 */}
                    <TabPanel mt={10}>
                        <SkeletonComp loading={loading} active>

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

                        </SkeletonComp>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>four!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>five!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Categories