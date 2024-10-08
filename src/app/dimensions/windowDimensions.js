import { useState, useEffect} from 'react';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    const isMobile = width <= 768
    return { width, height, isMobile }
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
    
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}

export default useWindowDimensions