import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard,Categories,PostWidget, Header} from "../components/index.js"

const posts=[
  {title:"Learn React",excerpt:"Learn React Excerpt"},
  {title:"Learn NextJS",excerpt:"Learn NextJS Excerpt"}
]
const Home: NextPage = () => {
  return (
    /* ----------------- Container Start------------ */
    <div className="container mx-auto px-10 mb-10 bg-gray-100">
      <Head>
        <title>Blog Akın</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      {/* ----------- loop posts Start--------------- */}
    <div className='grid grid-cols-2 lg:grid-cols-12 gap-8 '>
      <div className="lg:col-span-8 lg-col-span-1 bg-blue-200">
         {posts.map((post)=>(<PostCard post={post} key={post.title}/>))}
      </div>
     {/* ------------Categories---------------- */}
      <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 bg-red-200">
          <PostWidget />
          <Categories />
          </div>
      </div>
    </div>
       {/* ----------- loop posts End--------------- */}
    </div>
    /* ----------------- Container End ------------ */
  )
}

export default Home
