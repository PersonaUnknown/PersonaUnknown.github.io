import Profile from '../../assets/images/profile.jpg'
import useWindowDimensions from '../dimensions/windowDimensions'
const Background = () => {
    const { width, isMobile } = useWindowDimensions()
    return(
        <div 
            style={{
                backgroundColor: 'antiquewhite',
                paddingTop: isMobile ? 20 : 50,
                paddingBottom: isMobile ? 20 : 50,
                paddingLeft: isMobile ? '7.5%' : '15%',
                paddingRight: isMobile ? '7.5%' : '15%',
            }}
        >
            <h2 style={{textDecoration:'underline', textAlign: 'center', marginBottom: 25, fontFamily: 'Outfit', fontSize: isMobile ? width * 0.075 : width * 0.03}}> About Me </h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: 25
                }}
            >
                <div
                    style={{
                        flex: 1
                    }}
                >
                    <div
                        style={{
                            width: isMobile ? width * 0.5 : width * 0.25,
                            height: isMobile ? width * 0.5 :  width * 0.25,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    >
                        <img 
                            alt='profile' 
                            src={Profile}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        fontFamily: 'Outfit',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        fontSize: isMobile ? width * 0.045 : width * 0.015
                    }}
                >
                    <ul>
                        <li>
                            I attended <a href={"https://www.pepperdine.edu/"}>Pepperdine University</a> where I received a B.S. in Computer Science and Mathematics
                            and then attended <a href={"https://washu.edu/"}>Washington University in St. Louis</a> where I earned a B.S. and M.S. in Computer Engineering
                        </li>
                        <li>
                            I'm currently working on <a href={"https://portalcareerdiscovery.com/"}> Portal </a>, a career discovery iOS application.
                        </li>
                        <li>
                            I am interested in Web and Mobile Full Stack development. I also enjoy Video Game Development and hardware design.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Background