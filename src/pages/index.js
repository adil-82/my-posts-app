import Head from 'next/head'
import Bio from '../components/Bio/Bio'
import Post from '../components/Post'
import PostForm from '../components/PostForm/PostForm'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          My Post !
        </h1> */}

         <Bio
          headshot="https://media-exp1.licdn.com/dms/image/C4D03AQGrTSPVEe32WQ/profile-displayphoto-shrink_200_200/0/1516958246668?e=1622678400&v=beta&t=larGvSA7oCXX8DqJfmjr45pS5oSaULKgM6vhXxuc0cE"
          name="Adil Bouaddi"
          tagline="Helping others learn by doing"
          role="Devolope Account Management"
        />  

        <ul className={styles.post}> 
          <li>
            <Post 
              content="hey I'm a new post" 
              date='21/03/2021'
            />
          </li>
          <li>
            <Post 
              content="I’m working in Figma to design a new website that show all my tweets !" 
              date='21/03/2021'
            />
          </li>
          <li>
          <Post 
              content="I’m working in Figma to design a new website that show all my tweets !" 
              date='21/03/2021'
            />
          </li>
          <li>
          <Post 
              content="I’m working in Figma to design a new website that show all my tweets !" 
              date='21/03/2021'
            />
          </li>
        </ul>

        <PostForm />
      
       {/* <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}> Add new post </button>
      </form> */}
      </main>
    </div>
  )
}
