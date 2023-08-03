import React from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Box, Flex, Heading, useBreakpointValue, useMediaQuery, List, ListIcon, ListItem, HStack, Text, Center, UnorderedList, VStack } from '@chakra-ui/react';
import { UserOutlined } from '@ant-design/icons';
import { LiaUserSolid } from 'react-icons/lia';
import { AiOutlineLogout } from 'react-icons/ai';



const Settingspage = () => {

    const settingsArray = [

    ]

    return (
        <>
            <DashboardLayout>
                <Box>
                    <Flex align={'flex-start'}>
                        <Heading>
                            Settings
                        </Heading>
                    </Flex>
                    <Box display={'flex'} justifyItems={'flex-start'} alignItems={'center'}>
                        <VStack spacing={5}>
                            <HStack spacing={8} justifyContent={'center'} alignItems={'center'}>
                                <Box height={'50px'} width={'50px'} borderRadius={'50px'} backgroundColor={'orange.400'} className='settings-profile' display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <LiaUserSolid size={24} fill='white' />
                                </Box>
                                <Center>
                                    <Text fontSize={'2xl'} mb={0} fontWeight={'500'} >Profile</Text>
                                </Center>
                            </HStack>
                            <HStack spacing={8} justifyContent={'center'} alignItems={'center'}>
                                <Box height={'50px'} width={'50px'} borderRadius={'50px'} backgroundColor={'orange.400'} className='settings-profile' display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                    <AiOutlineLogout size={24} fill='white' />
                                </Box>
                                <Center>
                                    <Text fontSize={'2xl'} mb={0} fontWeight={'500'} >Logout</Text>
                                </Center>
                            </HStack>
                        </VStack>
                    </Box>
                </Box>
            </DashboardLayout>
        </>
    )
}

export default Settingspage