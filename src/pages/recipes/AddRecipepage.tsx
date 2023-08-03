import React, { useState } from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import Header from '@/components/Header'
import { message, Upload } from 'antd';
import { UploadOutlined, PlusCircleOutlined, DeleteOutlined, UnorderedListOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd'
import {
  Box, Button, IconButton, Text, Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack, Select, HStack, Textarea, List,
  ListItem,
  ListIcon, useBreakpointValue, useMediaQuery
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useFormik, validateYupSchema } from "formik";
import { useToast } from '@chakra-ui/react';
import { isEmpty } from 'lodash';



const AddRecipepage = () => {

  const [isLoading1, setIsloading] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [breadname, setBreadname] = useState<string>('');
  const [recipenote, setRecipenote] = useState<string>('');
  const [showingredient, setShowingredient] = useState<Ingredientlist[]>([]);
  const toast = useToast();
  const boxWidth = useBreakpointValue({ base: '350px', sm: '350px', md: '400px', lg: '400px' });
  const selectinputWidth = useBreakpointValue({ base: '250px', sm: '250px', md: '300px', lg: '300px' });
  const selectWidth = useBreakpointValue({ base: '100px', sm: '100px', md: '100px', lg: '100px' });
  const topboxWidth = useBreakpointValue({ base: '90vw', sm: '90vw', md: '90vw', lg: '50vw' });
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [error1, setError1] = useState<string>('');
  const [error2, setError2] = useState<string>('');
  const [error3, setError3] = useState<string>('');
  const [touched1, setTouched1] = useState<boolean>(false);
  const [touched2, setTouched2] = useState<boolean>(false);



  interface Ingredientlist {
    ingredient: string
    serving: string
    unit: string
  };

  interface Headerprops {
    heading: string
    buttontext: string
    navigate: Navigate
  };



  type Navigate = () => void;

  const nextpage: Navigate = () => {

  };

  const headersprops: Headerprops = {
    heading: 'Add Recipe',
    buttontext: 'Upload',
    navigate: nextpage
  };



  //TO ADD AN INGREDIENT
  const formik = useFormik<Ingredientlist>({
    initialValues: {
      ingredient: '',
      serving: '',
      unit: ''
    },
    onSubmit: (values, { resetForm }) => {
      const newValues: Ingredientlist[] = values
      setShowingredient((prevState) => ([...prevState, newValues]))
      toast({
        title: 'Added.',
        description: "Ingredient added successfully.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      resetForm();

    },
    validationSchema: Yup.object({
      ingredient: Yup.string().required('ingredient is required'),
      serving: Yup.string().required('serving is required'),
      unit: Yup.string().required('unit is required')
    })
  });


  //TO GET IMAGE URL
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  //IMAGE UPLOAD PROPERTIES
  const props: UploadProps = {
    name: 'file',
    action: '',
    listType: 'picture-card',
    maxCount: 1,
    accept: "image/png, image/jpeg",

    headers: {
      authorization: 'authorization-text',
    },

    onChange(info) {
      if (info.file.status !== 'uploading') {

      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file selected successfully`);
        getBase64(info.file.originFileObj, (url: string) => {
          setPreviewImage(url);
          setPreviewVisible(true);
        });
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  //TO CLOSE IMAGE PREVIEW
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  //TO DELETE AN INGREDIENT
  const deleteItem = (itemtodelete: string) => {
    setShowingredient(prevState => prevState.filter(obj => obj.ingredient !== itemtodelete))
    toast({
      title: 'deleted.',
      description: "In gredient was removed successfully.",
      status: "error",
      duration: 2000,
      isClosable: true,
    })
  }

  //TO VALIDATE BREADNAME 
  const validateBreadname = () => {
    if (!breadname.trim()) {

      setError1('breadname is required')
    } else {

      setError1('')
    }
  }

  //TO VALIDATE RECIPE NOTE
  const validateRecipeNote = () => {
    if (!recipenote.trim()) {
      setError2('recipe note is required');
    } else {
      setError2('');
    }
  }



  //TO GET INPUTTED RECIPE DETAILS
  const getRecipedetails = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    if (isEmpty(breadname || showingredient || recipenote || previewImage))
      toast({
        title: 'failed.',
        description: "Please fill the form.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    else if (isEmpty(breadname)) {
      setError1('breadname is required')
      toast({
        title: 'failed.',
        description: "Please add a bread name.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } else if (isEmpty(showingredient)) {
      setError3("add an ingredient")
      toast({
        title: 'failed.',
        description: "Please add an ingredient.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } else if (isEmpty(recipenote)) {
      setError2('recipe note is required')
      toast({
        title: 'failed.',
        description: "Please add a recipe note.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } else if (isEmpty(previewImage)) {
      toast({
        title: 'failed.',
        description: "Please add an image.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
    else if (!isEmpty(breadname && showingredient && recipenote && previewImage)) {
      const values = { breadname, showingredient, recipenote, previewImage };
      // alert(JSON.stringify(values));
      toast({
        title: 'success.',
        description: "recipe added.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setPreviewImage('')
      setBreadname('');
      setShowingredient([]);
      setRecipenote("");
      setPreviewVisible(false);
    }
  }

  //TO HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreadname(e.target.value)
    if (!isEmpty(breadname)) {
      setError1('')
    }
  }


  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRecipenote(e.target.value)
    if (!isEmpty(recipenote)) {
      setError2('')
    }
  }

  //TO HANDLE BLUR
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched1(true)
    validateBreadname()
  };

  const handleBlur2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTouched2(true);
    validateRecipeNote();
  }



  return (
    <div>
      <DashboardLayout>
        <Header heading={headersprops.heading} buttontext={headersprops.buttontext} navigate={headersprops.navigate} />
        {previewVisible ?
          <div>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}
              height={'50vh'}
              width={topboxWidth}
              borderRadius={'md'}
              shadow={'lg'}
              overflow={'hidden'}
              margin={'auto'}
            >
              <img src={previewImage} alt="Preview" style={{ width: topboxWidth, height: '50vh', backgroundPosition: 'center', backgroundSize: 'contain' }} />
            </Box>
            <Box my={10}>
              <Button onClick={handleCancel}>
                <Text color={'orange.400'} fontSize={'lg'}>Close Preview</Text>
              </Button>
            </Box>

          </div>
          :
          <Box>
            <Upload {...props}>
              <IconButton icon={<UploadOutlined />} aria-label='upload'>
              </IconButton>
            </Upload>
            <Flex direction="column" align="center" ml={2} height={'200px'}>
              <Text color={'orange.400'} fontSize={'lg'}>Upload Image</Text>
            </Flex>
          </Box>
        }
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={boxWidth}
          margin={'auto'}

        >
          <VStack spacing={10} align={'self-start'} justify={'flex-start'} width={boxWidth}>
            <FormControl isRequired={true} isInvalid={error1 && touched1}>
              <FormLabel>Add Bread Name</FormLabel>
              <Input type='text'
                name='breadname'
                value={breadname}
                _focus={{ border: "none" }}
                border={'1px solid #aaa'}
                focusBorderColor="none"
                placeholder={'Enter bread name'}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage color={'red'}>{error1}</FormErrorMessage>
              {/* {!!error1 && touched1 ? (<FormErrorMessage color={'red'}>{errors.breadname}</FormErrorMessage>) : ""} */}

            </FormControl>
            <form onSubmit={formik.handleSubmit}>
              <Box width={boxWidth}>
                <FormControl isInvalid={!!formik.errors.ingredient && formik.touched.ingredient} my={6} isRequired={true}>
                  <FormLabel>Ingredient</FormLabel>
                  <Input type='text'
                    name='ingredient'
                    _focus={{ border: "none" }}
                    border={'1px solid #aaa'}
                    focusBorderColor="none"
                    placeholder={'Enter ingredient'}
                    {...formik.getFieldProps('ingredient')}
                  />
                  <FormErrorMessage color={'red'}>{formik.errors.ingredient}</FormErrorMessage>
                </FormControl>
                <FormControl mt={10} isInvalid={!!formik.errors.serving && formik.touched.serving || formik.touched.unit && formik.errors.unit} isRequired={true}>
                  <FormLabel>Maximum Serving Size</FormLabel>
                  <HStack spacing={0} w={'400px'}>
                    <Input placeholder="Enter maximum serving"
                      name='serving'
                      width={selectinputWidth}
                      _focus={{ border: "none" }}
                      border={'1px solid #aaa'}
                      focusBorderColor="none"
                      type="number"
                      {...formik.getFieldProps('serving')}
                    />
                    <Select placeholder="unit"
                      name='unit'
                      w={selectWidth}
                      value='unit'
                      _focus={{ border: "none" }}
                      border={'1px solid #aaa'}
                      focusBorderColor="none"
                      {...formik.getFieldProps('unit')}
                    >
                      <option value="grams">grams</option>
                      <option value="ounce">ounce</option>
                      <option value="ml">ml</option>
                      <option value="litres">litres</option>
                    </Select>
                  </HStack>
                  <FormErrorMessage color={'red'}>{formik.errors.serving || formik.errors.unit}</FormErrorMessage>
                  {error3 && (<FormErrorMessage color={'red'}>{error3}</FormErrorMessage>)}
                </FormControl>
                <HStack justify={'start'}>
                  <Button leftIcon={<PlusCircleOutlined />} colorScheme="white" color={'orange.400'} type='submit'>
                    <Flex align="center">
                      Add Ingredient
                    </Flex>
                  </Button>
                </HStack>
              </Box>
            </form>
            {showingredient.map(item => (
              <Box key={item.ingredient} w={boxWidth}>
                <ul>
                  <HStack justify={'space-between'}>
                    <List spacing={0}>
                      <ListItem>
                        <ListIcon as={UnorderedListOutlined} color='green.500' />
                        {item.ingredient} {item.serving} {item.unit}
                      </ListItem>
                    </List>
                    <IconButton aria-label='delete' size={'md'} colorScheme='red' icon={<DeleteOutlined />} onClick={() => deleteItem(item.ingredient)} />
                  </HStack >
                </ul >
              </Box >
            ))}
            <FormControl isRequired={true} isInvalid={touched2 && error2}>
              <FormLabel>Recipe Notes</FormLabel>
              <Textarea
                placeholder='Enter recipe notes'
                value={recipenote}
                _focus={{ border: "none" }}
                border={'1px solid #aaa'}
                focusBorderColor="none"
                onChange={handleTextChange}
                onBlur={handleBlur2}
              />
              <FormErrorMessage color={'red'}>{error2}</FormErrorMessage>
            </FormControl>
            <Button isLoading={isLoading1} colorScheme='orange' size='lg' width={isLargerThan768 ? '400px' : '350px'} type='submit' onClick={getRecipedetails}>
              Save
            </Button>
          </VStack >
        </Box > *

      </DashboardLayout>
    </div>
  )
}

export default AddRecipepage




