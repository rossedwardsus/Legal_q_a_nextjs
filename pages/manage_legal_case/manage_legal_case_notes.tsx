import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../../styles/Home.module.css'
import { Textarea, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup, Select, Input } from '@chakra-ui/react'
import ResizeTextarea from "react-textarea-autosize";
import { useRef } from 'react';

const ManageLegalCaseNotes: NextPage = (props: any) => {

  const noteRef = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Link href="/manage_legal_case/notes">manage case notes</Link><Link href="/manage_legal_case/questions">manage case questions</Link>

        Notes
        <br/>
        <Textarea
          minH="unset"
          overflow="hidden"
          w="100%"
          resize="none"
          ref={noteRef}
          minRows={1}
          as={ResizeTextarea}
          {...props}
          name="question1"
        />
        <Button>Add Note</Button>
        <br/>
        Note added august 5, 2022, editted august 6th
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default ManageLegalCaseNotes
