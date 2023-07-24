import React, {FC} from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/signup.module.scss'


interface Imagetype {
    image:any
}

const ImageComp:FC<{ src:string, alt:string, width:any, height:any}> = ({ src, alt, width, height}) => {
  return (
   <Box>
       <Image
              // width={1000}
              // height={1000}
              src={src}
              alt='no'
              className={styles['signup-image']}
              priority={true}
              width={width}
              height={height}
            />
   </Box>
  )
}

export default ImageComp