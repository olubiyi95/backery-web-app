import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import image1 from '@/assets/bite-size-flat-bread.jpg';
import image2 from '@/assets/bread-toasted.jpg';
import image3 from '@/assets/buttered-toast-on-cutting-board.jpg';
import image4 from '@/assets/duminda-perera-zYsB2mezSnA-unsplash.jpg'
import image5 from '@/assets/fresh-bread-and-jam.jpg';
import image6 from '@/assets/sliced-rye-bread.jpg';
import image7 from '@/assets/shrimp-lunch-dish.jpg';
import image8 from '@/assets/slice-of-bread-toasted.jpg';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import Recipescard from '@/components/Recipescard';
import { StaticImageData } from 'next/image';
import SkeletonComp from '@/components/SkeletonComp';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { useRouter } from 'next/router';
import Spincomp from '@/components/Spincomp';



const RecipesListpage = () => {

    const [loading, setLoading] = useState(true);
    const [isLargerThan600] = useMediaQuery('(min-width: 992px)')
    const columnCount = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 2, xl: 3 });
    const router = useRouter()

    interface Categorytype {
        id: number,
        image: StaticImageData,
        name: string,
        description: string,
        link: Navigate2,
        linktext: string
    }


    interface Headerprops {
        heading: string
        buttontext: string
        navigate: Navigate
    }

    type Navigate = () => void
    type Navigate2 = () => void

    const nextpage: Navigate = () => {
        router.push('/recipes/AddRecipepage')
    }

    const nextpage2: Navigate2 = () => {
        router.push('/recipes/RecipeDetailspage')
    }

    const delaySkel = () => {
        // setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        delaySkel()
    }, [])

    const categories: Categorytype[] = [
        {
            id: 1,
            image: image1,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 2,
            image: image2,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 3,
            image: image3,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 4,
            image: image4,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 5,
            image: image5,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 6,
            image: image6,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 7,
            image: image7,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 8,
            image: image8,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 9,
            image: image1,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 10,
            image: image2,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 11,
            image: image3,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 12,
            image: image4,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 13,
            image: image5,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 14,
            image: image6,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 15,
            image: image7,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        },
        {
            id: 16,
            image: image8,
            name: 'Hot Chocolate Bread',
            description: 'Get half your payment back today when you order from our store',
            link: nextpage2,
            linktext: 'View Recipe'
        }
    ]


    const headersprops: Headerprops = {
        heading: 'Recipe List',
        buttontext: 'Add Recipe',
        navigate: nextpage
    }

    return (
        <div>
            <DashboardLayout>
                <Header heading={headersprops.heading} buttontext={headersprops.buttontext} navigate={headersprops.navigate} />
                {/* <SkeletonComp loading={loading} active>
        </SkeletonComp> */}
                {loading ? <Spincomp spinning={loading} /> :
                    <Box
                        display={'grid'}
                        gridTemplateColumns={`repeat(${columnCount}, 1fr)`}
                        gridGap={10}
                        gap={20}
                    >
                        {categories.map(item => (
                            <Recipescard
                                key={item.id}
                                image={item.image}
                                title={item.name}
                                description={item.description}
                                link={item.link}
                                linktext={item.linktext}
                            />
                        ))}
                    </Box>
                }
            </DashboardLayout>
        </div>
    )
}

export default RecipesListpage