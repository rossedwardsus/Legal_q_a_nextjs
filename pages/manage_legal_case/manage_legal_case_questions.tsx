import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Textarea, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup, Select, Input } from '@chakra-ui/react'
import ResizeTextarea from "react-textarea-autosize";
import { useRef } from 'react';

const ManageLegalCaseQuestions: NextPage = (props: any) => {

  const questionRef = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Manage my case
        <br/>
        <br/>
        Questions
        <br/>
        <Textarea
          minH="unset"
          overflow="hidden"
          w="100%"
          resize="none"
          ref={questionRef}
          minRows={1}
          as={ResizeTextarea}
          {...props}
          name="question"
        />
        <Button>Add Question</Button>
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

export default ManageLegalCaseQuestions
