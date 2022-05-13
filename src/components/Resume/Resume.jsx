import "./Resume.css";
import {Row, Col, Badge} from 'react-bootstrap';
import badmintonJPG from "../../assets/images/badminton.jpeg";
import kickBoxingJPG from "../../assets/images/kickboxing.jpeg";
import gundamJPG from "../../assets/images/gundam.jpg";
import mechProjectJPG from "../../assets/images/mechproject.jpeg";
import golfJPG from "../../assets/images/golf.jpeg";
import DownloadIcon from '@mui/icons-material/Download';

export default function Resume() {

    return (
        <div className="resume">
            <div className="resume__container slide-in-left">

                <Row className="resume__info">
                    <h1>Jacky Tam</h1>
                    <p>Engineering Enthusiast</p>
                </Row>
                
                <Row className="resume__content">
                    <Col  className="resume__col__border resume__col"> 
                        <div className="resume__projects resume__content__component">
                            <h4 className="resume__catTitle">PROJECTS</h4>
                            <div className="resume__project__list">
                                <div className="resume__project">
                                    <h5>UPGD</h5>
                                    <ul>
                                        <li>
                                            Built full-stack E-commerce single page web-app to allow users to purchase computer hardware through secure API payment portal and token-based encoded auth
                                        </li>
                                        <li>
                                            Utilized React Hooks to construct dynamic data from users, orders, and cart with intuitive UI design for modern UX
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume__project">
                                    <h5>Union Catalogue</h5>
                                    <ul>
                                        <li>
                                            Collaborated in Python Django project to help libraries promote outreach to younger population with mobile facing app  
                                        </li>
                                        <li>
                                            Created all model schemas, forms, and renders with function-based views and implemented RESTful APIs in Django
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume__project">
                                    <h5>Pasta-fy</h5>
                                    <ul>
                                        <li>
                                            Built MEN stack full CRUD responsive application that served users data on pasta ingredients and personal dish creation that can be view, rated, and commented by other users 
                                        </li>
                                        <li>
                                            Integrated RESTful routing, Google OAuth 2.0, model ERDs in MVC architecture in 1 week sprint
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume__project">
                                    <h5>Amazon Clone</h5>
                                    <ul>
                                        <li>
                                            Utilized React and firebase to replicate the Amazon website with full E-commerce functionality 
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume__project">
                                    <h5>Modern Simon Game</h5>
                                    <ul>
                                        <li>
                                            Designed an eye-catching 3-difficulty-mode memory game with audio and event responsiveness
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume__project">
                                    <h5>InvestMint</h5>
                                    <ul>
                                        <li>
                                            Partnered with a developer in Hackathon BMU competition placing top 20 with mobile app focused on education in NFTs
                                        </li>
                                    </ul>
                                    {/* <a href="https://lejt.github.io/SimonGame/" className="resume__project__links" target="_blank">https://lejt.github.io/SimonGame/</a>
                                    <a href="https://lejt.github.io/SimonGame/" className="resume__project__links" target="_blank">https://lejt.github.io/SimonGame/</a> */}
                                </div>
                            </div>
                        </div> 
                        
                    </Col>
                    <Col className="resume__col">
                        <div className="resume__education resume__content__component">
                            <h4 className="resume__catTitle">EDUCATION</h4>
                            <div className="resume__education__history">
                                <p><strong>Software Engineer Immersive</strong></p>
                                <p>General Assembly</p>
                                <p><small>Nov 2021 - Feb 2022</small></p>
                                <ul>
                                    <li>
                                        An intensive, twelve-week, 450+ hours program focused on product development fundamentals, object-oriented programming, MVC frameworks, and data modeling
                                    </li>
                                </ul>
                            </div>
                            <div className="resume__education__history">
                                <p><strong>BSc in Mechanical Engineering</strong></p>
                                <p>University of Illinois at Urbana-Champaign</p>
                                <p><small>Dec 2017</small></p>
                            </div>
                        </div>
                        <div className="resume__skills resume__content__component">
                            <h4 className="resume__catTitle">SKILLS</h4>
                            <div className="resume__skills__container">
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">React</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Express</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">MongoDB</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">NodeJS</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Python</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Django</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">HTML</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">CSS</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Javascript</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Matlab</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">jQuery</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Bootstrap</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Materialize</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Bulma</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">Ant Design</Badge>{' '}
                                <Badge pill bg="warning" text="dark" className="resume__skill__badge">PostgreSQL</Badge>{' '}
                            </div>
                        </div>
                        <div className="resume__career resume__content__component">
                            <h4 className="resume__catTitle">WORK EXPERIENCE</h4>
                            <div className="resume__career__history">
                                <p><strong>Property Manager</strong></p>
                                <p>Pacific Bonus Inc.</p>
                                <p><small>2019 - 2021</small></p>                              
                            </div>
                            <div className="resume__career__history">
                                <p><strong>Mechanical Engineer</strong></p>
                                <p>John Deere</p>
                                <p><small>Aug 2016 - Jan 2017</small></p>
                            </div>
                            <div className="resume__career__history">
                                <p><strong>Mechanical Engineer Intern</strong></p>
                                <p>DMN Technology Ltd.</p>
                                <p><small>Aug 2014 - Dec 2014</small></p>
                            </div>
                        </div>
                        <div className="resume__content__component">
                            <h4 className="resume__catTitle">HOBBIES</h4>
                            <div className="resume__hobbies">
                                <div className="resume__hobby">
                                    <img src={badmintonJPG} alt="" />
                                    <figcaption>Badminton</figcaption>
                                </div>
                                <div className="resume__hobby">
                                    <img src={kickBoxingJPG} alt="" />
                                    <figcaption>Muay Thai</figcaption>
                                </div>
                                <div className="resume__hobby">
                                    <img src={gundamJPG} alt="" />
                                    <figcaption>Model Building</figcaption>
                                </div>
                                <div className="resume__hobby">
                                    <img src={mechProjectJPG} alt="" />
                                    <figcaption>Robotic Projects</figcaption>
                                </div>
                                <div className="resume__hobby">
                                    <img src={golfJPG} alt="" />
                                    <figcaption>Golf</figcaption>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <a href="JackyTam_Resume.pdf" download>
                    <button className="button-82-pushable" role="button">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                        <DownloadIcon/>Download my Resume
                        </span>
                    </button>
                </a>
            </div>
            
        </div>
    )
}