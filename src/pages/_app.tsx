import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Roboto } from 'next/font/google';
import '../styles/global.scss';
import { extendTheme } from '@chakra-ui/react';
import styled from "@emotion/styled";
import { Rubik } from 'next/font/google';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import NextNProgress from 'nextjs-progressbar';


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
})

const rubik = Rubik({ subsets: ['latin'] });


const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`,
    heading: `'Open Sans', sans-serif`,
  },
})



const _app: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      {/* <style jsx global>
        {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
      </style> */}
      <NextNProgress color='#fe9500' />
      <ChakraProvider toastOptions={{ defaultOptions: { position: 'top' } }} theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>

  )
}

export default _app