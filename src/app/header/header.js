import { motion } from 'framer-motion'
import useWindowDimensions from '../dimensions/windowDimensions'
import Lottie from "lottie-react";
import codingAnimation from '../../assets/animations/coding.json'
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import gmail from '../../assets/images/gmail.svg'
const Header = ({ onShowResume }) => {
    const { width, isMobile } = useWindowDimensions()
    const mediaButtonDimensions = {
        width: isMobile ? width * 0.1 : width * 0.0375, 
        height: isMobile ? width * 0.1 : width * 0.0375
    }
    const mediaButtonStyle = {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        flex: 1, 
        cursor:'pointer',
        width: isMobile ? width * 0.1 : width * 0.0375, 
        height: isMobile ? width * 0.1 : width * 0.0375,
        textDecoration: 'none'
    }
    const goToLinkedin = () => {
        window.location.href='https://www.linkedin.com/in/eric-tabuchi-a7116821b/'
    }
    const goToGithub = () => {
        window.location.href='https://github.com/PersonaUnknown'
    }
    const sendMail = () => {
        window.location.href='mailto:erictabuchi1@gmail.com'
    }
    return (
        <div 
            className='Header'
            style={{
                flexDirection: isMobile ? 'column' : 'row', 
                display: 'flex', 
                marginLeft: isMobile ? '10%' : '15%', 
                marginRight: isMobile ? '10%' : '15%',
                gap: 20
            }}
        >
            <motion.div 
                style={{
                    marginTop: 'auto',
                    marginBottom: 0,
                    flex: 1,
                    opacity: 0
                }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'linear', duration: 1.5 }}
            >
                <h1 style={{fontWeight: 'bold', fontSize: isMobile ? width * 0.125 : width * 0.045}}>
                    Hello! I'm <br></br> 
                    <span style={{color: '#0a66c2'}}> Eric Tabuchi.</span>
                </h1>
                <div style={{display:'flex', flexDirection: 'row', gap: 10, marginTop: 10}}>
                    <div
                        style={{
                            width: isMobile ? 5 : 10,
                            height: 'auto',
                            backgroundColor: '#0a66c2'
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: isMobile ? width * 0.035 : width * 0.015
                        }}
                    >
                        <span>
                            M.S. Computer Engineering 
                        </span>
                        <span>
                            B.S. Computer Engineering 
                        </span>
                        <span>
                            B.S. Computer Science and Mathematics
                        </span>

                    </div>
                </div>
            </motion.div>
            <div style={{flex: 1}}>
                <Lottie 
                    animationData={codingAnimation} 
                    loop={false} 
                    autoplay={false}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
                <div
                    style={{
                        flexDirection: 'row',
                        display: 'flex',
                        marginTop: 15,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <button
                        onClick={onShowResume}
                        style={{
                            flex: 3,
                            marginRight: isMobile ? 0 : 20,
                            color: 'white',
                            fontSize: isMobile ? width * 0.05 : width * 0.02,
                            cursor: 'pointer',
                            borderRadius: 35,
                        }}
                        className='ResumeButton'
                    >
                        Resume
                    </button>
                    <button
                        className='MediaButton'
                        onClick={goToLinkedin}
                        style={mediaButtonStyle}
                    >
                        <FaLinkedin color='#0a66c2' style={mediaButtonDimensions}/>
                    </button>
                    <button
                        className='MediaButton'
                        onClick={goToGithub}
                        style={mediaButtonStyle}
                    >
                        <FaGithub color='black' style={mediaButtonDimensions}/>
                    </button>
                    <button
                        className='MediaButton'
                        onClick={sendMail}
                        style={mediaButtonStyle}
                    >
                        <img alt='gmail' src={gmail} style={mediaButtonDimensions}/>
                    </button>
                </div>
            </div>
        </div>
    )
}  

export default Header