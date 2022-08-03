import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import bodyParser from "body-parser";
import util from "util";

const getBody = util.promisify(bodyParser.urlencoded());


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        original question
        <br/>
        answer<textarea></textarea>
        <br/>
        <button>Submit answer</button>
        
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

export const getServerSideProps = async ({ req, res }: any) => {

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


export default Home