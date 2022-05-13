import "./Projects.css";
import { useState } from 'react';

export default function Projects() {
    const [projectMsg, setProjectMsg] = useState(false);
    const [projectText, setProjectText] = useState({
        title: "",
        info: ""
    });
    const [projectLink, setProjectLink] = useState("");
    const [projectGithub, setProjectGithub] = useState("");

    function handleProjectInfo(planet) {
        setProjectMsg(!projectMsg);
        switch (planet) {
            case 1:
                setProjectText({title:"Simon Game - Modernized Classic Memory Game", info:"HTML CSS Javascript"});
                setProjectLink("https://lejt.github.io/SimonGame/");
                setProjectGithub("https://github.com/lejt/SimonGame");
                break;
            case 2:
                setProjectText({title:"Pasta-Fy - Food Discovery", info:"MongoDB Express NodeJS Bootstrap Google-OAuth-2.0"});
                setProjectLink("https://pastafysei.herokuapp.com/");
                setProjectGithub("https://github.com/lejt/Pasta-fy");
                break;
            case 3:
                setProjectText({title:"Union Catalogue - Library Management", info:"Python Django Open-Library-API Bootstrap PostgreSQL"});
                setProjectLink("https://union-catalogue-app.herokuapp.com/");
                // setProjectLink("https://unioncatalogue.herokuapp.com/");
                setProjectGithub("https://github.com/lejt/Union-Catalogue");
                break;
            case 4:
                setProjectText({title:"UPGD - E-Commerce", info:"React MongoDB Express NodeJS Data-Scrapper-API Bulma Stripe-API User-Token-Auth"});
                setProjectLink("https://u-p-g-d.herokuapp.com/");
                setProjectGithub("https://github.com/lejt/UPGD");
                break;
            case 5:
                setProjectText({title:"InvestMint - NFT Education (Hackathon BMU)", info:"React Ant-Design Bing-News-API Alchemy-NFT-API"});
                setProjectLink("https://invest-mint.herokuapp.com/");
                setProjectGithub("https://github.com/ACM-BMU/HackBMU-5.0-Team-SEI");
                break;
            case 6:
                setProjectText({title:"Amazon Clone", info:"React Firebase"});
                setProjectLink("https://clone-84264.web.app/");
                setProjectGithub("https://github.com/lejt/Amazon_Clone");
                break;
            default:
                setProjectText("");
                break;
        }
    }

    return (
        <div className="Projects">
            <div id="galaxy">
                <div id="sun">
                    <span className="c1">P</span>
                    <span className="c2">R</span>
                    <span className="c3">O</span>
                    <span className="c4">J</span>
                    <span className="c5">E</span>
                    <span className="c6">C</span>
                    <span className="c7">T</span>
                    <span className="c8">S</span>
                </div>

                <div className="lava"></div>
                <div className="sphere"></div>

                <div id="mercury" className="orbit" >
                    <div className="pos" onClick={() => handleProjectInfo(1)}>
                        <div className="planet"></div>
                    </div>
                </div>      
                <div id="mercury2" className="orbit">
                    <div className="pos" onClick={() => handleProjectInfo(2)} >
                        <div className="planet2"></div>
                    </div>
                </div>      
                <div id="mercury3" className="orbit" >
                    <div className="pos" onClick={() => handleProjectInfo(3)}>
                        <div className="planet3"></div>
                    </div>
                </div>      
                <div id="mercury4" className="orbit" >
                    <div className="pos" onClick={() => handleProjectInfo(4)}>
                        <div className="planet4"></div>
                    </div>
                </div>      
                <div id="mercury5" className="orbit" >
                    <div className="pos" onClick={() => handleProjectInfo(5)}>
                        <div className="planet5"></div>
                    </div>
                </div>      
                <div id="mercury6" className="orbit" >
                    <div className="pos" onClick={() => handleProjectInfo(6)}>
                        <div className="planet6"></div>
                    </div>
                </div>      
            </div>

            {projectMsg ?
            <div className="msg">
                <p className="projects__type projects__title">
                    {projectText.title}
                </p>
                <p className="projects__type projects__info">
                    {projectText.info}
                </p>
                <div className="projects__link__container">
                    <a href={projectLink} target="_blank">
                        <button className="projects__link projects__deploy">Visit Project</button>
                    </a>
                    <a href={projectGithub} target="_blank">
                        <button className="projects__link projects__github">Github</button>
                    </a>
                </div>
            </div>
            :
            ""
            }

        </div>
    )
}