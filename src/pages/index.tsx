import React, {useState} from 'react'
import { Box, Grid, GridItem, Text, Flex, HStack, VStack, Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputRightElement, IconButton, InputGroup
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react';
import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';
import styles from '../styles/signup.module.scss'
import {Mainbutton} from '../components/Button'
import Link from 'next/link'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ImageComp from '@/components/ImageComp';
 import Image1 from '../assets/bread-toasted.jpg'
 import Image2 from '../assets/duminda-perera-zYsB2mezSnA-unsplash.jpg'
 import Image from 'next/image'
 import { useToast } from '@chakra-ui/react'
 import { useRouter } from 'next/router';
import Auth from '../Layouts/Auth';

function Index() {


    const [isLoading, setIsloading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)')
    const router = useRouter()
    const toast = useToast()


    type Formvalues = {
      username:string,
      email:string,
      password:any
    }

   

    const formik = useFormik<Formvalues>({
      initialValues: {
        username:'',
        email:'',
        password:''
      },
      onSubmit: (values) => {
        setIsloading(true)
        setTimeout(()=>{
          setIsloading(false)
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          router.push('/login/Loginpage')
        },4000)
      
      
      },
      validationSchema: Yup.object({
        username:Yup.string().required('Username is required'),
        email: Yup.string().email("Invalid Email").required('Email is required'),
        password:Yup.string().min(8,'Password must be at least 8 characters').max(15, 'Password must not be more than 15 characters').required('Password is required').matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          'Must contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character')
      }),
    });
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
  

  return (
          <Auth>
            <Box>
                <VStack  mx={10} align={'self-start'}>
                 <Heading  className='auth' as="h2" size={'2xl'} id="contactme-section" color={'black'} fontWeight={'400'} >Create Account
                 </Heading>
                  <Text className={styles['signup-header2']}>Become a bread winner in just a click. Find,save and use free recipes.</Text>
                  <form onSubmit={formik.handleSubmit}>
                  <FormControl isInvalid={!!formik.errors.username && formik.touched.username} my={6}>
                    <FormLabel htmlFor="text">Username</FormLabel>
                    <Input
                      id="username"
                      name ="username"
                      className={styles['signup-input']}
                      placeholder='Enter username'
                      {...formik.getFieldProps('username')}
                    />
                      <FormErrorMessage color={'red'}>{formik.errors.username}</FormErrorMessage>
                    
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.email && formik.touched.email} my={6}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      name ="email"
                      className={styles['signup-input']}
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
                      name ="password"
                      className={styles['signup-input']}
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
                  <Text my={2}>By clicking on create account, you agree to our<Link href='/'> <span  className={styles['span-links']}>Privacy Policies</span></Link> and <Link href='/'><span  className={styles['span-links']}>Use of Terms</span></Link></Text>
                 <Mainbutton title={'Create Account'} isLoading={isLoading}  colorScheme='orange' size='lg'  width="full" types ='submit'></Mainbutton>
                  </form>   
                </VStack>
                <Text className={styles['already']}>Already have an account? <Link href='/login/Loginpage'><span className={styles['span-links']} color='#4299E1'>Sign in</span></Link> </Text>
            </Box>
        </Auth>
  )
}

export default Index


// const passwordHandler = (value:string) => {
//   console.log(value);
// }

// const emailHandler = (value:string) => {
// console.log(value);
// }
{/* <Textinput label={'Email'} type='email' onValue={emailHandler}/>
                <Textinput label={'Password'} type='password' onValue={passwordHandler}/> */}