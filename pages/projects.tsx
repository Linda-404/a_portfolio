import Head from '@/components/Head';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClose, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Roboto_Mono } from 'next/font/google';
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

import Image from "next/image";

import Logo from '@/public/images/logo.svg';

// import design images
import BadImg from '@/public/images/Badinfluencecoder_Design.png';
import ArtsyImg from '@/public/images/Artsy_Design.png';
import GoFishImg from 'public/images/GoFish_Design.png';
import SuckerPunchImg from 'public/images/SuckerPunch_Design.png';

// import code images
import SpoilerImg from '@/public/images/screenshot_spoilralert.png';
import BimImg from '@/public/images/screenshot_bim_blog.png';
import StyleImg from '@/public/images/screenshot_styleguide.png';
import WitchImg from '@/public/images/screenshot_witchescaultron.png';


export default function Projects() {
    return (
        <>
        <Head title='projects' />
        <header>
            <div>
                <Logo aria-label='linda logo' className='logo'/>
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
            <h1>projects</h1>
            <section>
                <div className='card_design'>
                    <Image src={BadImg} alt='Badinfluencecoder adobe XD design'/>
                    <h3>badinfluencecoder /adobe xd design</h3>
                    <h5 className={robotoMono.className}>on request job, in production: nextjs</h5>
                </div>
                <div className='card_design'>
                    <Image src={ArtsyImg} alt='Artsy adobe XD design'/>
                    <h3>artsy /adobe xd design</h3>
                    <h5 className={robotoMono.className}>art ecommerce design</h5>
                </div>
                <div className='card_design'>
                    <Image src={GoFishImg} alt='GoFish adobe XD design'/>
                    <h3>gofish /adobe xd design</h3>
                    <h5 className={robotoMono.className}>fishing website design</h5>
                </div>
                <div className='card_design'>
                    <Image src={SuckerPunchImg} alt='Suckerpunch adobe XD design'/>
                    <h3>suckerpunch /adobe xd design</h3>
                    <h5 className={robotoMono.className}>festival website design</h5>
                </div>   
            </section>

            <section>
                <div className='card_project'>
                    <Image src={SpoilerImg} alt='Spoilralert project'/>
                    <div className='card_project_content'>
                        <div>
                            <h3>Spoilralert /nextjs, sass</h3>
                            <h5 className={robotoMono.className}>movieDB, in production</h5>
                        </div>
                        <Link href='https://dev--spoilralert.netlify.app/' target="_blank"
                      rel="noreferrer" className='icon'>
                            <FontAwesomeIcon style={{fontSize:"40px"}} icon={faArrowRight}></FontAwesomeIcon> 
                        </Link>
                    </div>   
                </div>
                <div className='card_project'>
                    <Image src={BimImg} alt='Badinfluencemom blog project'/>
                    <div className='card_project_content'>
                        <div>
                            <h3>badinfluencemom /html, css, js</h3>
                            <h5 className={robotoMono.className}>blog</h5>
                        </div>
                        <Link href='https://badinfluencemom-v2.netlify.app/index.html' target="_blank"
                      rel="noreferrer" className='icon'>
                            <FontAwesomeIcon style={{fontSize:"40px"}} icon={faArrowRight}></FontAwesomeIcon> 
                        </Link>
                    </div>   
                </div>
                <div className='card_project'>
                    <Image src={StyleImg} alt='Spaces styleguide project'/>
                    <div className='card_project_content'>
                        <div>
                            <h3>Spaces /react, css</h3>
                            <h5 className={robotoMono.className}>styleguide, not responsive</h5>
                        </div>
                        <Link href='https://styleguide-linda-nilsson.netlify.app/' target="_blank"
                      rel="noreferrer" className='icon'>
                            <FontAwesomeIcon style={{fontSize:"40px"}} icon={faArrowRight}></FontAwesomeIcon> 
                        </Link>
                    </div>   
                </div>
                <div className='card_project'>
                    <Image src={WitchImg} alt='Witchescauldron website project'/>
                    <div className='card_project_content'>
                        <div>
                            <h3>witches cauldron /nextjs, sass</h3>
                            <h5 className={robotoMono.className}>drink recipe website</h5>
                        </div>
                        <Link href='https://witches-cauldron.netlify.app/' target="_blank"
                      rel="noreferrer" className='icon'>
                            <FontAwesomeIcon style={{fontSize:"40px"}} icon={faArrowRight}></FontAwesomeIcon> 
                        </Link>
                    </div>   
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}