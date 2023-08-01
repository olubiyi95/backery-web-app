import React, { useState } from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormControl, FormLabel, Input, Box, HStack, VStack, useBreakpointValue, useMediaQuery, FormErrorMessage } from "@chakra-ui/react";




const Recipeform = () => {


    const [isValid, setIsValid] = useState<boolean>(true);
    const [dirty, setDirty] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const boxWidth = useBreakpointValue({ base: '350px', sm: '350px', md: '400px', lg: '400px' });




    type Ingredientlist = {
        ingredient: string
        serving: string
        unit: string
    }


    type Formprops = {
        breadname: string
        ingredientlist: Ingredientlist[]
        recipenote: string
    }

    const initialValues: Formprops = {

        breadname: '',
        ingredientlist: [{ ingredient: '', serving: '', unit: '' }],
        recipenote: ''
    }

    const validationSchema: Yup.Schema<Formprops> = Yup.object().shape({
        breadname: Yup.string().required("bread name is required"),
        ingredientlist: Yup.array().of(
            Yup.object().shape({
                ingredient: Yup.string().required('ingredient is required'),
                serving: Yup.number().required('serving is required'),
                unit: Yup.string().required("unit is required")
            })
        ),
        recipenote: Yup.string().required('recipe note is required')
    });


    const onSubmit = (values, { setIsSubmitting }) => {

    }




    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            width={boxWidth}
            margin={'auto'}
        >
            <Form>
                <VStack>

                </VStack>
            </Form>

        </Box>
    )
}

export default Recipeform




// {({ push, remove }) => (
//     <>
//         {values.ingredientlist.map((item, index) => (
//             <Box key={index}
//                 width={boxWidth}
//             >
//                 <FormControl isRequired={true} isInvalid={!isValid}>
//                     <FormLabel>Ingredient</FormLabel>
//                     <Input
//                         type='text'
//                         //name={`${item.ingredient}`}
//                         name={`ingredientlist.${index}.ingredient`}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         _focus={{ border: "none" }}
//                         border={'1px solid #aaa'}
//                         focusBorderColor="none"
//                     />
//                     {/* <ErrorMessage name={`ingredientlist.${index}.ingredient`} component="div" /> */}
//                     {<FormErrorMessage color={'red'}>{`ingredientlist.${index}.ingredient`}</FormErrorMessage>}``
//                 </FormControl>
//             </Box>
//         ))}
//     </>
// )}