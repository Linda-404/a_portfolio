import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClose, faHeart } from "@fortawesome/free-solid-svg-icons";
import Logo from '@/public/images/logo.svg';

import { Roboto_Mono } from 'next/font/google';
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

import Image from "next/image";
import Snail from '@/public/images/snail_linda.png';



export default function contact() {
    return (
        <>
        <Head title='contact'/>
        <header>
            <div>
                {/* <Logo aria-label='linda logo' className='logo'/> */}
                <div className='container_header_icon'>
                    <FontAwesomeIcon style={{fontSize:"80px"}} icon={faHeart} className='header_icon'></FontAwesomeIcon>
                </div>
            </div>

            <div>
                <nav>
                    <Link href="about">about</Link>
                    <Link href="projects">projects</Link>
                    <Link href="contact">contact</Link> 
                </nav>
                <Link href="/" className='container_header_icon'>
                    <FontAwesomeIcon style={{fontSize:"80px"}} icon={faClose} className='header_icon'></FontAwesomeIcon> 
                </Link> 
            </div>
        </header>
        <main>
            <h1>contact</h1>
            <section>
                <div>
                    <h2>want to know more?</h2>
                    <p className={robotoMono.className}>Please drop me an email or visit my linkedin profile that you find at the bottom.</p>
                    <p className={robotoMono.className}>i look forward to hearing from you!</p>
                    
                </div>
                <div className='container_img'>
                    <h4 className={robotoMono.className}>sincerely/</h4>
                    <Image src={Snail} alt="illustration giraffe reaching for pizza slice"/>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}