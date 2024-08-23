// CSS
import './App.css';
// React
import { useState, useEffect, useRef } from 'react';
// Components
import Header from './app/header/header';
import HoverCardDisplay from './app/hoverCard/hoverCardDisplay';
import Background from './app/background/background';
import Spacer from './app/spacer/spacer';
// import ToggleSwitch from './app/toggleSwitch/toggleSwitch';
import Skills from './app/skills/skills';
import Experience from './app/experience/experience';
// Bootstrap Components
import { Button, Modal, Offcanvas } from 'react-bootstrap';
// Icons
import { FaCircleArrowUp } from 'react-icons/fa6';
// Hooks
import useWindowDimensions from './app/dimensions/windowDimensions';
// Data
import logo from './assets/images/logo-transparent.png'
import { IoMenu } from "react-icons/io5"
import { FaX } from 'react-icons/fa6';
import projectData from './assets/data/projects.json'
function App() {
  // Refs
  const startRef = useRef(null)
  const aboutMeRef = useRef(null)
  const skillsRef = useRef(null)
  const workRef = useRef(null)
  const projectRef = useRef(null)
  // Dimensions Hook
  const { width, isMobile } = useWindowDimensions()
  // Resume
  const [resumeModal, setResumeModal] = useState(false)
  const onHandleResumeShow = () => { setResumeModal(true) }
  const onHandleResumeHide = () => { setResumeModal(false) }
  // NavBar
  const [showNavBar, setShowNavBar] = useState(false)
  const handleNavBarShow = () => { setShowNavBar(true) }
  const handleNavBarHide = () => { setShowNavBar(false) }
  const getButtonFontSize = () => {
    if (width >= 1200) {
        return 45
    } else if (width >= 992) {
        return 35
    } else if (width >= 768) {
        return 24
    }

    return 24
  }
  const buttonStyle = {
      fontSize: getButtonFontSize()
  }
  const reloadPage = () => {
      window.location.reload();
  }
  // Page Refresh 
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className="App">
      <Modal 
        show={resumeModal} 
        onHide={onHandleResumeHide}
        fullscreen
        centered
      >
        <Modal.Body style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <iframe
            src="https://drive.google.com/file/d/1ZCVSPkfPUmq84GB1SXQkKJut_rOMlncX/preview" 
            title='resume'
            style={{
              width: isMobile ? width * 0.8: 826,
              height: isMobile ? width * 1.15 : 1150
            }}
          >
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHandleResumeHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {isMobile &&
      <Offcanvas 
        className='vh-100' 
        placement='top' 
        show={showNavBar} 
        onHide={handleNavBarHide}
        scroll={true}
        responsive="md"
      >
        <Offcanvas.Header>
          <button 
            className='ms-auto NavBarButton' 
            onClick={handleNavBarHide}>
            <FaX style={{width: 30, height: 30}}/>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <button 
              className='NavBarButton' 
              style={{fontSize: 30}} 
              onClick={() => {
                handleNavBarHide()
                setTimeout(() => {
                  aboutMeRef.current.scrollIntoView({behavior: 'smooth'});
                }, 300)
              }}
            > 
              About Me 
            </button>
            <button 
              className='NavBarButton' 
              style={{fontSize: 30}} 
              onClick={() => {
                handleNavBarHide()
                setTimeout(() => {
                  skillsRef.current.scrollIntoView({behavior: 'smooth'})
                }, 300)
              }}
            > 
              Skills 
            </button>
            <button 
              className='NavBarButton' 
              style={{fontSize: 30}}
              onClick={() => {
                handleNavBarHide()
                setTimeout(() => {
                  workRef.current.scrollIntoView({behavior: 'smooth'})
                }, 300)
              }}
            > 
              Experience 
            </button>
            <button 
              className='NavBarButton' 
              style={{fontSize: 30}}
              onClick={() => {
                handleNavBarHide()
                setTimeout(() => {
                  projectRef.current.scrollIntoView({behavior: 'smooth'})
                }, 300)
              }}
            > 
              Projects 
            </button>
            <Spacer height={25}/>
            <div style={{display: 'flex'}}>
              <div style={{flex:1}}/>
              {/* <ToggleSwitch/> */}
              <div style={{flex:1}}/>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      }
      <div style={{flex: 1}} ref={startRef}>
        <div className="NavBar">
          <button 
              className='NavBarButton'
              style={{
                  marginRight: 'auto',
                  paddingLeft: 15
              }}
              onClick={reloadPage}
          >
              <img alt='logo' src={logo} height={isMobile ? 50 : width * 0.05}/>
          </button>
          {isMobile ?
          <>
              <button 
                  onClick={handleNavBarShow}
                  style={{
                      backgroundColor: 'transparent',
                      borderColor: 'transparent'
                  }}
              >
                  <IoMenu 
                      style={{
                          width: 50,
                          height: 50
                      }}
                  />
              </button>
          </>
          :
          <>
              <div style={{flex:1}}/>
              <button className='NavBarButton' style={buttonStyle} onClick={() => {aboutMeRef.current.scrollIntoView({behavior: 'smooth'})}}> About Me </button>
              <button className='NavBarButton' style={buttonStyle} onClick={() => {skillsRef.current.scrollIntoView({behavior: 'smooth'})}}> Skills </button>
              <button className='NavBarButton' style={buttonStyle} onClick={() => {workRef.current.scrollIntoView({behavior: 'smooth'})}}> Experience </button>
              <button className='NavBarButton' style={buttonStyle} onClick={() => {projectRef.current.scrollIntoView({behavior: 'smooth'})}}> Projects </button>
              <div style={{width: 10}}/>
              {/* <div style={{flex:1}}/> */}
              {/* <ToggleSwitch/> */}
          </>
          }
        </div>
        {isMobile && <Spacer height={50}/>}
        <Header onShowResume={onHandleResumeShow}/>
        <Spacer height={50}/>
        <div ref={aboutMeRef}>
          <Background/>
        </div>
        <div ref={skillsRef}>
            <Skills/>
        </div>
        <div ref={workRef}>
          <Experience/>
        </div>
        <div ref={projectRef}>
          <HoverCardDisplay displayLabel='Projects' displayData={projectData}/>
        </div>
        <Spacer height={25}/>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}/>
          <button 
            className='ReturnButton' 
            style={{backgroundColor: 'transparent', borderColor: 'transparent', width: isMobile ? width * 0.25 : width * 0.1, height: isMobile ? width * 0.25 : width * 0.1}}
            onClick={() => { startRef.current.scrollIntoView({behavior: 'smooth'})}}
          >
              <FaCircleArrowUp style={{width: '100%', height: '100%'}}/>
          </button>
          <div style={{flex: 1}}/>
        </div>
      </div>
      <Spacer height={50}/>
      <span style={{marginLeft: 15}}>
        Computer Programming image made by Abhilesh Kapdi from <a href={"https://lottiefiles.com/"}> https://lottiefiles.com/ </a>
      </span>
      <Spacer height={25}/>
    </div>
  );
}

export default App;
