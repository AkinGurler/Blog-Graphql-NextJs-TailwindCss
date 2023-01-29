
import Head from 'next/head'
import Image from 'next/image'
import {PostCard,Categories,PostWidget, Header} from "../components/index.js"
import {getPosts} from '../services'



export default function Home( {posts} ) {
  return (
    /* ----------------- Container Start------------ */
    <div className="container mx-auto px-10 mb-10 ">
      <Head>
        <title>Blog Akın</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      {/* ----------- Post-And-Categories-------------- */}
      {/* Normalde Postlar ve kategori kısmı aynı boyutta iki kolonken large devicelarda 12 lik bir bölünme yapılıp 8 e 4 olacak */}
    <div className='grid grid-cols-2 lg:grid-cols-12 gap-8 '>
      {/* ---------Posts----------- */}
      <div className="lg:col-span-8 col-span-1 bg-blue-200">
         {posts.map((post)=>(<PostCard post={post.node} key={post.title}/>))}
      </div>
      {/* ---------Posts--End--------- */}
     {/* ------------Categories---------------- */}
      <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 bg-red-200">
          <PostWidget />
          <Categories />
          </div>
      </div>
      {/* ------------Categories-END------------- */}
    </div>
       {/* ----------- Post-And-Categories------------- */}
    </div>
    /* ----------------- Container End ------------ */
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
