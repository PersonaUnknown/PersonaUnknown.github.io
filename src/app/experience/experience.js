import { Accordion } from "react-bootstrap"
import useWindowDimensions from "../dimensions/windowDimensions"
import washu from '../../assets/images/washu.png'
import pepperdine from '../../assets/images/pepperdine.png'
import portal from '../../assets/images/portal.png'
const Experience = () => {
    const { width, isMobile } = useWindowDimensions()
    const containerStyle = {
        paddingLeft: isMobile ? '5%' : '15%',
        paddingRight: isMobile ? '5%' : '15%',
        paddingTop: isMobile ? 25 : 50, 
        paddingBottom: isMobile ? 40 : 65,
        backgroundColor: 'antiquewhite'
    }
    const imgStyle = {
        width: isMobile ? width * 0.175 : width * 0.075,
        height: isMobile ? width * 0.175 : width * 0.075
    }
    const Divider = () => {
        return (
            <div 
                style={{
                    backgroundColor: 'black', 
                    height: isMobile ? 1.5 : 3, 
                    flex: 1,
                    margin: 'auto'
                }}
            />
        )
    }
    const headerStyle = {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        marginLeft: 10, 
        marginRight: 10, 
        fontSize: isMobile ? width * 0.04 : width * 0.02
    }
    const bodyStyle = {
        fontSize: isMobile ? width * 0.04 : width * 0.015
    }
    return (
        <div style={containerStyle} className="Outfit">
            <h2 style={{fontSize: isMobile ? width * 0.08 : width * 0.02}}>
                Work Experience
            </h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <img alt='portal' src={portal} style={imgStyle}/>
                        <div style={headerStyle}>
                            <span style={{fontWeight: 'bold'}}>
                                Portal Career Discovery
                            </span>
                            <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                                <span>
                                    Software Engineer
                                </span>
                                <Divider/>
                                <span>
                                    May 2024
                                </span>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        I serve as one of the lead developers for developing a short-form video content iOS app. using React-Native, Prisma, and PostgreSQL.
                        I assist in full-stack development, creating front-end using React-Native and back-end functionalities with Prisma ORM, PostgreSQL, and Node.js.
                        Originally an intern for this startup company, my initial roles involved improving the app but also working on the company's landing page site, made
                        in React.
                    </Accordion.Body> 
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <img alt='asia' src={washu} style={imgStyle}/>
                        <div style={headerStyle}>
                            <span style={{fontWeight: 'bold'}}>
                                Asia in St. Louis (WashU)
                            </span>
                            <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                                <span>
                                    Software Engineer (Part-Time)
                                </span>
                                <Divider/>
                                <span>
                                    Nov 2023
                                </span>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        I am a part-time developer employed by WashU to development an Android application. 
                        I act as the main programmer for the project that is built using C#, Unity, Firebase, and the MapBox API to display 
                        custom geographical data regarding historical sites in St. Louis. I coordinate with my supervisor consistently 
                        to ensure frequent progress is maintained in addition to scheduling important milestones.
                    </Accordion.Body> 
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <img alt='washu' src={washu} style={imgStyle}/>
                        <div style={headerStyle}>
                            <span style={{fontWeight: 'bold'}}>
                                Washington University in St. Louis
                            </span>
                            <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                                <span>
                                    Computer Science T.A.
                                </span>
                                <Divider/>
                                <span>
                                    Aug 2023 - May 2024
                                </span>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        I served as the head T.A. for the beginner and intermediate Video Game Programming courses at WashU. 
                        The role involved answering questions and concerns from students through appointments via email or Piazza. 
                        I graded weekly assignments and informed students of potential mistakes to ensure they understood the concepts 
                        introduced for that assignment. The course is taught in C# and the Unity Game Engine.
                    </Accordion.Body> 
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <img alt='washu' src={pepperdine} style={imgStyle}/>
                        <div style={headerStyle}>
                            <span style={{fontWeight: 'bold'}}>
                                Pepperdine University
                            </span>
                            <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                                <span>
                                    Computer Science T.A.
                                </span>
                                <Divider/>
                                <span>
                                    Jan 2020 - May 2021
                                </span>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body style={bodyStyle}>
                        <span>
                            I assisted in the following courses: Computer Systems (Assembly), Data Structures (C++), and Programming Paradigms (Java).
                            For each class, I graded assignments in a timely manner while also 
                            letting students know of potential improvements on course concepts. 
                            I coordinated with the professor regularly to make sure grading was completed on-schedule. 
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Experience