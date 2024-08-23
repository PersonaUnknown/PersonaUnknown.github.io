import { useState, useEffect} from 'react'
import useWindowDimensions from "../dimensions/windowDimensions"
import HoverCard from "./hoverCard"
import TextHeader from '../textHeader/textHeader'
import { ImageSelector } from '../images/imageSelector'
const HoverCardDisplay = ({ displayLabel, displayData }) => {
    const { width, isMobile } = useWindowDimensions()
    const [cardWidth, setCardWidth] = useState(width)
    const [cardGap, setCardGap] = useState(width * 0.02)
    useEffect(() => {
        const newWidth = isMobile ? width * 0.27 : width * 0.18
        const newGap = width * 0.02
        setCardWidth(newWidth)
        setCardGap(newGap)
    }, [width, isMobile])

    return (
        <div style={{marginTop: isMobile ? 0 : 25, marginBottom: isMobile ? 0 : 25}}>
            <TextHeader label={displayLabel} width={width}/>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginLeft: isMobile ? '5%' : '20%',
                    marginRight: isMobile ? '5%' : '20%',
                    gap: cardGap
                }}
            >
                {displayData && displayData.map(project => {
                    const label = project.label
                    const description = project.description
                    const image = ImageSelector(label)
                    const link = project.link
                    return (
                        <HoverCard
                            key={label}
                            width={cardWidth}
                            label={label}
                            description={description}
                            background={image}
                            link={link}
                        />
                    )
                })}
            </div>

        </div>    
    )
}

export default HoverCardDisplay