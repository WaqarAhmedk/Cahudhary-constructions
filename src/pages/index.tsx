import Image from 'next/image'
import { Inter } from 'next/font/google';
import NavBar from './AppBar';
import HeroSectiopn from './herosection';
import ChooseUs from './choseus';
import OurServices from './ourservices';
import Projects from './projects';
import VideoSection from './videosection';
import Footer from './footer';
import { useRef } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const aboutref = useRef<HTMLInputElement>(null);
  const projectsref = useRef<HTMLInputElement>(null);
  const featuresref = useRef<HTMLInputElement>(null);
  const servicesref = useRef<HTMLInputElement>(null);


  const ScrolltoView = (element: string) => {

    if (element === 'projects') {
      projectsref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else if (element === 'features') {
      featuresref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else if (element === 'services') {
      servicesref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    } else if (element === 'projects') {
      projectsref.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }

  }






  return (
    <div className=''>
      <NavBar ScrolltoView={ScrolltoView} />
      <HeroSectiopn />
      <ChooseUs featuresref={featuresref} />
      <OurServices servicesref={servicesref} />
      <Projects projectsref={projectsref} />
      <VideoSection />
      <Footer />


    </div>
  )
}
