import "./HomePage.css";
import { useEffect } from 'react';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import DownloadIcon from '@mui/icons-material/Download';
import ContactForm from "../../components/ContactForm/ContactForm";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    });

    return (
        <div className="homepage">
            {/* < ProfileInfo />
            < Navbar /> */}
            {/* 
            < Resume />
            < OtherProjects />
            < ContactForm /> */}
            < ProjectsPage />
        </div>
    )
}
