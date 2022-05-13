import "./ResumePage.css";
import { useEffect } from 'react';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Navbar from "../../components/Navbar/Navbar";
import Resume from "../../components/Resume/Resume";

export default function ResumePage() {

    useEffect(() => {
        const pageHeight = window.innerHeight;
        window.scrollTo({top: pageHeight, behavior: 'instant'});
    },[]);

    return (
        <>
            < ProfileInfo />
            < Navbar />
            <div className="resume__page">
                < Resume />
            </div>
        </>
    )
}