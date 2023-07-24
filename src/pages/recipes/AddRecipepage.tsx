import React, { useState } from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import Header from '@/components/Header'
import { useRouter } from 'next/router';
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
import { Mainbutton } from '@/components/Button';
import * as Yup from 'yup';
import { useFormik, validateYupSchema } from "formik";
import { useToast } from '@chakra-ui/react'

const AddRecipepage = () => {

  const [isLoading1, setIsloading] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [breadname, setBreadname] = useState<string>('');
  // const [ingredientlist, setIngredientlist] = useState<Ingredientlist>({ ingredient: '', serving: '', unit: '' });
  const [showingredient, seShowingredient] = useState<Ingredientlist[]>([]);
  const toast = useToast();
  const boxWidth = useBreakpointValue({ base: '350px', sm: '350px', md: '400px', lg: '400px' });
  const selectinputWidth = useBreakpointValue({ base: '250px', sm: '250px', md: '300px', lg: '300px' });
  const selectWidth = useBreakpointValue({ base: '100px', sm: '100px', md: '100px', lg: '100px' });
  const topboxWidth = useBreakpointValue({ base: '90vw', sm: '90vw', md: '90vw', lg: '50vw' });
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  interface Ingredientlist {
    ingredient: string
    serving: string
    unit: string
  };

  const formik = useFormik<Ingredientlist>({
    initialValues: {
      ingredient: '',
      serving: '',
      unit: ''
    },
    onSubmit: (values, { resetForm }) => {
      const newValues: Ingredientlist[] = values
      seShowingredient(prevState => [...prevState, newValues])
      resetForm();

    },
    validationSchema: Yup.object({
      ingredient: Yup.string().required('Ingredient is required'),
      serving: Yup.string().required('serving is required'),
      unit: Yup.string().required('unit is required')
    })
  });



  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

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
        getBase64(info.file.originFileObj, (url) => {
          setPreviewImage(url);
          setPreviewVisible(true);
        });
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };



  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const deleteItem = (itemtodelete: string) => {
    seShowingredient(prevState => prevState.filter(obj => obj.ingredient !== itemtodelete))
  }


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
            <FormControl>
              <FormLabel>Add Bread Name</FormLabel>
              <Input type='text'
                name='breadname'
                _focus={{ border: "none" }}
                border={'1px solid #aaa'}
                focusBorderColor="none"
                placeholder={'Enter bread name'}
              />
            </FormControl>
            <form onSubmit={formik.handleSubmit}>
              <Box width={boxWidth}>
                <FormControl>
                  <FormLabel>Ingredient</FormLabel>
                  <Input type='text'
                    name='ingredient'
                    _focus={{ border: "none" }}
                    border={'1px solid #aaa'}
                    focusBorderColor="none"
                    placeholder={'Enter ingredient'}
                    {...formik.getFieldProps('ingredient')}
                  />
                </FormControl>
                <FormControl mt={10}>
                  <FormLabel>Maximum Serving Size</FormLabel>
                  <HStack spacing={0} w={'400px'}>
                    <Input placeholder="Enter maximum serving"
                      name='serving'
                      width={selectinputWidth}
                      _focus={{ border: "none" }}
                      border={'1px solid #aaa'}
                      focusBorderColor="none"
                      {...formik.getFieldProps('serving')}
                    />
                    <Select placeholder="unit"
                      name='unit'
                      w={selectWidth}
                      defaultValue='unit'
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
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={UnorderedListOutlined} color='green.500' />
                        {item.ingredient} {item.serving} {item.unit}
                      </ListItem>
                    </List>
                    {/* <li>{item.ingredient} {item.serving} {item.unit}</li> */}
                    <IconButton aria-label='delete' size={'md'} colorScheme='red' icon={<DeleteOutlined />} onClick={() => deleteItem(item.ingredient)} />
                  </HStack>
                </ul>
              </Box>
            ))}
            <FormLabel>Recipe Notes</FormLabel>
            <Textarea
              placeholder='Enter recipe notes'
              _focus={{ border: "none" }}
              border={'1px solid #aaa'}
              focusBorderColor="none"
            />
            <Mainbutton title={'Save'} isLoading={isLoading1} colorScheme='orange' size='lg' width={isLargerThan768 ? '400px' : '350px'} types='submit' />
          </VStack>
        </Box>

      </DashboardLayout>
    </div>
  )
}

export default AddRecipepage