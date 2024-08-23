import { useState } from 'react'
import useWindowDimensions from "../dimensions/windowDimensions"
import { Button, Modal } from "react-bootstrap"
import { FaHtml5, FaCss3Alt, FaReact, FaUnity, FaNodeJs, FaSquareGit } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiPrisma } from "react-icons/si"
import dart from '../../assets/images/dart.png'
import csharp from '../../assets/images/csharp.png'
import python from '../../assets/images/python.webp'
import vscode from '../../assets/images/vscode.png'
import flutter from '../../assets/images/flutter.webp'
import dthree from '../../assets/images/d3.png'
import slack from '../../assets/images/slack.png'
import firebase from '../../assets/images/firebase.svg'
import mapbox from '../../assets/images/mapbox.png'
import vs from '../../assets/images/visual-studio.png'
import swift from '../../assets/images/swift.webp'
const Skills = () => {
    const [modalState, setModalState] = useState(false)
    const [modalHeader, setModalHeader] = useState("")
    const [modalText, setModalText] = useState([])
    const onHandleModalShow = () => { setModalState(true) }
    const onHandleModalHide = () => { 
        setModalState(false) 
        setModalHeader("")
        setModalText("")
    }
    const { width, isMobile } = useWindowDimensions()
    const iconStyle = {
        width: isMobile ? width * 0.09 : width * 0.05,
        height: isMobile ? width * 0.09 : width * 0.05
    }
    const SkillButton = ({icon, description, header}) => {
        return (
            <button 
                title={description[0]}
                className='SkillIcon' 
                onClick={() => {
                    setModalHeader(header)
                    setModalText(description)
                    onHandleModalShow()
                }}
            >
                {icon}
            </button>
        )
    }
    return (
        <>
            <Modal 
                show={modalState} 
                onHide={onHandleModalHide}
                centered
            >
                <Modal.Header style={{fontFamily: 'Outfit', fontSize: 40}}>
                    {modalHeader}
                </Modal.Header>
                <Modal.Body style={{fontFamily: 'Outfit', fontSize: 30}}>
                    {modalText && modalText.map((text, index) => {
                       return (
                        <div key={text + index}> {text} </div>
                       ) 
                    })}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={onHandleModalHide}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <div
                style={{
                    paddingTop: 50,
                    paddingBottom: 50,
                    marginLeft: '15%', marginRight: '15%'
                }}
            >
                <h3 style={{textAlign: 'start', marginBottom: 10, fontFamily: 'Outfit', fontSize: isMobile ? width * 0.075 : width * 0.02}}> Skills </h3>
                <h2 style={{textAlign: 'start', marginBottom: 15, fontFamily: 'Outfit', fontSize: isMobile ? width * 0.065 : width * 0.025}}> Languages </h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                    <SkillButton 
                        icon={<img alt='csharp' src={csharp} style={iconStyle}/>} 
                        description={['C#','• Years of experience: 2']} 
                        header='Languages'
                    />
                    <SkillButton 
                        icon={<IoLogoJavascript style={iconStyle} color='#f7df1e'/>} 
                        description={['JavaScript','• Years of experience: 2']} 
                        header='Languages'
                    />
                    <SkillButton 
                        icon={<FaHtml5 style={iconStyle} color='#e34c26'/>} 
                        description={['HTML','• Years of experience: 2']}
                        header='Languages'
                    />
                    <SkillButton 
                        icon={<FaCss3Alt style={iconStyle} color='#007FFF'/>} 
                        description={['CSS','• Years of experience: 2']}
                        header='Languages'
                    />
                    <SkillButton 
                        icon={<img alt='python' src={python} style={iconStyle}/>} 
                        description={['Python','• Years of experience: 2']} 
                        header='Languages'
                    />
                    <SkillButton 
                        icon={<img alt='swift' src={swift} style={iconStyle}/>} 
                        description={['Swift','• Years of experience: 2']} 
                        header='Languages'
                    />
                    <SkillButton 
                        icon={<BiLogoPostgresql style={iconStyle} color='#008bb9'/>} 
                        description={['PostgreSQL','• Years of experience: 1']} 
                        header='Languages'
                    />
                    <SkillButton 
                        icon={<img alt='dart' src={dart} style={iconStyle}/>} 
                        description={['Dart','• Years of experience: 1']} 
                        header='Languages'
                    />
                </div>
                <h2 style={{textAlign: 'start', marginTop: 15, marginBottom: 15, fontFamily: 'Outfit', fontSize: isMobile ? width * 0.065 : width * 0.025}}> Technologies and Frameworks </h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                    <SkillButton 
                        icon={<FaReact style={iconStyle} color='#61DBFB'/>} 
                        description={['React and React-Native','• Years of experience: 2']} 
                        header='Technologies and Frameworks'
                    />
                    <SkillButton 
                        icon={<FaNodeJs style={iconStyle} color='#68A063' className='SkillIcon'/>} 
                        description={['Node.js','• Years of experience: 2']} 
                        header='Technologies and Frameworks'
                    />
                    <SkillButton 
                        icon={<FaUnity style={iconStyle} className='SkillIcon'/>} 
                        description={['Unity Game Engine','• Years of experience: 2']} 
                        header='Technologies and Frameworks'
                    />
                    <SkillButton 
                        icon={<img alt='firebase' src={firebase} style={iconStyle} className='SkillIcon'/>} 
                        description={['Google Firebase','• Years of experience: 2']} 
                        header='Technologies and Frameworks'
                    />
                    <SkillButton 
                        icon={<img alt='mapbox' src={mapbox} style={iconStyle} className='SkillIcon'/>} 
                        description={['MapBox','• Years of experience: 1']} 
                        header='Technologies and Frameworks'
                    />
                    <SkillButton 
                        icon={<SiPrisma style={iconStyle} className='SkillIcon'/>} 
                        description={['Prisma ORM','• Years of experience: 1']} 
                        header='Technologies and Frameworks'
                    />
                    <SkillButton 
                        icon={<img alt='flutter' src={flutter} style={iconStyle} className='SkillIcon'/>} 
                        description={['Flutter','• Years of experience: 1']} 
                        header='Technologies and Frameworks'
                    />
                    <SkillButton 
                        icon={<img alt='dthree' src={dthree} style={iconStyle}/>} 
                        description={['D3.js','• Years of experience: 1']} 
                        header='Technologies and Frameworks'
                    />
                </div>
                <h2 style={{textAlign: 'start', marginTop: 15, marginBottom: 15, fontFamily: 'Outfit', fontSize: isMobile ? width * 0.065 : width * 0.025}}> Developer Tools </h2>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                    <SkillButton 
                        icon={<FaSquareGit style={iconStyle} color='#F1502F' className='SkillIcon'/>} 
                        description={['Git','• Years of experience: 3']} 
                        header='Developer Tools'
                    />
                    <SkillButton 
                        icon={<img alt='vs' src={vs} style={iconStyle} className='SkillIcon'/>} 
                        description={['Visual Studio','• Years of experience: 2']} 
                        header='Developer Tools'
                    />
                    <SkillButton 
                        icon={<img alt='vscode' src={vscode} style={iconStyle} className='SkillIcon'/>} 
                        description={['Visual Studio Code','• Years of experience: 2']} 
                        header='Developer Tools'
                    />
                    <SkillButton 
                        icon={<img alt='slack' src={slack} style={iconStyle} className='SkillIcon'/>} 
                        description={['Slack','• Years of experience: 1']} 
                        header='Developer Tools'
                    />
                </div>
            </div>
        </>
    )
}

export default Skills