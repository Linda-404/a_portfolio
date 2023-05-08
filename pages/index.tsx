
import Head from '@/components/Head';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

import Image from 'next/image';
import FrontImg from '@/public/images/sitting_design.png';

import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
    <Head title='home' />
    <header>

      <div>
        <h4>Linda Nilsson</h4>
        {/* <FontAwesomeIcon style={{fontSize:"80px"}} icon={faArrowRight} className='header_icon'></FontAwesomeIcon> */}
      </div>

      <div>
        <nav>
            <Link href="about">about</Link>
            <Link href="projects">projects</Link>
            <Link href="contact">contact</Link>
        </nav>  
      </div>
      
    </header>

      <main>
        <div className='index_content'>
          <h1 className='index_h1'>
            webdesign/
            <span>uiux</span>
            /creative/
            <span>brand</span>
            /logo/
            <span>webdesign</span>
            /uiux/
            <span>creative</span>
            /brand/
            <span>logo</span>
            /webdesign/
            <span>uiux</span>
            /creative/
            <span>brand</span>
            /logo/
            <span>webdesign</span>
            /uiux/
            <span>creative</span>
            /brand/
            <span>logo</span>
          </h1>
          <div className='container_front_img'>
            <Image src={FrontImg} alt="girl sitting with laptop"/>
          </div>
        </div>    
      </main>
      <Footer />
    </>
  )
}
