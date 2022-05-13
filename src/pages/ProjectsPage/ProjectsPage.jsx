import "./ProjectsPage.css";
import { useEffect } from 'react';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";

export default function ProjectsPage() {

    useEffect(() => {
        const pageHeight = window.innerHeight;
        window.scrollTo({top: pageHeight, behavior: 'instant'});
    },[]);

    return (
        <div>
            < ProfileInfo />
            < Navbar />
            <div className="projects__page">
                < Projects />
            </div>
        </div>
    )
}