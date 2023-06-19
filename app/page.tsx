import Posts from './components/Posts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
      <span className='whitespace-nowrap'>
        I am <span className='font-bold'>Clay</span>!
      </span>
      </p>
      <Posts />

    </main>

  )
}
