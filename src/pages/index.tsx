import Image from 'next/image'
import { Inter } from 'next/font/google';
import NavBar from './AppBar';
import HeroSectiopn from './herosection';
import ChooseUs from './choseus';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <NavBar />
      <HeroSectiopn />
      <ChooseUs />

    </div>
  )
}
