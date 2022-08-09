import type { NextPage } from 'next'
import { Textarea, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import ResizeTextarea from "react-textarea-autosize";

import bodyParser from "body-parser";
import util from "util";
import axios from "axios";

const { MongoClient } = require("mongodb");


const getBody = util.promisify(bodyParser.urlencoded());


const Question: NextPage = () => {

  const router = useRouter()
  const { questionId } = router.query

  return (
      <>
        <div className={styles.container}>
          <Head>
            <title>Question</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            Seo
            <br/>
            <h5>Title-involved in car accident{questionId}</h5>
            <br/>
            Date asked-july 26th, 2022
            <br/>
            <Link href="/users">User-ross</Link>
            <br/>
            message user
            <br/>
            Categories-car accident-witness
            <br/>
            Location specific to question-ca/la
            <br/>
            <br/>
            Question
            <br/>
            <Text></Text>
            <br/>
            <br/>
            answer count
            <br/>
            <Link href="/add_question_answer">
              <a>Add answer</a>
            </Link>
            <br/>
            Anwsers
            <br/>
            reply to answer
            <br/>
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
      </>
  )
}

export const getServerSideProps = async ({ req, res }: any) => {

  const uri = "mongodb://localhost:27017?retryWrites=true&writeConcern=majority";
  const client = new MongoClient(uri);

    try {
      const database = client.db('test_databasex');
      const movies = database.collection('test_collection');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: "Record of a Shriveled Datum" };
      const movie = await movies.findOne(query);
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

    //const router = useRouter(); 

    await getBody(req, res);
    console.log("email" + JSON.stringify(req.body["email"]));

    //router.push("/homepage");

    //return {
    //  redirect: {
    //    permanent: false,
    //    destination: `/homepage`
    //  },
    //};

    //check db for email and password
    //if error then redirect bac
    //else go to homepage
    //router.push("/homepage");

    /*try {
      const response = await axios.get(
        `https://api.example.com/getHomeSection?title=Section 1`
      );
      
      return {
        props: {
          show: response.data,
        },
      };
    } catch (error) {
      return {
        props: {
          error: error.error,
        },
      };
    }*/

    return {props: {}};

};



export default Question
