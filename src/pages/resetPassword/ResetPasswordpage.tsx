import { useState, useEffect } from "react";
import {
    Box, Grid, GridItem, Text, Flex, HStack, VStack, Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputRightElement, IconButton, InputGroup
} from '@chakra-ui/react';
import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react'
import Auth from "@/Layouts/Auth";
import styles from '../../styles/login.module.scss';
import { Mainbutton } from "@/components/Button";
import { useRouter } from 'next/router';
import Link from 'next/link';

const ResetPasswordpage = () => {

    const [isLoading1, setIsloading] = useState<boolean>(false);
    const toast = useToast();
    const router = useRouter();

    type Formvalues = {
        email: string,
    }



    const formik = useFormik<Formvalues>({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            setIsloading(true)

            setTimeout(() => {
                setIsloading(false)
                router.push('/login/Loginpage')
                toast({
                    title: 'sent.',
                    description: "A password reset link has been sent to your mail.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }, 3000)


        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid Email").required('Email is required'),
        }),
    });

    return (
        <div>
            <Auth>
                <Box >
                    <VStack mx={10} align={'self-start'}>
                        <Heading as="h2" size={'2xl'} id="contactme-section" color={'black'} className={styles['login-header']} fontWeight={'400'} >Reset Password</Heading>
                        <Text className={styles['login-header2']}>Enter your email to receive a link to reset your password.</Text>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email} my={6}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    className={styles['login-input']}
                                    placeholder='Enter email'
                                    {...formik.getFieldProps('email')}
                                />
                                <FormErrorMessage color={'red'}>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <Text>Already have an account?? <Link href='/login/Loginpage'><span className={styles['span-links']} color='#4299E1'>Login</span></Link></Text>
                            <Mainbutton title={'Send Mail'} isLoading={isLoading1} colorScheme='orange' size='lg' width="full" types='submit'></Mainbutton>
                        </form>
                    </VStack>
                </Box>
            </Auth>
        </div>
    )
}

export default ResetPasswordpage