import React, {FC} from 'react'
import { Button as MainButton, ButtonGroup, Box } from '@chakra-ui/react'

const Button:FC <{title:string, isLoading:boolean, colorScheme:string, size:string, width:string, types:any}> = ({title,isLoading,colorScheme, size, width, types}) => {
  return (
    <Box>
        <MainButton
        isLoading={isLoading}
        colorScheme={colorScheme}
        size={size}
        width={width}
        type={types}
        >{title}</MainButton>
    </Box>
  )
}

export {Button as Mainbutton}