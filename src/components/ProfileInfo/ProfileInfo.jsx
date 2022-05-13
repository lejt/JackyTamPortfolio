import "./ProfileInfo.css";
import jackyheadshot from "../../assets/images/JFT_headShot.png";
import {Popover, OverlayTrigger} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProfileInfo() {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Here is my email:</Popover.Header>
          <Popover.Body>
            jacky.tam92@outlook.com
          </Popover.Body>
        </Popover>
    );

    const scrollDown = () => {
        const pageHeight = window.innerHeight;
        window.scrollTo({top: pageHeight, behavior: 'smooth'});
    }

    return (
        <div className="profile">
            <div className="profile__container">
                <img className="profile__headshot profile__headshot__floating" src={jackyheadshot} alt="" />
                <div className="profile__intro">
                    <div className="profile__desc profile__desc__floating">
                        <p className="profile__type">
                            Hi, I am <span className="profile__name">Jacky Tam</span>. 
                        </p>
                        <p className="profile__type2">
                            I am a software and mechanical engineer who 
                        </p>
                        <p className="profile__type3">
                            loves to innovate, test, and sustain cool projects
                        </p>
                    </div>
                    <div className="profile__links">
                        <ul>
                            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                <li><a href="#" className="profile__email profile__icon__float"><FontAwesomeIcon icon={faEnvelope} className="profile__icon" /></a></li>
                            </OverlayTrigger>
                            
                            <li><a href="https://www.linkedin.com/in/jackyfutam/" target="_blank" className="profile__icon__float2"><FontAwesomeIcon icon={faLinkedinIn} className="profile__icon" /></a></li>
                            <li><a href="https://github.com/lejt" target="_blank" className="profile__icon__float3"><FontAwesomeIcon icon={faGithub} className="profile__icon" /></a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <svg className="arrows" onClick={scrollDown}>
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
    )
}