import Head from '@/components/Head';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { Roboto_Mono } from 'next/font/google';
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

import Image from 'next/image';
import Giraff from '@/public/images/pizza_giraffe.png';



export default function About() {
    return (
        <>
        <Head title='about' />
        <header>
            <div>
                <h1>Linda</h1>
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
            <h1>nilsson</h1>
            <section>
                <div className='container_img'>
                    <Image src={Giraff} alt="illustration giraffe reaching for pizza slice"/>
                    <h5 className={robotoMono.className}>/giraffe from my dont feed the animals art series, 2023</h5>
                </div>
                <div>
                    <h2>who am i? <span>/short version</span></h2>
                    <p className={robotoMono.className}>frontend developer graduate of 2022. thrive on beeing creative and explore ways of expression.</p>
                    <p className={robotoMono.className}>moved to norway in 2008. worked most of my years in the veterinary field as a vet assistant and lastly head of reseption at a clinic in oslo.</p>
                    <p className={robotoMono.className}>had the opportunity in 2020 to persue my interest in webdesign.</p>
                    <p className={robotoMono.className}>at the moment am continuing to build on my skills, keeping up with trends and trying new technology.</p>
                </div>
            </section>
            
            <section>
                <h2>professional background</h2>
                <div>
                    <div>
                        <h3>education</h3>
                        <ul className={robotoMono.className}>
                            <li>frontend development /noroff school of technology and digital media</li>
                            <li>high school (build on) /bjorknes</li>
                            <li>high school /rudbeck</li>
                        </ul>
                    </div>
                    <div>
                        <h3>employment</h3>
                        <ul className={robotoMono.className}>
                            <li>head of reseption /dyrenesvenn sinsen</li>
                            <li>store clerk /dyresjappa</li>
                            <li>veterinary assistant /vinderen dyreklinikk</li>
                            <li>veterinary assistant /avivet as</li>
                        </ul>
                    </div>
                </div>       
            </section>

            <section>
                <h2>interests</h2>
                <div>
                    <div>
                        <h3>hobbies</h3>
                        <ul className={robotoMono.className}>
                            <li>adobe illustrator</li>
                            <li>adobe photoshop</li>
                            <li>photography</li>
                            <li>writing shortstories</li>
                        </ul>
                    </div> 
                    <div>
                        <h3>skills</h3>
                        <ul className={robotoMono.className}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>javascript</li>
                            <li>next js</li>
                            <li>adobe creative cloud</li>
                        </ul>
                    </div>
                </div>        
            </section>    
        </main>
        <Footer />
        </>  
    )
}