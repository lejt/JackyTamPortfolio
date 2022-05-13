import "./ContactPage.css";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useEffect } from 'react';

export default function ContactPage() {

    useEffect(() => {
        const pageHeight = window.innerHeight;
        window.scrollTo({top: pageHeight, behavior: 'instant'});
    },[]);
    
    return (
        <div>
            < ProfileInfo />
            < Navbar />
            <div className="contact__page">
                < ContactForm />
            </div>
        </div>
    )
}