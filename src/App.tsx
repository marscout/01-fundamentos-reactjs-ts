import {IPost, Post} from './Components/Post'
import './global.css'
import { Header } from './Components/Header'

import styles from './app.module.css'
import { Sidebar } from './Components/Sidebar'

const posts : IPost[] =[
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content:[
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: '👉 jane.design/doctorcare'
      }              
    ],
    publishedAt: new Date('2023-11-2 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl:'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content:[
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: '👉 jane.design/doctorcare'
      }              
    ],
    publishedAt: new Date('2022-11-5 20:00:00')
  }
]

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
         {
          posts.map(post =>{
             return (
             <Post 
              key={post.id}
              post={post}
             />
             )
          })
         }
        </main>
      </div>
    </>
  )
}
