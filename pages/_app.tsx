import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ThemeProvider, theme, Grid, GridItem, Link } from '@chakra-ui/react'
//import { Link } from '@chakra-ui/core'
//import { ThemeProvider, theme } from '@chakra-ui/core';

function MyApp({ Component, pageProps }: any) {
  return(
    <ChakraProvider theme={theme}>
      <Grid 
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`} gap={0}
          gridTemplateRows={'55px 1fr 300px'}
          gridTemplateColumns={'150px 1fr'}        
                  >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          -Browse questions-edit profile-tags
          <br/>
          <Grid templateColumns='repeat(5, 1fr)' gap={1}>
            <GridItem w='100%' h='8' bg='blue.500'><Link href="/ask_question">Ask a question</Link></GridItem>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
          </Grid>
        </GridItem>
        <GridItem area={'nav'} bg='tomato'>
          Welcome to legalq+a
          <br/>
          tags
          <br/>
          Most recent questions
          <br/>
          Most recent answers
        </GridItem>
        <GridItem area={'main'}><Component {...pageProps} /></GridItem>
      </Grid>
    </ChakraProvider>
  )
}

export default MyApp
