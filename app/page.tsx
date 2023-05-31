import { Chevron } from '@/components/icons'
import { Clients, Works } from '../components/';

export default function Home() {
  return (
    <div className='bg-black min-h-screen text-neutral-1'>
      <main
        className="xl:container mx-auto px-8">
        <section id='home' className='h-screen flex justify-between flex-col'>
          <header
            className='flex justify-between py-2'
          >
            <h1>Logo </h1>
            <nav
              className='flex justify-between'
            >
              <button className='px-4 uppercase'>Home</button>
              <button className='px-4 uppercase'>Work</button>
              <button className='px-4 uppercase'>About  </button>
            </nav>
          </header>
          <div className='w-9/12 mx-auto'>
            <h1
              className='text-6xl font-light text-neutral-2 text-center leading-tight'
            >I'm a designer specialising in <span className='font-medium text-neutral-1'>UI/UX</span> and <span className='font-medium text-neutral-1'>Interaction Design</span></h1>
          </div>
          <div className='mx-auto mb-10'>
            <Chevron/>
          </div>
        </section>
        <Clients/>
        <Works/>
        
        
      </main>
    </div>
  )
}
