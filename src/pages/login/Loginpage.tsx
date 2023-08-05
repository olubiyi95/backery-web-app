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
import { useMediaQuery } from '@chakra-ui/react';
import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';
import styles from '../../styles/login.module.scss'
import { Mainbutton } from "@/components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link'
import Image1 from '../../assets/bread-toasted.jpg'
import Image2 from '../../assets/duminda-perera-zYsB2mezSnA-unsplash.jpg'
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react'
import Auth from "@/Layouts/Auth";

const Loginpage = () => {

  const [isLoading1, setIsloading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const router = useRouter();
  const toast = useToast();


  type Formvalues = {
    email: string,
    password: any
  }



  const formik = useFormik<Formvalues>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      setIsloading(true)

      setTimeout(() => {
        setIsloading(false)
        router.push('/categories/Categoriespage')
        toast({
          title: 'Logged In.',
          description: "You have logged ib successfully.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })

      }, 3000)


    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').max(15, 'Password must not be more than 15 characters').required('Password is required').matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        'Must contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character')
    }),
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <Auth>
      <Box >
        <VStack mx={10} align={'self-start'}>
          <Heading as="h2" size={'2xl'} id="contactme-section" color={'black'} className={styles['login-header']} fontWeight={'400'} >Login</Heading>
          <Text className={styles['login-header2']}>Enter your email and password to login to your account.</Text>
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
            <FormControl isInvalid={!!formik.errors.password && formik.touched.password} my={6}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className={styles['login-input']}
                  placeholder='Enter password'
                  pr="4.5rem"
                  {...formik.getFieldProps('password')}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    onClick={handleTogglePassword}
                    h="1.75rem"
                    size="sm"
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage color={'red'}>{formik.errors.password}</FormErrorMessage>

            </FormControl>
            <Mainbutton title={'Login'} isLoading={isLoading1} colorScheme='orange' size='lg' width="full" types='submit'></Mainbutton>
          </form>
        </VStack>
        <Text className={styles['already']}>Don&#39;t have an account? <Link href='/'><span className={styles['span-links']} color='#4299E1'>Sign up</span></Link> </Text>
      </Box>
    </Auth>
  )
}

export default Loginpage