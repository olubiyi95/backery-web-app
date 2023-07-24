import React, {FC} from 'react'
import {Box, FormControl,FormErrorMessage,FormLabel,Input, VStack, Button} from "@chakra-ui/react";




const Textinput: FC<{label:string,  type?:string, onValue: (e:any) => void}> =({label,type = 'text', onValue}) => {
    type Inputs = {
        email:string,
        password: string
    }
   const onSubmit = () => {}

const inputHandler = (e:any) => {
  onValue(e.target.value)
}

  return (
    <VStack spacing={6}>
       
          <FormControl>
              <FormLabel>{label}</FormLabel>
              <Input type={type}
              onChange={inputHandler}
              />
          </FormControl>
      
    </VStack>
  )
}

export default Textinput