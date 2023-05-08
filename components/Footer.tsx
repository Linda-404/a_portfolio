import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div>
                <h4>linda.ellekari@gmail.com</h4>
                <Link href='https://www.linkedin.com/in/linda-nilsson-8b82b01b2/' target="_blank"
                      rel="noreferrer" className="footer_link">
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight}></FontAwesomeIcon>
                    <h4>linkedin</h4>
                </Link>
            </div>
            <h5>made by linda 2023</h5>
        </footer>
    )
}